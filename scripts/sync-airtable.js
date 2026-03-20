const fs = require("fs");
const path = require("path");

const BASE_ID = process.env.AIRTABLE_BASE_ID || "";
const TABLE_ID = process.env.AIRTABLE_TABLE_ID || "";
const TOKEN = process.env.AIRTABLE_TOKEN || "";

async function fetchRecords() {
  const records = [];
  let offset = null;

  do {
    const url = new URL(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`);
    url.searchParams.set("filterByFormula", "{Status} = 'Published'");
    if (offset) url.searchParams.set("offset", offset);

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`${res.status}: ${err}`);
    }

    const data = await res.json();
    records.push(...data.records);
    offset = data.offset;
  } while (offset);

  return records;
}

async function main() {
  console.log("Fetching published records from Airtable...");
  const records = await fetchRecords();

  const niches = records.map((r) => ({
    id: r.fields.ID_Registro || "",
    slug: r.fields.Slug || "",
    nicho: r.fields.Nicho || "",
    cidade: r.fields.Cidade || "",
    headline: r.fields.Headline_Dinamica || "",
    dor: r.fields.Dor_Especifica || "",
    beneficio: r.fields.Beneficio_Chave || "",
    linkAfiliado: r.fields.Link_Afiliado || "",
    snapshotBonus: r.fields.Snapshot_Bonus || "",
    metaDescription: r.fields.Meta_Description || "",
  }));

  const dataDir = path.join(__dirname, "..", "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  const outputPath = path.join(dataDir, "niches.json");
  fs.writeFileSync(outputPath, JSON.stringify(niches, null, 2), "utf-8");

  console.log(`Saved ${niches.length} niches to data/niches.json`);
}

main().catch(console.error);
