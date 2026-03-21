const React = require("react");
const { Document, Page, Text, View, StyleSheet, renderToFile, Font, Link } = require("@react-pdf/renderer");
const path = require("path");

// Use Helvetica (built-in) to avoid font encoding issues

const ACCENT = "#635BFF";
const DARK = "#0A2540";
const GRAY = "#425466";
const LIGHT_BG = "#F6F9FC";

const s = StyleSheet.create({
  page: { paddingVertical: 50, paddingHorizontal: 50, fontFamily: "Helvetica", fontSize: 10, color: GRAY, lineHeight: 1.6 },
  cover: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: DARK, paddingHorizontal: 60 },
  coverBadge: { backgroundColor: ACCENT, color: "white", fontSize: 9, fontWeight: 600, paddingVertical: 4, paddingHorizontal: 14, borderRadius: 20, marginBottom: 24 },
  coverTitle: { fontSize: 28, fontWeight: 700, color: "white", textAlign: "center", lineHeight: 1.3, marginBottom: 16 },
  coverSubtitle: { fontSize: 13, color: "#8492A6", textAlign: "center", lineHeight: 1.5, marginBottom: 40 },
  coverFooter: { fontSize: 9, color: "#546678", textAlign: "center" },
  h1: { fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 12, marginTop: 8 },
  h2: { fontSize: 15, fontWeight: 700, color: DARK, marginBottom: 8, marginTop: 20 },
  h3: { fontSize: 12, fontWeight: 600, color: ACCENT, marginBottom: 6, marginTop: 14 },
  p: { fontSize: 10, marginBottom: 8, lineHeight: 1.65 },
  bold: { fontWeight: 600 },
  accent: { color: ACCENT, fontWeight: 600 },
  box: { backgroundColor: LIGHT_BG, borderRadius: 8, padding: 16, marginVertical: 10, borderLeftWidth: 3, borderLeftColor: ACCENT },
  boxTitle: { fontSize: 11, fontWeight: 700, color: DARK, marginBottom: 6 },
  bullet: { flexDirection: "row", marginBottom: 4 },
  bulletDot: { width: 14, fontSize: 10, color: ACCENT, fontWeight: 700 },
  bulletText: { flex: 1, fontSize: 10 },
  nicheCard: { backgroundColor: "white", borderRadius: 8, padding: 14, marginVertical: 6, borderWidth: 1, borderColor: "#E3E8EE" },
  nicheTitle: { fontSize: 12, fontWeight: 700, color: DARK, marginBottom: 4 },
  nicheDor: { fontSize: 9, color: "#E25C5C", fontWeight: 600, marginBottom: 4 },
  nicheSolucao: { fontSize: 9, color: "#2ECC71", fontWeight: 600, marginBottom: 4 },
  nicheDesc: { fontSize: 9, color: GRAY },
  divider: { height: 1, backgroundColor: "#E3E8EE", marginVertical: 16 },
  ctaBox: { backgroundColor: ACCENT, borderRadius: 10, padding: 24, marginVertical: 16, alignItems: "center" },
  ctaTitle: { fontSize: 16, fontWeight: 700, color: "white", textAlign: "center", marginBottom: 8 },
  ctaText: { fontSize: 10, color: "white", textAlign: "center", opacity: 0.9, marginBottom: 12 },
  ctaLink: { fontSize: 11, fontWeight: 700, color: "white", textDecoration: "underline" },
  pageNum: { position: "absolute", bottom: 20, right: 50, fontSize: 8, color: "#8492A6" },
  tocItem: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: "#F0F0F0" },
  tocText: { fontSize: 11, color: DARK },
  tocPage: { fontSize: 11, color: ACCENT, fontWeight: 600 },
});

const Bullet = ({ children }) => (
  React.createElement(View, { style: s.bullet },
    React.createElement(Text, { style: s.bulletDot }, "->"),
    React.createElement(Text, { style: s.bulletText }, children)
  )
);

