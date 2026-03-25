const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const DOMAIN = "https://gestaomelhor.vercel.app";
const KEY_FILE = path.join(__dirname, "..", "service-account.json");
const LOG_FILE = path.join(__dirname, "..", "data", "indexed-log.json");
const BATCH_LIMIT = parseInt(process.argv[2] || "150", 10);

function loadLog() {
  try {
    return JSON.parse(fs.readFileSync(LOG_FILE, "utf-8"));
  } catch {
    return { indexed: [], lastRun: null };
  }
}

function saveLog(log) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(log, null, 2), "utf-8");
}

async function main() {
  const allPages = require("../data/all-pages.json");
  const airtableNiches = require("../data/niches.json");

  // All possible URLs
  const allUrls = [
    `${DOMAIN}/`,
    ...airtableNiches.map((n) => `${DOMAIN}/${n.slug}`),
    ...allPages.map((p) => `${DOMAIN}/${p.slug}`),
  ];
  const unique = Array.from(new Set(allUrls));

  // Load log and filter already indexed
  const log = loadLog();
  const indexedSet = new Set(log.indexed);
  const pending = unique.filter((url) => !indexedSet.has(url));

  console.log(`Total URLs: ${unique.length}`);
  console.log(`Already indexed: ${log.indexed.length}`);
  console.log(`Pending: ${pending.length}`);
  console.log(`Batch limit: ${BATCH_LIMIT}\n`);

  if (pending.length === 0) {
    console.log("All URLs already indexed!");
    return;
  }

  const batch = pending.slice(0, BATCH_LIMIT);

  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const client = await auth.getClient();
  const indexing = google.indexing({ version: "v3", auth: client });

  let success = 0;
  let errors = 0;

  for (const url of batch) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: "URL_UPDATED" },
      });
      console.log(`OK [${success + errors + 1}/${batch.length}]: ${url}`);
      log.indexed.push(url);
      success++;
    } catch (err) {
      console.log(`FAIL [${success + errors + 1}/${batch.length}]: ${url} - ${err.message}`);
      errors++;
    }
  }

  log.lastRun = new Date().toISOString();
  saveLog(log);

  console.log(`\nDone! ${success} success, ${errors} errors.`);
  console.log(`Total indexed so far: ${log.indexed.length}/${unique.length}`);
  console.log(`Remaining: ${pending.length - batch.length}`);
}

main().catch(console.error);
