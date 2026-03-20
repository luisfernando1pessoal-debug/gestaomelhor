export interface NicheData {
  slug: string;
  name: string;
  pain: string;
  painDetail: string;
  solution: string;
  benefits: string[];
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  comparisons: Comparison[];
  testimonial: Testimonial;
  faq: FAQ[];
  roi: { action: string; value: string; payback: string };
}

export interface Comparison {
  feature: string;
  withoutGHL: string;
  withGHL: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const AFFILIATE_LINK = "https://www.gohighlevel.com/?fp_ref=luis-fernando12";

export const niches: NicheData[] = [
  {
    slug: "clinicas-estetica",
    name: "Clínicas de Estética Avançada",
    pain: "Agenda vazia e clientes que somem depois do primeiro procedimento",
    painDetail: "Sua clínica depende de indicações boca-a-boca e posts no Instagram que geram curtidas, mas não agendamentos. Você perde horas montando planilhas de follow-up que nunca são seguidas. Enquanto isso, 67% dos seus leads esfriam em menos de 24 horas sem resposta automática.",
    solution: "Sistema de automação completo que captura, nutre e reagenda seus pacientes no piloto automático",
    benefits: [
      "Agendamento online 24h integrado ao seu WhatsApp",
      "Follow-up automático pós-procedimento (aumenta recompra em até 3x)",
      "Funil de captação para procedimentos de alto ticket",
      "CRM visual para acompanhar cada paciente do lead ao fã",
      "Landing pages de alta conversão para cada procedimento",
      "Automação de avaliações no Google (prova social)"
    ],
    keywords: [
      "crm para clinica de estetica",
      "sistema de agendamento clinica estetica",
      "automação marketing clinica estetica",
      "software gestão clinica estetica",
      "como captar clientes clinica estetica"
    ],
    heroTitle: "Sua Clínica de Estética Lotada no Piloto Automático",
    heroSubtitle: "O sistema que transforma seguidores em pacientes recorrentes — sem depender de indicação ou ficar refém do Instagram",
    comparisons: [
      { feature: "Agendamento", withoutGHL: "WhatsApp manual, esquecimentos", withGHL: "Automático 24h com confirmação" },
      { feature: "Follow-up", withoutGHL: "Planilha que ninguém atualiza", withGHL: "Sequências automáticas por procedimento" },
      { feature: "Captação de Leads", withoutGHL: "Depende de indicação", withGHL: "Funis + Ads + Landing Pages integrados" },
      { feature: "Reputação Online", withoutGHL: "Poucas avaliações no Google", withGHL: "Solicitação automática após atendimento" },
      { feature: "Custo Mensal", withoutGHL: "R$ 500-2000 (várias ferramentas)", withGHL: "Uma plataforma completa" }
    ],
    testimonial: {
      name: "Dra. Carolina M.",
      role: "Proprietária de clínica de estética em SP",
      text: "Em 3 meses, minha taxa de retorno de pacientes subiu de 20% para 65%. O sistema de follow-up automático é um divisor de águas."
    },
    faq: [
      { question: "Funciona para clínicas pequenas?", answer: "Sim. O sistema foi desenhado para escalar do consultório solo à rede de clínicas. Você começa com o essencial e ativa módulos conforme cresce." },
      { question: "Preciso de conhecimento técnico?", answer: "Não. A plataforma é visual e intuitiva. Além disso, você recebe templates prontos específicos para estética que funcionam desde o dia 1." },
      { question: "Substitui meu sistema de prontuários?", answer: "Não substitui prontuário eletrônico. Ele complementa, cuidando de tudo que acontece ANTES e DEPOIS da consulta: captação, agendamento, follow-up e fidelização." }
    ],
    roi: { action: "1 paciente de harmonização facial a mais por mês", value: "R$ 3.000 a R$ 8.000", payback: "O sistema se paga com um único procedimento extra" }
  },
  {
    slug: "imobiliarias-luxo",
    name: "Imobiliárias de Luxo e Corretores Independentes",
    pain: "Leads caros que nunca respondem e corretores sem processo de vendas",
    painDetail: "Você investe R$ 5.000-20.000/mês em portais e anúncios, mas 80% dos leads não são qualificados. Seus corretores perdem negócios por falta de follow-up organizado. Imóveis de alto padrão exigem nutrição longa, mas ninguém tem tempo para manter contato personalizado com 200 prospects.",
    solution: "CRM imobiliário com automação inteligente que qualifica leads e mantém seus corretores vendendo, não organizando planilhas",
    benefits: [
      "Qualificação automática de leads por perfil e poder de compra",
      "Pipeline visual por imóvel e por corretor",
      "Nurturing por WhatsApp/email com conteúdo de valor sobre o empreendimento",
      "Landing pages de captação para cada imóvel de alto padrão",
      "Distribuição inteligente de leads entre corretores",
      "Dashboard de performance por corretor e campanha"
    ],
    keywords: [
      "crm imobiliario",
      "sistema para imobiliaria de luxo",
      "automação marketing imobiliario",
      "como captar leads imobiliaria alto padrao",
      "software gestão imobiliaria"
    ],
    heroTitle: "Venda Imóveis de Alto Padrão com Processo, Não com Sorte",
    heroSubtitle: "O sistema que qualifica seus leads automaticamente e garante que nenhum comprador de R$ 2 milhões seja esquecido no WhatsApp",
    comparisons: [
      { feature: "Gestão de Leads", withoutGHL: "Planilha / WhatsApp pessoal", withGHL: "CRM com pipeline visual e automação" },
      { feature: "Qualificação", withoutGHL: "Manual, demorada", withGHL: "Formulários inteligentes + scoring automático" },
      { feature: "Follow-up", withoutGHL: "Corretor esquece após 2 dias", withGHL: "Sequências automáticas de 90+ dias" },
      { feature: "Apresentação", withoutGHL: "PDF genérico por email", withGHL: "Landing page exclusiva por imóvel" },
      { feature: "Métricas", withoutGHL: "Sem visibilidade", withGHL: "Dashboard completo em tempo real" }
    ],
    testimonial: {
      name: "Ricardo T.",
      role: "Diretor de imobiliária boutique no RJ",
      text: "Fechamos 3 unidades de R$ 1.5M+ no primeiro trimestre após implementar o sistema. O segredo foi o follow-up automático que mantinha o prospect aquecido."
    },
    faq: [
      { question: "Funciona para corretor autônomo?", answer: "Perfeitamente. Muitos corretores independentes usam como seu 'escritório digital completo' — CRM, site, funis e automação em um só lugar." },
      { question: "Integra com portais imobiliários?", answer: "Sim, via webhooks e Zapier/n8n você conecta com ZAP Imóveis, VivaReal e qualquer portal que gere leads." },
      { question: "Como funciona para equipes?", answer: "Você tem visão gerencial de todos os corretores, com distribuição automática de leads e relatórios de conversão individuais." }
    ],
    roi: { action: "1 imóvel de alto padrão fechado a mais por trimestre", value: "R$ 30.000+ em comissão", payback: "O sistema se paga por 5 anos com uma única venda extra" }
  },
  {
    slug: "escritorios-advocacia",
    name: "Escritórios de Advocacia",
    pain: "Clientes chegam por indicação e você não tem controle sobre o fluxo de novos casos",
    painDetail: "Seu escritório depende de networking e indicações, o que gera picos e vales imprevisíveis de receita. Você não tem um funil estruturado para transformar consultas iniciais em contratos fechados. Cada advogado do time tem seu próprio 'método' de follow-up (ou nenhum).",
    solution: "Sistema de captação e gestão de clientes que profissionaliza o comercial do seu escritório sem perder a sofisticação",
    benefits: [
      "Funil de captação específico por área do direito",
      "Agendamento online de consultas com qualificação prévia",
      "Follow-up automatizado e elegante pós-consulta",
      "CRM com histórico completo de cada prospect/cliente",
      "Landing pages por especialidade (Família, Empresarial, Tributário)",
      "Automação de NPS e solicitação de indicações"
    ],
    keywords: [
      "crm para escritorio de advocacia",
      "marketing digital para advogados",
      "captação de clientes advocacia",
      "software gestão escritorio advocacia",
      "como conseguir clientes advocacia"
    ],
    heroTitle: "Seu Escritório com Fila de Espera — Sem Depender de Indicação",
    heroSubtitle: "O sistema que transforma seu escritório em uma máquina previsível de captação de clientes qualificados",
    comparisons: [
      { feature: "Captação", withoutGHL: "Indicações imprevisíveis", withGHL: "Funis por área do direito + Ads" },
      { feature: "Primeiro Contato", withoutGHL: "Secretária sobrecarregada", withGHL: "Agendamento online com triagem automática" },
      { feature: "Follow-up", withoutGHL: "Email manual esporádico", withGHL: "Sequências profissionais automatizadas" },
      { feature: "Gestão de Clientes", withoutGHL: "Pastas e anotações dispersas", withGHL: "CRM centralizado com timeline completa" },
      { feature: "Indicações", withoutGHL: "Orgânicas e aleatórias", withGHL: "Programa de indicação automatizado" }
    ],
    testimonial: {
      name: "Dr. André L.",
      role: "Sócio-fundador de escritório tributário em BH",
      text: "Saímos de 5 consultas/mês para 22 em 60 dias. O melhor: 70% já chegam pré-qualificadas pelo funil, economizando horas de triagem."
    },
    faq: [
      { question: "É permitido pela OAB?", answer: "O sistema é uma ferramenta de gestão e relacionamento. Todo o conteúdo de captação segue as diretrizes de publicidade da OAB — informativo, educativo e sem mercantilização." },
      { question: "Funciona para escritório solo?", answer: "Sim. É ideal para advogados que querem profissionalizar a captação sem contratar equipe comercial." },
      { question: "Posso personalizar por área do direito?", answer: "Totalmente. Cada área (família, empresarial, criminal, tributário) pode ter seu próprio funil, landing page e sequência de follow-up." }
    ],
    roi: { action: "2 contratos fechados a mais por mês", value: "R$ 5.000 a R$ 15.000", payback: "O sistema se paga na primeira semana de uso" }
  },
  {
    slug: "odontologia",
    name: "Odontologia Especializada",
    pain: "Cadeira vazia e pacientes que somem após o orçamento",
    painDetail: "70% dos pacientes que pedem orçamento nunca voltam. Sua recepcionista tenta ligar de volta, mas entre atender telefone, agendar e cobrar, o follow-up é sempre a última prioridade. Você perde milhares em tratamentos de alto valor (implantes, lentes) por falta de um processo de nutrição.",
    solution: "Sistema que transforma cada orçamento em oportunidade rastreada e cada paciente em receita previsível",
    benefits: [
      "Follow-up automático pós-orçamento (recupera até 40% dos indecisos)",
      "Agendamento online com confirmação via WhatsApp",
      "Funil específico para tratamentos de alto ticket (implantes, lentes)",
      "Campanhas de reativação de pacientes inativos",
      "Avaliações automáticas no Google após procedimentos",
      "Landing pages por especialidade e procedimento"
    ],
    keywords: [
      "crm para dentista",
      "sistema agendamento consultorio odontologico",
      "marketing digital para dentistas",
      "como captar pacientes odontologia",
      "software gestão consultorio odontologico"
    ],
    heroTitle: "Consultório Lotado, Agenda Organizada, Zero Estresse",
    heroSubtitle: "O sistema que recupera pacientes que sumiram após o orçamento e mantém sua cadeira ocupada todos os dias",
    comparisons: [
      { feature: "Orçamentos", withoutGHL: "Paciente some após receber", withGHL: "Follow-up automático em 7 etapas" },
      { feature: "Agendamento", withoutGHL: "Telefone + caderneta", withGHL: "Online 24h com confirmação automática" },
      { feature: "Reativação", withoutGHL: "Nunca acontece", withGHL: "Campanhas automáticas para inativos" },
      { feature: "Avaliações", withoutGHL: "5 avaliações no Google", withGHL: "Solicitação automática = dezenas/mês" },
      { feature: "Captação", withoutGHL: "Depende de indicação", withGHL: "Funis + Ads por procedimento" }
    ],
    testimonial: {
      name: "Dr. Felipe R.",
      role: "Implantodontista em Curitiba",
      text: "Recuperei R$ 180.000 em orçamentos 'perdidos' nos primeiros 4 meses. Eram pacientes que só precisavam de um lembrete na hora certa."
    },
    faq: [
      { question: "Substitui meu software odontológico?", answer: "Não. Ele cuida do COMERCIAL (captação, agendamento, follow-up). Seu software clínico continua para prontuários e procedimentos." },
      { question: "Funciona para clínica popular?", answer: "Sim, mas o maior ROI está em procedimentos de ticket médio-alto onde o follow-up faz diferença na decisão." },
      { question: "Minha recepcionista consegue usar?", answer: "Com certeza. A interface é visual e intuitiva. Em 1 semana sua equipe já opera com autonomia." }
    ],
    roi: { action: "1 tratamento de implante recuperado por mês", value: "R$ 8.000 a R$ 25.000", payback: "O sistema se paga com um único orçamento recuperado" }
  },
  {
    slug: "consultoria-visto-imigracao",
    name: "Consultorias de Visto e Imigração",
    pain: "Leads que pesquisam meses mas nunca fecham, e processos complexos sem acompanhamento",
    painDetail: "Seu cliente pesquisa 6-12 meses antes de decidir emigrar. Se você não mantiver contato nesse período, ele fecha com o concorrente que apareceu por último. Além disso, cada processo tem dezenas de etapas e documentos — e o cliente cobra atualização toda semana por WhatsApp.",
    solution: "Sistema que nutre o lead durante toda a jornada de decisão e automatiza a comunicação de status do processo",
    benefits: [
      "Nurturing de 12 meses com conteúdo educativo sobre imigração",
      "Portal do cliente com status do processo em tempo real",
      "Funis por tipo de visto (trabalho, investidor, estudante, família)",
      "Automação de coleta de documentos com checklist digital",
      "Webinar/aula automatizada como isca de captação",
      "CRM com pipeline por etapa do processo migratório"
    ],
    keywords: [
      "crm consultoria de imigracao",
      "sistema gestão consultoria de visto",
      "como captar clientes imigracao",
      "marketing digital consultoria visto",
      "software para despachante de visto"
    ],
    heroTitle: "Sua Consultoria de Imigração Escalável e Organizada",
    heroSubtitle: "O sistema que mantém seus prospects aquecidos por meses e seus clientes informados sem você precisar responder WhatsApp o dia todo",
    comparisons: [
      { feature: "Nutrição de Leads", withoutGHL: "Post no Instagram e torcer", withGHL: "Sequência de 12 meses por tipo de visto" },
      { feature: "Status do Processo", withoutGHL: "WhatsApp individual", withGHL: "Portal automático + notificações" },
      { feature: "Documentação", withoutGHL: "Email vai e volta", withGHL: "Checklist digital com upload" },
      { feature: "Captação", withoutGHL: "Indicação + redes sociais", withGHL: "Funis + webinars automatizados" },
      { feature: "Gestão", withoutGHL: "Planilha Google", withGHL: "Pipeline visual por etapa migratória" }
    ],
    testimonial: {
      name: "Mariana S.",
      role: "Fundadora de consultoria de imigração para Canadá",
      text: "Meu ciclo de venda caiu de 8 meses para 3. O segredo foi o nurturing automático que educa o prospect enquanto eu foco nos processos ativos."
    },
    faq: [
      { question: "Funciona para vários países de destino?", answer: "Sim. Você cria funis e conteúdos separados por país/tipo de visto. Cada destino tem sua jornada específica." },
      { question: "Consigo gerenciar processos ativos?", answer: "O CRM funciona como pipeline de processos com etapas customizáveis: documentação, protocolo, entrevista, aprovação, etc." },
      { question: "Meus clientes acessam o status?", answer: "Sim, via área do cliente com login, onde veem o andamento sem precisar te mandar mensagem." }
    ],
    roi: { action: "1 processo de imigração fechado a mais por mês", value: "R$ 10.000 a R$ 30.000", payback: "O sistema se paga com meio processo extra" }
  },
  {
    slug: "nutrologia-performance",
    name: "Clínicas de Nutrologia e Performance Humana",
    pain: "Pacientes que abandonam o tratamento após 2 meses e não renovam protocolos",
    painDetail: "Performance humana exige acompanhamento contínuo, mas seus pacientes somem após a consulta inicial. Você não tem como enviar lembretes de recompra de suplementos, agendar retornos automaticamente ou manter engajamento entre consultas. Resultado: LTV baixo e churn alto.",
    solution: "Sistema de retenção e engajamento que mantém seus pacientes comprometidos com o protocolo e voltando para renovação",
    benefits: [
      "Lembretes automáticos de recompra de suplementos/manipulados",
      "Sequências de engajamento entre consultas (dicas, check-ins)",
      "Agendamento automático de retornos periódicos",
      "Funil de captação para protocolos de alto valor",
      "Programa de indicação automatizado entre pacientes",
      "Dashboard de retenção e LTV por paciente"
    ],
    keywords: [
      "crm para nutrologo",
      "sistema gestão clinica nutrologia",
      "marketing digital nutrologia",
      "como captar pacientes nutrologia",
      "software clinica performance humana"
    ],
    heroTitle: "Pacientes Comprometidos, Protocolos Renovados, Receita Previsível",
    heroSubtitle: "O sistema que mantém seus pacientes engajados com o protocolo e garante renovações recorrentes sem você precisar cobrar",
    comparisons: [
      { feature: "Retenção", withoutGHL: "Paciente some após 2 meses", withGHL: "Engajamento contínuo automatizado" },
      { feature: "Suplementos", withoutGHL: "Paciente esquece de repor", withGHL: "Lembretes de recompra no timing certo" },
      { feature: "Retornos", withoutGHL: "Paciente não agenda", withGHL: "Agendamento automático periódico" },
      { feature: "Captação", withoutGHL: "Instagram + indicação", withGHL: "Funis por protocolo + prova social" },
      { feature: "Indicações", withoutGHL: "Orgânicas e raras", withGHL: "Programa automatizado com incentivos" }
    ],
    testimonial: {
      name: "Dr. Gustavo P.",
      role: "Nutrólogo especializado em performance executiva em SP",
      text: "Minha taxa de renovação de protocolo saltou de 30% para 78%. O sistema de check-in entre consultas fez meus pacientes se sentirem acompanhados."
    },
    faq: [
      { question: "Funciona para nutricionistas também?", answer: "Sim. O sistema é adaptável para qualquer profissional de nutrição/saúde que trabalhe com acompanhamento contínuo e protocolos." },
      { question: "Posso vender suplementos pela plataforma?", answer: "Você pode criar funis de venda e landing pages para linhas de suplementos, integrando com seu e-commerce ou parceiros." },
      { question: "Integra com apps de saúde?", answer: "Via webhooks e integrações, você pode conectar com apps de monitoramento e receber dados automaticamente no CRM." }
    ],
    roi: { action: "5 pacientes renovando protocolo por mês", value: "R$ 5.000 a R$ 15.000", payback: "O sistema se paga com 2 renovações extras" }
  },
  {
    slug: "escolas-idiomas-executivos",
    name: "Escolas de Idiomas para Executivos",
    pain: "Alunos que desistem em 3 meses e dificuldade em justificar o premium do preço",
    painDetail: "Seu público-alvo são executivos que pagam premium mas esperam resultados rápidos. Quando não veem progresso tangível, cancelam. Você não tem um sistema de onboarding que defina expectativas, nem automações de engajamento que mostrem a evolução do aluno.",
    solution: "Sistema de captação, onboarding e retenção que transforma executivos em alunos de longo prazo",
    benefits: [
      "Funil de captação B2B para contratos corporativos",
      "Onboarding automatizado que define milestones claros",
      "Relatórios de progresso automáticos para o aluno e RH da empresa",
      "Reativação de alunos que pausaram ou cancelaram",
      "Landing pages por idioma e nível (Business English, Espanhol Executivo)",
      "Nurturing para decisores de RH em empresas-alvo"
    ],
    keywords: [
      "crm para escola de idiomas",
      "marketing digital escola de idiomas executivos",
      "como captar alunos escola de idiomas",
      "software gestão escola de idiomas",
      "escola de idiomas para empresas"
    ],
    heroTitle: "Turmas Cheias de Executivos que Ficam — E Indicam",
    heroSubtitle: "O sistema que capta alunos corporativos, mostra resultados tangíveis e elimina o churn que mata sua receita",
    comparisons: [
      { feature: "Captação B2B", withoutGHL: "Cold call para RH", withGHL: "Funil automatizado para decisores" },
      { feature: "Onboarding", withoutGHL: "Aula 1 genérica", withGHL: "Jornada personalizada com milestones" },
      { feature: "Retenção", withoutGHL: "Aluno cancela sem aviso", withGHL: "Alertas de desengajamento + reativação" },
      { feature: "Relatórios", withoutGHL: "Manual, quando pedido", withGHL: "Automáticos para aluno e empresa" },
      { feature: "Indicações", withoutGHL: "Boca a boca", withGHL: "Programa de referral automatizado" }
    ],
    testimonial: {
      name: "Patricia K.",
      role: "Diretora de escola de Business English em SP",
      text: "Fechamos 4 contratos corporativos em 2 meses com o funil B2B. Antes levávamos 6 meses para fechar 1 via cold call."
    },
    faq: [
      { question: "Funciona para idiomas além do inglês?", answer: "Sim. Cada idioma pode ter seus próprios funis, landing pages e sequências. Espanhol, francês, mandarim — o sistema é agnóstico ao idioma ensinado." },
      { question: "Como funciona a captação B2B?", answer: "Você cria landing pages e conteúdo direcionado a gestores de RH e T&D, com automação de follow-up até o agendamento de uma apresentação." },
      { question: "Consigo medir ROI por canal?", answer: "Sim. O dashboard mostra de onde vem cada lead, custo de aquisição e conversão por canal (Google, LinkedIn, indicação, etc.)." }
    ],
    roi: { action: "1 contrato corporativo fechado a mais por trimestre", value: "R$ 20.000 a R$ 60.000/ano", payback: "O sistema se paga no primeiro mês do contrato" }
  },
  {
    slug: "concessionarias-premium",
    name: "Concessionárias de Veículos Premium",
    pain: "Leads de portais que não convertem e vendedores sem processo padronizado",
    painDetail: "Você paga caro por leads do WebMotors e iCarros, mas a maioria é curiosa, não compradora. Seus vendedores atendem no WhatsApp pessoal sem nenhum padrão — cada um tem seu 'jeitinho'. Resultado: sem métricas, sem follow-up consistente, sem previsibilidade.",
    solution: "CRM automotivo com automação que qualifica leads antes de chegar ao vendedor e padroniza todo o processo comercial",
    benefits: [
      "Qualificação automática por modelo, ano e capacidade financeira",
      "Distribuição inteligente de leads por vendedor e especialidade",
      "Showroom digital com landing page por veículo",
      "Follow-up automático pós-test-drive e pós-visita",
      "Pipeline visual do lead ao emplacamento",
      "Dashboard de performance por vendedor"
    ],
    keywords: [
      "crm para concessionaria",
      "sistema gestão concessionaria veiculos",
      "marketing digital concessionaria",
      "como vender mais carros concessionaria",
      "software concessionaria automoveis"
    ],
    heroTitle: "Venda Mais Veículos com Processo, Métricas e Automação",
    heroSubtitle: "O sistema que qualifica leads automaticamente, padroniza seu time comercial e transforma sua concessionária em máquina de vendas previsível",
    comparisons: [
      { feature: "Leads", withoutGHL: "Portais caros, sem filtro", withGHL: "Qualificação automática antes do vendedor" },
      { feature: "Atendimento", withoutGHL: "WhatsApp pessoal do vendedor", withGHL: "Canal centralizado com histórico" },
      { feature: "Follow-up", withoutGHL: "Vendedor esquece", withGHL: "Automático em múltiplas etapas" },
      { feature: "Showroom", withoutGHL: "Fotos no portal", withGHL: "Landing page premium por veículo" },
      { feature: "Gestão", withoutGHL: "Sem visibilidade", withGHL: "Dashboard completo em tempo real" }
    ],
    testimonial: {
      name: "Marcos A.",
      role: "Gerente comercial de concessionária BMW em BH",
      text: "Nossa taxa de conversão de leads subiu de 3% para 11% em 90 dias. A qualificação automática economiza 2h/dia de cada vendedor."
    },
    faq: [
      { question: "Integra com DMS/ERP da concessionária?", answer: "Via API e webhooks, o sistema conecta com os principais DMS do mercado para sincronizar estoque e dados de clientes." },
      { question: "Funciona para seminovos?", answer: "Perfeitamente. Seminovos têm ciclo de venda mais curto e se beneficiam ainda mais do follow-up rápido e automatizado." },
      { question: "Como controlo os vendedores?", answer: "Dashboard individual por vendedor com métricas de tempo de resposta, taxa de conversão, tickets médios e volume de atendimentos." }
    ],
    roi: { action: "1 veículo premium vendido a mais por mês", value: "R$ 5.000 a R$ 15.000 em comissão", payback: "O sistema se paga com uma única venda extra" }
  },
  {
    slug: "arquitetura-design-interiores",
    name: "Arquitetura e Design de Interiores",
    pain: "Projetos que não fecham após a apresentação e clientes que pechinam sem ver valor",
    painDetail: "Você passa horas preparando propostas lindas que o cliente 'vai pensar'. Sem follow-up estruturado, 60% dessas propostas morrem. Quando fecha, o cliente pechincha porque não entende o valor completo do seu trabalho. E entre um projeto e outro, não há previsibilidade de receita.",
    solution: "Sistema que posiciona seu escritório como premium, nutre leads indecisos e mantém seu pipeline sempre cheio",
    benefits: [
      "Portfólio digital interativo com landing pages por projeto",
      "Follow-up automático pós-proposta com cases e depoimentos",
      "Funil de captação para projetos de alto valor",
      "CRM com pipeline visual do briefing à entrega",
      "Automação de indicação entre clientes satisfeitos",
      "Nutrição de leads com conteúdo de tendências e inspiração"
    ],
    keywords: [
      "crm para escritorio de arquitetura",
      "marketing digital para arquitetos",
      "como captar clientes arquitetura",
      "software gestão escritorio arquitetura",
      "como conseguir projetos de arquitetura"
    ],
    heroTitle: "Projetos de Alto Valor Fechados com Consistência",
    heroSubtitle: "O sistema que transforma seu portfólio em máquina de captação e seus orçamentos em contratos assinados",
    comparisons: [
      { feature: "Portfólio", withoutGHL: "PDF ou Instagram", withGHL: "Landing pages interativas por projeto" },
      { feature: "Propostas", withoutGHL: "Envia e torce", withGHL: "Follow-up automático com cases similares" },
      { feature: "Captação", withoutGHL: "Indicação + Instagram", withGHL: "Funis + conteúdo + Ads segmentados" },
      { feature: "Pipeline", withoutGHL: "Sem controle", withGHL: "Visual: briefing → proposta → contrato → entrega" },
      { feature: "Indicações", withoutGHL: "Orgânicas", withGHL: "Programa automatizado pós-entrega" }
    ],
    testimonial: {
      name: "Arq. Fernanda C.",
      role: "Sócia de escritório de design de interiores em Florianópolis",
      text: "Minha taxa de fechamento de propostas subiu de 25% para 55%. O segredo foi o follow-up automático com cases similares ao projeto do prospect."
    },
    faq: [
      { question: "Funciona para arquiteto autônomo?", answer: "Sim. É perfeito para profissionais solo que precisam profissionalizar a captação sem contratar equipe comercial." },
      { question: "Posso mostrar meu portfólio pela plataforma?", answer: "Sim. Você cria páginas de portfólio bonitas e profissionais que funcionam como ferramentas de captação, não apenas como galeria." },
      { question: "Vale a pena para projetos menores?", answer: "O maior ROI está em projetos acima de R$ 30k, onde o follow-up profissional faz diferença na decisão. Para volume alto de projetos menores, a automação economiza tempo." }
    ],
    roi: { action: "1 projeto de alto valor fechado a mais por mês", value: "R$ 15.000 a R$ 50.000", payback: "O sistema se paga com uma única proposta aceita" }
  },
  {
    slug: "eventos-casamentos-luxo",
    name: "Organizadores de Eventos e Casamentos de Luxo",
    pain: "Noivas que pesquisam 20 fornecedores e somem, e sazonalidade que mata o fluxo de caixa",
    painDetail: "Uma noiva visita em média 15-20 fornecedores antes de decidir. Se você não mantiver contato personalizado e emocional durante os 6-12 meses de decisão, perde para quem apareceu por último. Na baixa temporada, sua receita despenca porque não tem pipeline de eventos corporativos ou sociais para compensar.",
    solution: "Sistema de encantamento e nutrição que mantém você como primeira opção da noiva e diversifica sua receita com eventos corporativos",
    benefits: [
      "Nurturing emocional de 12 meses para noivas (da pesquisa ao 'sim')",
      "Portfólio digital imersivo com depoimentos em vídeo",
      "Funil de captação para eventos corporativos (diversificação)",
      "CRM com pipeline por tipo de evento e data",
      "Automação de indicações entre noivas/casais atendidos",
      "Landing pages por tipo de evento e estilo"
    ],
    keywords: [
      "crm para organizador de eventos",
      "marketing digital casamentos luxo",
      "como captar noivas alto padrao",
      "software gestão eventos e casamentos",
      "como conseguir clientes eventos corporativos"
    ],
    heroTitle: "Agenda Lotada de Eventos de Alto Padrão o Ano Todo",
    heroSubtitle: "O sistema que transforma noivas pesquisadoras em clientes apaixonadas e preenche sua baixa temporada com eventos corporativos",
    comparisons: [
      { feature: "Nutrição de Noivas", withoutGHL: "WhatsApp quando lembra", withGHL: "Jornada emocional de 12 meses automatizada" },
      { feature: "Portfólio", withoutGHL: "Instagram e Pinterest", withGHL: "Experiência digital imersiva com depoimentos" },
      { feature: "Corporativo", withoutGHL: "Não prospecta", withGHL: "Funil B2B para RH e marketing de empresas" },
      { feature: "Sazonalidade", withoutGHL: "Receita irregular", withGHL: "Mix de eventos que estabiliza o ano" },
      { feature: "Indicações", withoutGHL: "Espera acontecer", withGHL: "Programa automatizado pós-evento" }
    ],
    testimonial: {
      name: "Juliana M.",
      role: "CEO de assessoria de casamentos de luxo em SP",
      text: "Na última temporada fechei 40% mais casamentos e consegui 8 eventos corporativos na baixa temporada. O funil B2B mudou meu negócio."
    },
    faq: [
      { question: "Funciona só para casamentos?", answer: "Não. O sistema é perfeito para qualquer tipo de evento: corporativo, social, debutante, formatura. Cada tipo tem seu próprio funil e jornada." },
      { question: "Como funciona o nurturing de noivas?", answer: "Uma sequência automatizada de 12 meses com conteúdo emocional, dicas de planejamento, cases de casamentos similares e convites para visitas — tudo personalizado pelo estilo do evento." },
      { question: "Consigo gerenciar fornecedores?", answer: "O CRM pode ser configurado para rastrear fornecedores parceiros, mas seu foco principal é captação e relacionamento com clientes." }
    ],
    roi: { action: "1 casamento de luxo fechado a mais por trimestre", value: "R$ 30.000 a R$ 100.000", payback: "O sistema se paga por um ano inteiro com um evento extra" }
  }
];

export function getNicheBySlug(slug: string): NicheData | undefined {
  return niches.find((n) => n.slug === slug);
}

export function getAllNicheSlugs(): string[] {
  return niches.map((n) => n.slug);
}