const NICHES = [
  {
    title: "Saude - Clinica de Estetica",
    dor: "Problema: 35% das consultas resultam em falta. Confirmacao manual por telefone consome 2h/dia.",
    solucao: "Solucao GHL: Fluxo automatico de confirmacao por WhatsApp 24h antes + lembrete 2h antes.",
    resultado: "Resultado: Reducao de 40% nas faltas. Economia de 10h/semana em trabalho manual. Recuperacao de R$3.200/mes em consultas que seriam perdidas.",
  },
  {
    title: "Direito - Escritorio de Advocacia",
    dor: "Problema: Leads chegam pelo site e Instagram, mas 60% nao recebem resposta em menos de 1h.",
    solucao: "Solucao GHL: Bot de triagem automatica que qualifica o lead, coleta o caso e agenda reuniao.",
    resultado: "Resultado: Tempo de resposta cai de 4h para 2min. Taxa de conversao sobe de 8% para 22%. 3x mais clientes sem contratar SDR.",
  },
  {
    title: "Servicos - Personal Trainer",
    dor: "Problema: Alunos cancelam apos 3 meses. Nao existe acompanhamento pos-treino sistematico.",
    solucao: "Solucao GHL: Sequencia de nurturing com dicas semanais, check-in automatico mensal e oferta de renovacao 15 dias antes do vencimento.",
    resultado: "Resultado: Retencao sobe de 45% para 72%. LTV do aluno aumenta de R$1.200 para R$2.880. Receita previsivel sem depender de indicacao.",
  },
];

