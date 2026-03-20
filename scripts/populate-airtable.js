const BASE_ID = process.env.AIRTABLE_BASE_ID || "";
const TABLE_ID = process.env.AIRTABLE_TABLE_ID || "";
const TOKEN = process.env.AIRTABLE_TOKEN || "";
const AFFILIATE = "https://www.gohighlevel.com/?fp_ref=luis-fernando12";

const NICHES = [
  {
    ID_Registro: "clinica-estetica",
    Nicho: "Clinica_Estetica",
    Cidade: "",
    Headline_Dinamica: "Agenda Lotada para sua Clínica de Estética",
    Dor_Especifica: "Sua agenda tem mais buracos do que horários preenchidos? Clientes somem depois da primeira sessão e você não sabe por quê? Enquanto isso, sua concorrente posta stories com a agenda lotada.",
    Beneficio_Chave: "Redução de 70% nas faltas com confirmação automática por WhatsApp e sistema de fidelização integrado.",
    Meta_Description: "Sistema completo de gestão para clínicas de estética. CRM, agendamento automático e WhatsApp integrado. Teste grátis 14 dias.",
  },
  {
    ID_Registro: "advocacia",
    Nicho: "Advocacia",
    Cidade: "",
    Headline_Dinamica: "Mais Clientes para seu Escritório de Advocacia",
    Dor_Especifica: "Você perde horas triando leads desqualificados pelo WhatsApp? Prazos escapam do controle em planilhas? Seus concorrentes já automatizaram a captação enquanto você ainda responde mensagem por mensagem.",
    Beneficio_Chave: "Triagem automática de leads com funil qualificado e controle de prazos integrado ao CRM.",
    Meta_Description: "Sistema de gestão para escritórios de advocacia. Captação automática de clientes, CRM jurídico e controle de prazos. Teste grátis.",
  },
  {
    ID_Registro: "imobiliaria",
    Nicho: "Imobiliaria",
    Cidade: "",
    Headline_Dinamica: "Venda Mais Imóveis com Automação Inteligente",
    Dor_Especifica: "Leads chegam pelo portal e ninguém responde a tempo? Corretores disputam os mesmos contatos sem controle? Imóveis ficam meses parados enquanto a concorrência fecha negócio.",
    Beneficio_Chave: "Distribuição automática de leads entre corretores e follow-up por WhatsApp em menos de 2 minutos.",
    Meta_Description: "Sistema completo para imobiliárias. Distribuição de leads, CRM imobiliário e automação de follow-up. Teste grátis 14 dias.",
  },
  {
    ID_Registro: "odontologia",
    Nicho: "Odontologia",
    Cidade: "",
    Headline_Dinamica: "Consultório Sempre Lotado com Automação",
    Dor_Especifica: "Pacientes faltam sem avisar e sua cadeira fica vazia? A recepcionista perde tempo ligando pra confirmar consultas uma por uma? Você investe em anúncio mas não consegue converter em agendamento.",
    Beneficio_Chave: "Confirmação automática por WhatsApp reduz faltas em 65% e reagendamento instantâneo preenche horários vagos.",
    Meta_Description: "Sistema de gestão para consultórios odontológicos. Agendamento online, confirmação automática e CRM dental. Teste grátis.",
  },
  {
    ID_Registro: "contabilidade",
    Nicho: "Contabilidade",
    Cidade: "",
    Headline_Dinamica: "Escale seu Escritório de Contabilidade",
    Dor_Especifica: "Clientes mandam documentos por 5 canais diferentes? Você perde prazo de entrega porque a informação está espalhada? Seu escritório cresce mas o controle continua no WhatsApp pessoal.",
    Beneficio_Chave: "Portal centralizado para recebimento de documentos e automação de lembretes de obrigações fiscais.",
    Meta_Description: "Sistema de gestão para escritórios de contabilidade. CRM contábil, portal de documentos e automação fiscal. Teste grátis.",
  },
  {
    ID_Registro: "fotografo-casamento",
    Nicho: "Fotografo_Casamento",
    Cidade: "",
    Headline_Dinamica: "Mais Casamentos Fechados por Mês",
    Dor_Especifica: "Noivas pedem orçamento e somem? Você perde o timing de resposta porque estava em outro evento? Seu concorrente responde em 2 minutos enquanto você leva 2 dias.",
    Beneficio_Chave: "Resposta automática com portfólio personalizado e funil de conversão que transforma consulta em contrato assinado.",
    Meta_Description: "Sistema para fotógrafos de casamento. Automação de orçamentos, CRM de noivas e follow-up automático. Teste grátis.",
  },
  {
    ID_Registro: "personal-trainer",
    Nicho: "Personal_Trainer",
    Cidade: "",
    Headline_Dinamica: "Lote sua Agenda de Personal Trainer",
    Dor_Especifica: "Alunos cancelam em cima da hora e você fica com horário vago? Cobra por WhatsApp e perde o controle de quem pagou? Sua renda oscila todo mês porque não tem previsibilidade.",
    Beneficio_Chave: "Cobrança automática recorrente e sistema de agendamento que reduz cancelamentos em 50%.",
    Meta_Description: "Sistema para personal trainers. Agendamento, cobrança automática e gestão de alunos em um só lugar. Teste grátis.",
  },
  {
    ID_Registro: "psicologo",
    Nicho: "Psicologo",
    Cidade: "",
    Headline_Dinamica: "Mais Pacientes para seu Consultório de Psicologia",
    Dor_Especifica: "Pacientes não retornam depois da primeira sessão? Você gasta horas gerenciando agenda e pagamentos em vez de focar no atendimento? Leads do Instagram perguntam o preço e desaparecem.",
    Beneficio_Chave: "Funil automatizado que converte seguidores em pacientes e sistema de recorrência que garante retorno.",
    Meta_Description: "Sistema para psicólogos. Agendamento online, prontuário digital e automação de captação de pacientes. Teste grátis.",
  },
  {
    ID_Registro: "veterinario",
    Nicho: "Veterinario",
    Cidade: "",
    Headline_Dinamica: "Clínica Veterinária Sempre Movimentada",
    Dor_Especifica: "Tutores esquecem das vacinas e retornos? Sua clínica depende de indicação boca a boca e não tem previsibilidade? Fichas de pacientes ainda são em papel ou planilha desatualizada.",
    Beneficio_Chave: "Lembretes automáticos de vacinas e retornos por WhatsApp que trazem o tutor de volta sem esforço.",
    Meta_Description: "Sistema para clínicas veterinárias. Prontuário pet, lembretes automáticos e CRM veterinário. Teste grátis 14 dias.",
  },
  {
    ID_Registro: "arquiteto",
    Nicho: "Arquiteto",
    Cidade: "",
    Headline_Dinamica: "Mais Projetos para seu Escritório de Arquitetura",
    Dor_Especifica: "Clientes pedem orçamento e somem sem dar retorno? Você não sabe em que etapa cada projeto está? Gasta mais tempo administrando do que projetando.",
    Beneficio_Chave: "Pipeline visual de projetos e follow-up automático que converte orçamentos em contratos fechados.",
    Meta_Description: "Sistema para escritórios de arquitetura. CRM de projetos, funil de vendas e automação de follow-up. Teste grátis.",
  },
];

async function createRecords(records) {
  const res = await fetch(
    `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: records.map((r) => ({
          fields: {
            ID_Registro: r.ID_Registro,
            Nicho: r.Nicho,
            Cidade: r.Cidade,
            Headline_Dinamica: r.Headline_Dinamica,
            Dor_Especifica: r.Dor_Especifica,
            Beneficio_Chave: r.Beneficio_Chave,
            Link_Afiliado: AFFILIATE,
            Status: "Published",
            Meta_Description: r.Meta_Description,
          },
        })),
      }),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${res.status}: ${err}`);
  }
  return res.json();
}

async function main() {
  console.log("Populating Airtable with 10 niches...");
  // Airtable allows max 10 records per request
  const result = await createRecords(NICHES);
  console.log(`Created ${result.records.length} records.`);
  console.log("Done!");
}

main().catch(console.error);
