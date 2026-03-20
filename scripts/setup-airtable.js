const BASE_ID = process.env.AIRTABLE_BASE_ID || "";
const TOKEN = process.env.AIRTABLE_TOKEN || "";
const TABLE_ID = process.env.AIRTABLE_TABLE_ID || "";

async function fetchJSON(url, options) {
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${res.status}: ${err}`);
  }
  return res.json();
}

async function getExistingFields() {
  const data = await fetchJSON(
    `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`
  );
  const table = data.tables.find((t) => t.id === TABLE_ID);
  return table?.fields || [];
}

async function deleteField(fieldId) {
  const res = await fetch(
    `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables/${TABLE_ID}/fields/${fieldId}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${TOKEN}` },
    }
  );
  if (!res.ok) {
    console.log(`  Could not delete field ${fieldId} (may be primary)`);
  }
}

async function createField(field) {
  return fetchJSON(
    `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables/${TABLE_ID}/fields`,
    { method: "POST", body: JSON.stringify(field) }
  );
}

async function updateField(fieldId, field) {
  return fetchJSON(
    `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables/${TABLE_ID}/fields/${fieldId}`,
    { method: "PATCH", body: JSON.stringify(field) }
  );
}

const FIELDS = [
  {
    name: "Nicho",
    type: "singleSelect",
    options: {
      choices: [
        { name: "Clinica_Estetica" },
        { name: "Advocacia" },
        { name: "Imobiliaria" },
        { name: "Odontologia" },
        { name: "Contabilidade" },
        { name: "Fotografo_Casamento" },
        { name: "Personal_Trainer" },
        { name: "Psicologo" },
        { name: "Veterinario" },
        { name: "Arquiteto" },
      ],
    },
  },
  { name: "Cidade", type: "singleLineText" },
  {
    name: "Slug",
    type: "formula",
    options: {
      formula: 'LOWER(SUBSTITUTE(Nicho & "-" & Cidade, " ", "-"))',
    },
  },
  { name: "Headline_Dinamica", type: "singleLineText" },
  { name: "Dor_Especifica", type: "multilineText" },
  { name: "Beneficio_Chave", type: "multilineText" },
  {
    name: "Link_Afiliado",
    type: "url",
  },
  {
    name: "Snapshot_Bonus",
    type: "url",
  },
  {
    name: "Status",
    type: "singleSelect",
    options: {
      choices: [
        { name: "Draft" },
        { name: "Published" },
        { name: "Archived" },
      ],
    },
  },
  { name: "Meta_Description", type: "multilineText" },
];

async function main() {
  console.log("Fetching existing fields...");
  const existing = await getExistingFields();

  // Rename primary field to "Nicho" (can't delete primary)
  const primary = existing.find((f) => f.id === existing[0]?.id);
  if (primary && primary.name !== "Nicho") {
    console.log(`Renaming primary field "${primary.name}" -> will be replaced by Nicho logic`);
  }

  // Delete non-primary default fields
  for (const field of existing.slice(1)) {
    console.log(`Deleting field: ${field.name}`);
    await deleteField(field.id);
  }

  // Update primary field name to first text field or handle Nicho
  // Primary field can't be singleSelect, so we'll rename it to a temp name
  // and create Nicho as a separate field
  if (primary) {
    console.log(`Updating primary field to "ID_Registro"`);
    await updateField(primary.id, { name: "ID_Registro" });
  }

  // Create all fields
  for (const field of FIELDS) {
    console.log(`Creating field: ${field.name}`);
    try {
      await createField(field);
      console.log(`  OK`);
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }

  console.log("\nDone! Table configured.");
}

main().catch(console.error);