const doc = React.createElement(Document, {},

  // === COVER ===
  React.createElement(Page, { size: "A4", style: { padding: 0 } },
    React.createElement(View, { style: s.cover },
      React.createElement(Text, { style: s.coverBadge }, "GUIA GRATUITO 2026"),
      React.createElement(Text, { style: s.coverTitle }, "O Guia da Empresa\nAutomatizada"),
      React.createElement(Text, { style: s.coverSubtitle }, "Como converter 3x mais clientes\nsem aumentar sua equipe."),
      React.createElement(View, { style: s.divider }),
      React.createElement(Text, { style: s.coverFooter }, "gestaomelhor.vercel.app\nO sistema certo para cada negocio")
    )
  ),

  // === TOC ===
  React.createElement(Page, { size: "A4", style: s.page },
    React.createElement(Text, { style: s.h1 }, "Indice"),
    React.createElement(View, { style: { marginTop: 10 } },
      ...[
        ["Capitulo 1 - A Mentalidade: CRM como coracao do lucro", "3"],
        ["Capitulo 2 - A Engenharia: Fluxos de Captura, Nutricao e Fechamento", "5"],
        ["Capitulo 3 - Os 3 Pilares da Conversao Automatica", "7"],
        ["Capitulo 4 - A Pagina Camaleao: Exemplos por Nicho", "9"],
        ["Proximo Passo: Comece Hoje", "11"],
      ].map(([text, page], i) =>
        React.createElement(View, { key: i, style: s.tocItem },
          React.createElement(Text, { style: s.tocText }, text),
          React.createElement(Text, { style: s.tocPage }, page)
        )
      )
    ),
    React.createElement(Text, { style: s.pageNum, render: ({ pageNumber }) => pageNumber }, "")
  ),

  // === CHAPTER 1: A MENTALIDADE ===
  React.createElement(Page, { size: "A4", style: s.page },
    React.createElement(Text, { style: s.h3 }, "CAPITULO 1"),
    React.createElement(Text, { style: s.h1 }, "A Mentalidade: Por que o CRM e o Coracao do Lucro em 2026"),
    React.createElement(Text, { style: s.p }, "O mercado mudou. Em 2026, o empresario que ainda depende de planilhas, agendas de papel e da memoria da secretaria esta perdendo dinheiro todos os dias - e o pior: sem perceber."),
    React.createElement(Text, { style: s.p }, "Um CRM (Customer Relationship Management) nao e apenas um software de gestao. E a infraestrutura invisivel que separa negocios que escalam de negocios que estagnam."),

    React.createElement(View, { style: s.box },
      React.createElement(Text, { style: s.boxTitle }, "A Regra dos 5 Minutos"),
      React.createElement(Text, { style: s.p }, "Estudos da Harvard Business Review mostram que empresas que respondem a um lead nos primeiros 5 minutos tem 21x mais chance de qualifica-lo. Apos 30 minutos, a probabilidade cai 100x."),
      React.createElement(Text, { style: s.accent }, "Sem automacao, essa janela se fecha antes de voce sequer ver a notificacao.")
    ),

    React.createElement(Text, { style: s.h2 }, "O Custo Invisivel de Nao Automatizar"),
    React.createElement(Bullet, {}, "Leads perdidos por falta de resposta rapida: -R$2.000 a R$8.000/mes"),
    React.createElement(Bullet, {}, "Horas gastas em tarefas repetitivas (confirmacoes, follow-ups): 15-20h/semana"),
    React.createElement(Bullet, {}, "Clientes que nao voltam por falta de relacionamento pos-venda: -30% do faturamento"),
    React.createElement(Bullet, {}, "Reputacao online estagnada por nao solicitar avaliacoes: oportunidade perdida"),

    React.createElement(Text, { style: s.h2 }, "A Nova Mentalidade"),
    React.createElement(Text, { style: s.p }, "O empresario de 2026 nao trabalha mais HORAS. Ele constroi SISTEMAS. A diferenca:"),
    React.createElement(View, { style: s.box },
      React.createElement(Text, { style: s.p }, "Empresario Tradicional: Trabalha 12h/dia, responde leads manualmente, depende de indicacao, nao sabe o CAC."),
      React.createElement(View, { style: s.divider }),
      React.createElement(Text, { style: s.p }, "Empresario Sistematico: Configura fluxos uma vez, leads sao respondidos em 2min 24/7, sabe exatamente quanto custa cada cliente e cada canal.")
    ),
    React.createElement(Text, { style: s.p }, "A boa noticia? Voce nao precisa de uma equipe de tecnologia. Precisa de uma unica plataforma que faca tudo."),
    React.createElement(Text, { style: s.pageNum, render: ({ pageNumber }) => pageNumber }, "")
  ),

  // === CHAPTER 2: A ENGENHARIA ===
  React.createElement(Page, { size: "A4", style: s.page },
    React.createElement(Text, { style: s.h3 }, "CAPITULO 2"),
    React.createElement(Text, { style: s.h1 }, "A Engenharia: Fluxos de Captura, Nutricao e Fechamento"),
    React.createElement(Text, { style: s.p }, "Todo negocio lucrativo opera com tres fluxos fundamentais. A maioria das empresas faz o primeiro mal e ignora os outros dois."),

    React.createElement(Text, { style: s.h2 }, "Fluxo 1: Captura Inteligente"),
    React.createElement(Text, { style: s.p }, "O objetivo e transformar um visitante anonimo em um contato identificado no seu CRM. Nao basta ter um formulario - voce precisa de:"),
    React.createElement(Bullet, {}, "Landing page otimizada com proposta de valor clara"),
    React.createElement(Bullet, {}, "Formulario que coleta apenas o essencial (nome + WhatsApp)"),
    React.createElement(Bullet, {}, "Resposta imediata automatica (email + WhatsApp em menos de 60s)"),
    React.createElement(Bullet, {}, "Tag automatica baseada na origem (Instagram, Google, indicacao)"),

    React.createElement(Text, { style: s.h2 }, "Fluxo 2: Nutricao Estrategica"),
    React.createElement(Text, { style: s.p }, "80% dos leads nao estao prontos para comprar no primeiro contato. Sem nutricao, voce perde 8 em cada 10 oportunidades."),
    React.createElement(View, { style: s.box },
      React.createElement(Text, { style: s.boxTitle }, "Sequencia de Nutricao em 7 Dias"),
      React.createElement(Bullet, {}, "Dia 0: Mensagem de boas-vindas + material gratuito"),
      React.createElement(Bullet, {}, "Dia 1: Caso de sucesso relevante ao nicho do lead"),
      React.createElement(Bullet, {}, "Dia 3: Conteudo educativo que resolve uma dor especifica"),
      React.createElement(Bullet, {}, "Dia 5: Depoimento de cliente + oferta suave"),
      React.createElement(Bullet, {}, "Dia 7: Oferta direta com escassez real (vagas limitadas)")
    ),

    React.createElement(Text, { style: s.h2 }, "Fluxo 3: Fechamento e Reativacao"),
    React.createElement(Text, { style: s.p }, "O fechamento nao e o fim - e o comeco do relacionamento mais lucrativo. Clientes existentes compram 5x mais que novos leads."),
    React.createElement(Bullet, {}, "Pesquisa de satisfacao automatica 48h apos o servico"),
    React.createElement(Bullet, {}, "Pedido de avaliacao no Google com link direto"),
    React.createElement(Bullet, {}, "Sequencia de recompra/renovacao 15 dias antes do vencimento"),
    React.createElement(Bullet, {}, "Campanha de reativacao para clientes inativos ha 60+ dias"),
    React.createElement(Text, { style: s.pageNum, render: ({ pageNumber }) => pageNumber }, "")
  ),

  // === CHAPTER 3: OS 3 PILARES ===
  React.createElement(Page, { size: "A4", style: s.page },
    React.createElement(Text, { style: s.h3 }, "CAPITULO 3"),
    React.createElement(Text, { style: s.h1 }, "Os 3 Pilares da Conversao Automatica"),

    React.createElement(Text, { style: s.h2 }, "Pilar 1: Velocidade de Resposta"),
    React.createElement(Text, { style: s.p }, "A velocidade e o novo diferencial competitivo. Nao importa quao bom e o seu servico se o lead ja fechou com o concorrente que respondeu primeiro."),
    React.createElement(View, { style: s.box },
      React.createElement(Text, { style: s.boxTitle }, "Implementacao Pratica"),
      React.createElement(Text, { style: s.p }, "Configure um chatbot de triagem que responde em menos de 30 segundos, qualifica o lead com 3 perguntas e agenda automaticamente no seu calendario. Isso funciona 24/7 - inclusive sabado as 23h quando voce esta dormindo e seu concorrente tambem.")
    ),

    React.createElement(Text, { style: s.h2 }, "Pilar 2: Prova Social Automatica"),
    React.createElement(Text, { style: s.p }, "92% dos consumidores leem avaliacoes online antes de comprar. Se voce nao tem um sistema para coletar avaliacoes, esta deixando seus clientes satisfeitos em silencio enquanto os insatisfeitos falam alto."),
    React.createElement(Bullet, {}, "Envio automatico de pedido de avaliacao apos cada servico"),
    React.createElement(Bullet, {}, "Filtro inteligente: satisfacao alta vai pro Google, baixa vai pra voce resolver"),
    React.createElement(Bullet, {}, "Widget de avaliacoes no seu site e landing pages"),

    React.createElement(Text, { style: s.h2 }, "Pilar 3: Recompra e Retencao"),
    React.createElement(Text, { style: s.p }, "Conquistar um novo cliente custa 5-7x mais do que manter um existente. A maioria das empresas gasta 90% do esforco em aquisicao e 10% em retencao. Inverta isso."),
    React.createElement(View, { style: s.box },
      React.createElement(Text, { style: s.boxTitle }, "O Loop de Retencao"),
      React.createElement(Bullet, {}, "Servico entregue -> Pesquisa de satisfacao (48h)"),
      React.createElement(Bullet, {}, "Satisfeito -> Pedido de avaliacao + indicacao"),
      React.createElement(Bullet, {}, "Check-in mensal automatico com dica relevante"),
      React.createElement(Bullet, {}, "Oferta de renovacao/upgrade 15 dias antes do vencimento"),
      React.createElement(Bullet, {}, "Reativacao automatica apos 60 dias de inatividade")
    ),
    React.createElement(Text, { style: s.pageNum, render: ({ pageNumber }) => pageNumber }, "")
  ),

  // === CHAPTER 4: PAGINA CAMALEAO ===
  React.createElement(Page, { size: "A4", style: s.page },
    React.createElement(Text, { style: s.h3 }, "CAPITULO 4"),
    React.createElement(Text, { style: s.h1 }, "A Pagina Camaleao: Exemplos Reais por Nicho"),
    React.createElement(Text, { style: s.p }, "A teoria e universal, mas a aplicacao e especifica. Veja como os 3 fluxos se adaptam a diferentes negocios:"),

    ...NICHES.map((niche, i) =>
      React.createElement(View, { key: i, style: s.nicheCard },
        React.createElement(Text, { style: s.nicheTitle }, niche.title),
        React.createElement(Text, { style: s.nicheDor }, niche.dor),
        React.createElement(Text, { style: s.nicheSolucao }, niche.solucao),
        React.createElement(Text, { style: s.nicheDesc }, niche.resultado)
      )
    ),

    React.createElement(View, { style: s.box },
      React.createElement(Text, { style: s.boxTitle }, "Ponto-chave"),
      React.createElement(Text, { style: s.p }, "Percebeu o padrao? Todos os negocios tem o mesmo problema: leads que escapam, clientes que nao voltam e tempo desperdicado em tarefas manuais. A solucao e a mesma plataforma - o que muda e o contexto.")
    ),
    React.createElement(Text, { style: s.pageNum, render: ({ pageNumber }) => pageNumber }, "")
  ),

  // === CTA PAGE ===
  React.createElement(Page, { size: "A4", style: s.page },
    React.createElement(Text, { style: s.h3 }, "PROXIMO PASSO"),
    React.createElement(Text, { style: s.h1 }, "Comece Hoje: Seu Teste Gratuito de 14 Dias"),
    React.createElement(Text, { style: s.p }, "Voce acabou de ler a estrategia completa. Agora falta uma coisa: implementar."),
    React.createElement(Text, { style: s.p }, "A plataforma que torna tudo isso possivel - CRM, automacao de WhatsApp, landing pages, agendamento, email marketing, chatbot, gestao de reputacao - e o GoHighLevel. E ela substitui mais de 10 ferramentas que juntas custariam R$1.900+/mes."),

    React.createElement(View, { style: s.box },
      React.createElement(Text, { style: s.boxTitle }, "O que esta incluso no teste gratuito:"),
      React.createElement(Bullet, {}, "CRM completo com pipeline visual"),
      React.createElement(Bullet, {}, "Automacao de WhatsApp e Email"),
      React.createElement(Bullet, {}, "Construtor de Landing Pages e Funis"),
      React.createElement(Bullet, {}, "Agendamento Online integrado"),
      React.createElement(Bullet, {}, "Chatbot de triagem automatica"),
      React.createElement(Bullet, {}, "Gestao de reputacao e avaliacoes"),
      React.createElement(Bullet, {}, "Sem cartao de credito. Cancele quando quiser.")
    ),

    React.createElement(View, { style: s.ctaBox },
      React.createElement(Text, { style: s.ctaTitle }, "Comece Seu Teste Gratuito Agora"),
      React.createElement(Text, { style: s.ctaText }, "14 dias gratis. Sem compromisso. Sem cartao de credito."),
      React.createElement(Link, { src: "https://www.gohighlevel.com/?fp_ref=luis-fernando12", style: s.ctaLink }, "gestaomelhor.vercel.app -> Teste Gratis")
    ),

    React.createElement(View, { style: { marginTop: 20 } },
      React.createElement(Text, { style: { fontSize: 8, color: "#8492A6", textAlign: "center" } }, "Este guia contem links de afiliados. Voce nao paga nada a mais por isso."),
      React.createElement(Text, { style: { fontSize: 8, color: "#8492A6", textAlign: "center" } }, "gestaomelhor.vercel.app - O sistema certo para cada negocio.")
    ),
    React.createElement(Text, { style: s.pageNum, render: ({ pageNumber }) => pageNumber }, "")
  )
);

async function main() {
  const outputPath = path.join(__dirname, "..", "public", "guia-empresa-automatizada.pdf");
  await renderToFile(doc, outputPath);
  console.log(`PDF gerado: ${outputPath}`);
}

main().catch(console.error);
