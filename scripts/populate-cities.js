const BASE_ID = process.env.AIRTABLE_BASE_ID || "";
const TABLE_ID = process.env.AIRTABLE_TABLE_ID || "";
const TOKEN = process.env.AIRTABLE_TOKEN || "";
const AFFILIATE = "https://www.gohighlevel.com/?fp_ref=luis-fernando12";

const NICHOS = [
  "Clinica_Estetica",
  "Advocacia",
  "Imobiliaria",
  "Odontologia",
  "Contabilidade",
  "Fotografo_Casamento",
  "Personal_Trainer",
  "Psicologo",
  "Veterinario",
  "Arquiteto",
];

const CIDADES = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Curitiba",
  "Porto Alegre",
];

const HEADLINES = {
  Clinica_Estetica: (c) => `Clínica de Estética Lotada em ${c}`,
  Advocacia: (c) => `Mais Clientes para seu Escritório de Advocacia em ${c}`,
  Imobiliaria: (c) => `Venda Mais Imóveis em ${c} com Automação`,
  Odontologia: (c) => `Consultório Odontológico Sempre Lotado em ${c}`,
  Contabilidade: (c) => `Escale seu Escritório de Contabilidade em ${c}`,
  Fotografo_Casamento: (c) => `Mais Casamentos Fechados em ${c}`,
  Personal_Trainer: (c) => `Lote sua Agenda de Personal em ${c}`,
  Psicologo: (c) => `Mais Pacientes para seu Consultório em ${c}`,
  Veterinario: (c) => `Clínica Veterinária Movimentada em ${c}`,
  Arquiteto: (c) => `Mais Projetos de Arquitetura em ${c}`,
};

const DORES = {
  Clinica_Estetica: (c) => `Sua clínica em ${c} tem mais buracos na agenda do que horários preenchidos? Clientes somem depois da primeira sessão e você não sabe por quê? A concorrência em ${c} está investindo em automação enquanto você ainda depende de indicação.`,
  Advocacia: (c) => `Seu escritório em ${c} perde horas triando leads desqualificados pelo WhatsApp? Prazos escapam do controle? Em ${c}, os escritórios que mais crescem já automatizaram a captação de clientes.`,
  Imobiliaria: (c) => `Leads de imóveis em ${c} chegam e ninguém responde a tempo? Corretores disputam os mesmos contatos sem controle? O mercado imobiliário de ${c} é competitivo demais pra perder oportunidades.`,
  Odontologia: (c) => `Pacientes faltam sem avisar e sua cadeira em ${c} fica vazia? A recepcionista perde tempo ligando pra confirmar consultas? Dentistas em ${c} que automatizaram já reduziram faltas em 65%.`,
  Contabilidade: (c) => `Clientes do seu escritório em ${c} mandam documentos por 5 canais diferentes? Você perde prazos porque a informação está espalhada? Escritórios de contabilidade em ${c} já centralizaram tudo em um sistema.`,
  Fotografo_Casamento: (c) => `Noivas em ${c} pedem orçamento e somem? Você perde o timing porque estava em outro evento? Fotógrafos em ${c} que respondem em 2 minutos fecham 3x mais contratos.`,
  Personal_Trainer: (c) => `Alunos em ${c} cancelam em cima da hora e você fica com horário vago? Sua renda oscila todo mês? Personal trainers em ${c} que automatizaram cobrança e agenda cresceram 50%.`,
  Psicologo: (c) => `Pacientes em ${c} não retornam depois da primeira sessão? Leads do Instagram perguntam o preço e desaparecem? Psicólogos em ${c} que usam funil automatizado lotam a agenda.`,
  Veterinario: (c) => `Tutores em ${c} esquecem das vacinas e retornos? Sua clínica depende só de indicação? Clínicas veterinárias em ${c} que enviam lembretes automáticos triplicaram os retornos.`,
  Arquiteto: (c) => `Clientes em ${c} pedem orçamento e somem sem retorno? Você gasta mais tempo administrando do que projetando? Escritórios de arquitetura em ${c} que automatizaram o follow-up fecham 2x mais projetos.`,
};

const META_DESCRIPTIONS = {
  Clinica_Estetica: (c) => `Sistema de gestão para clínicas de estética em ${c}. CRM, agendamento automático e WhatsApp integrado. Teste grátis 14 dias.`,
  Advocacia: (c) => `Sistema para escritórios de advocacia em ${c}. Captação automática de clientes, CRM jurídico e controle de prazos. Teste grátis.`,
  Imobiliaria: (c) => `Sistema para imobiliárias em ${c}. Distribuição de leads, CRM imobiliário e automação de follow-up. Teste grátis 14 dias.`,
  Odontologia: (c) => `Sistema para consultórios odontológicos em ${c}. Agendamento online, confirmação automática e CRM dental. Teste grátis.`,
  Contabilidade: (c) => `Sistema para escritórios de contabilidade em ${c}. CRM contábil, portal de documentos e automação fiscal. Teste grátis.`,
  Fotografo_Casamento: (c) => `Sistema para fotógrafos de casamento em ${c}. Automação de orçamentos, CRM de noivas e follow-up automático. Teste grátis.`,
  Personal_Trainer: (c) => `Sistema para personal trainers em ${c}. Agendamento, cobrança automática e gestão de alunos. Teste grátis.`,
  Psicologo: (c) => `Sistema para psicólogos em ${c}. Agendamento online, prontuário digital e captação de pacientes. Teste grátis.`,
  Veterinario: (c) => `Sistema para clínicas veterinárias em ${c}. Prontuário pet, lembretes automáticos e CRM veterinário. Teste grátis.`,
  Arquiteto: (c) => `Sistema para escritórios de arquitetura em ${c}. CRM de projetos, funil de vendas e automação. Teste grátis.`,
};

async function createRecords(records) {
  const res = await fetch(
    `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records }),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${res.status}: ${err}`);
  }
  return res.json();
}

async function main() {
  const allRecords = [];

  for (const nicho of NICHOS) {
    for (const cidade of CIDADES) {
      allRecords.push({
        fields: {
          ID_Registro: `${nicho.toLowerCase()}-${cidade.toLowerCase().replace(/ /g, "-")}`,
          Nicho: nicho,
          Cidade: cidade,
          Headline_Dinamica: HEADLINES[nicho](cidade),
          Dor_Especifica: DORES[nicho](cidade),
          Beneficio_Chave: "",
          Link_Afiliado: AFFILIATE,
          Status: "Published",
          Meta_Description: META_DESCRIPTIONS[nicho](cidade),
        },
      });
    }
  }

  console.log(`Creating ${allRecords.length} city pages...`);

  // Airtable allows max 10 records per request
  for (let i = 0; i < allRecords.length; i += 10) {
    const batch = allRecords.slice(i, i + 10);
    const result = await createRecords(batch);
    console.log(`  Batch ${Math.floor(i / 10) + 1}: ${result.records.length} records created`);
  }

  console.log("Done! Run 'node scripts/sync-airtable.js' next.");
}

main().catch(console.error);
