import { NextRequest, NextResponse } from "next/server";

const BASE_ID = process.env.AIRTABLE_BASE_ID || "";
const TABLE_ID = process.env.AIRTABLE_LEADS_TABLE_ID || "";
const TOKEN = process.env.AIRTABLE_TOKEN || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, contato, nicho, slug, origem } = body;

    if (!nome || !contato) {
      return NextResponse.json({ error: "Nome e contato obrigatórios" }, { status: 400 });
    }

    const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Nome: nome,
              Contato: contato,
              Nicho: nicho || "",
              Slug: slug || "",
              Data: new Date().toISOString(),
              Origem: origem || "Inline",
            },
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: res.status });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
