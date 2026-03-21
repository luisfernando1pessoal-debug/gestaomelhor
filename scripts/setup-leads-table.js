const BASE_ID = process.env.AIRTABLE_BASE_ID || "appQB5LGnJR9U1HEO";
const TOKEN = process.env.AIRTABLE_TOKEN || "";

async function main() {
  console.log("Creating Leads_Capturados table...");

  const res = await fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Leads_Capturados",
      fields: [
        { name: "Nome", type: "singleLineText" },
        { name: "Contato", type: "singleLineText", description: "WhatsApp ou Email" },
        { name: "Nicho", type: "singleLineText" },
        { name: "Slug", type: "singleLineText" },
        { name: "Data", type: "dateTime", options: { timeZone: "America/Sao_Paulo", dateFormat: { name: "iso" }, timeFormat: { name: "24hour" } } },
        { name: "Origem", type: "singleSelect", options: { choices: [{ name: "Inline" }, { name: "Exit-Intent" }] } },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`Error: ${res.status} - ${err}`);
    return;
  }

  const data = await res.json();
  console.log(`Table created! ID: ${data.id}`);
  console.log("Save this table ID as AIRTABLE_LEADS_TABLE_ID in your .env and Vercel.");
}

main().catch(console.error);
