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
    painDetail:
      "Você acorda, olha a agenda do dia e tem três horários vagos. Aquela paciente que fez uma limpeza de pele há 2 meses? Nunca mais voltou. A que pediu orçamento de harmonização na terça? Sumiu. Sua recepcionista prometeu ligar de volta, mas entre atender WhatsApp, confirmar horários e resolver pendências, o follow-up fica pra 'amanhã' — e amanhã nunca chega. Enquanto isso, a clínica do outro lado da rua está lotada. Não porque é melhor. Mas porque tem um sistema.",
    solution:
      "Uma plataforma que trabalha 24 horas por você: captura leads enquanto você dorme, confirma consultas sem sua recepcionista precisar ligar, e traz pacientes de volta automaticamente — para o procedimento certo, na hora certa.",
    benefits: [
      "Agendamento online 24h que confirma sozinho via WhatsApp — chega de 'esqueci da consulta'",
      "Follow-up pós-procedimento que gera recompra automática (clientes voltam 3x mais)",
      "Funis de captação para procedimentos de alto ticket que atraem quem pode pagar",
      "CRM visual onde você vê cada paciente: do primeiro contato ao fã que indica",
      "Landing pages de alta conversão para harmonização, botox, limpeza — cada procedimento com sua página",
      "Avaliações no Google solicitadas automaticamente — sua reputação cresce no piloto automático"
    ],
    keywords: [
      "crm para clinica de estetica",
      "sistema de agendamento clinica estetica",
      "automação marketing clinica estetica",
      "software gestão clinica estetica",
      "como captar clientes clinica estetica"
    ],
    heroTitle: "Sua Clínica Lotada — Sem Ficar Refém de Indicação",
    heroSubtitle:
      "Pare de torcer por pacientes. Monte o sistema que enche sua agenda no piloto automático enquanto você faz o que sabe de melhor: transformar vidas.",
    comparisons: [
      { feature: "Agendamento", withoutGHL: "WhatsApp caótico, paciente esquece, você perde R$300", withGHL: "Online 24h, confirmação automática, zero falta" },
      { feature: "Follow-up", withoutGHL: "Planilha que ninguém abre há semanas", withGHL: "Mensagens automáticas que trazem o paciente de volta" },
      { feature: "Captação", withoutGHL: "Post no Instagram e esperar milagre", withGHL: "Funis + Ads + Landing Pages que geram agendamentos reais" },
      { feature: "Reputação", withoutGHL: "4 avaliações no Google desde 2022", withGHL: "Dezenas de avaliações 5 estrelas por mês, automático" },
      { feature: "Investimento", withoutGHL: "R$ 500-2000/mês em 5 ferramentas separadas", withGHL: "Tudo em uma plataforma por menos que um procedimento" }
    ],
    testimonial: {
      name: "Dra. Carolina M.",
      role: "Proprietária — Clínica Essence, São Paulo",
      text: "Eu achava que meu problema era marketing. Na verdade, era follow-up. Em 3 meses, minha taxa de retorno de pacientes saiu de 20% para 65%. O sistema manda a mensagem certa, na hora certa. Eu só faço o que amo: cuidar das minhas pacientes."
    },
    faq: [
      { question: "Minha clínica é pequena. Funciona mesmo assim?", answer: "É justamente onde faz mais diferença. Clínica pequena não pode se dar ao luxo de perder pacientes. O sistema garante que cada lead vire agendamento e cada paciente volte — sem precisar de equipe comercial." },
      { question: "Eu não entendo nada de tecnologia. Vou conseguir usar?", answer: "Se você usa WhatsApp, consegue. A plataforma é visual — arrastar e soltar. Em 1 semana você ou sua recepcionista já operam sozinhas. E tem templates prontos específicos para estética." },
      { question: "Substitui meu sistema de prontuários?", answer: "Não. Ele cuida de tudo que acontece ANTES e DEPOIS da cadeira: captação, agendamento, confirmação, follow-up e fidelização. Seu prontuário continua o mesmo." }
    ],
    roi: { action: "1 harmonização facial extra por mês", value: "R$ 3.000 a R$ 8.000", payback: "O sistema se paga com um único procedimento" }
  },
  {
    slug: "imobiliarias-luxo",
    name: "Imobiliárias e Corretores de Alto Padrão",
    pain: "Leads caros que nunca respondem e corretores sem processo de vendas",
    painDetail:
      "Você investe R$ 10.000, R$ 15.000, às vezes R$ 20.000 por mês em portais e anúncios. Os leads chegam. Mas quando o corretor liga, o telefone já foi para a caixa postal. Quando manda WhatsApp, fica no vácuo. A verdade é que 80% desses leads estão falando com 5 imobiliárias ao mesmo tempo — e quem responde primeiro, leva. Seus corretores? Cada um tem seu 'jeitinho': um anota no caderno, outro salva no contato, outro simplesmente esquece. Você paga caro pelo lead e não sabe nem quantos viraram visita.",
    solution:
      "Um CRM que responde o lead em segundos (não em horas), qualifica automaticamente quem tem perfil e poder de compra, e garante que nenhum prospect de R$ 2 milhões seja esquecido na caixa de entrada.",
    benefits: [
      "Resposta automática em menos de 60 segundos — você nunca mais perde pra quem respondeu primeiro",
      "Qualificação inteligente por perfil, orçamento e momento de compra antes do corretor assumir",
      "Pipeline visual por imóvel e por corretor — você sabe exatamente onde cada negócio está",
      "Landing pages exclusivas por empreendimento que vendem o sonho, não apenas metragem",
      "Distribuição automática de leads entre corretores — sem favoritismo, sem desperdício",
      "Dashboard de performance real: quem converte, quem demora, quem precisa de coaching"
    ],
    keywords: [
      "crm imobiliario",
      "sistema para imobiliaria de luxo",
      "automação marketing imobiliario",
      "como captar leads imobiliaria alto padrao",
      "software gestão imobiliaria"
    ],
    heroTitle: "Pare de Queimar Dinheiro em Leads que Ninguém Atende a Tempo",
    heroSubtitle:
      "O sistema que responde antes do concorrente, qualifica antes do corretor e fecha antes do cliente esfriar.",
    comparisons: [
      { feature: "Tempo de Resposta", withoutGHL: "Corretor vê o lead 4h depois. Já era.", withGHL: "Resposta automática em 30 segundos. Lead quente." },
      { feature: "Qualificação", withoutGHL: "Corretor perde 2h com curioso sem orçamento", withGHL: "Formulário inteligente filtra antes de chegar ao time" },
      { feature: "Follow-up", withoutGHL: "Promete ligar na segunda. Esquece na terça.", withGHL: "Sequência automática de 90 dias — ninguém escapa" },
      { feature: "Showroom Digital", withoutGHL: "PDF genérico por email. Cliente deleta.", withGHL: "Página exclusiva do imóvel com vídeo, tour e CTA" },
      { feature: "Visibilidade", withoutGHL: "Sem métricas. 'Achismo' total.", withGHL: "Dashboard em tempo real: conversão, tempo, ROI por canal" }
    ],
    testimonial: {
      name: "Ricardo T.",
      role: "Diretor — Immobili Luxury, Rio de Janeiro",
      text: "Fechamos 3 unidades acima de R$ 1.5M no primeiro trimestre. O segredo? O sistema manteve contato com um prospect durante 47 dias — eu já tinha dado como perdido. Ele voltou e fechou. Isso vale mais que 10 anos de assinatura."
    },
    faq: [
      { question: "Sou corretor autônomo. Vale a pena?", answer: "Especialmente pra você. Corretor solo não pode perder nenhum lead. O sistema é seu 'escritório digital': CRM, site, funis, automação, tudo em um lugar. É como ter uma equipe comercial trabalhando 24h." },
      { question: "Integra com portais como ZAP e VivaReal?", answer: "Sim. Via webhooks os leads dos portais caem direto no CRM com resposta automática. O lead recebe atenção em segundos, não em horas." },
      { question: "Como funciona para equipe de corretores?", answer: "Você tem visão gerencial completa: distribuição automática de leads, métricas individuais de conversão, tempo de resposta e performance. Acabou o 'achismo' sobre quem vende mais." }
    ],
    roi: { action: "1 imóvel de alto padrão fechado a mais por trimestre", value: "R$ 30.000+ em comissão", payback: "Uma única venda paga o sistema por 5 anos" }
  },
  {
    slug: "escritorios-advocacia",
    name: "Escritórios de Advocacia",
    pain: "Receita imprevisível e dependência total de indicações",
    painDetail:
      "Mês bom: 5 casos novos. Mês ruim: 1. Você não controla. Depende de quem lembra de indicar. Quando um lead chega pelo site, sua secretária anota num papel. Quando liga de volta, o prospect já fechou com outro escritório. Cada advogado do time tem seu 'método' de follow-up — que na prática é nenhum. E aquela consulta inicial gratuita que você deu na segunda? O potencial cliente disse que 'ia pensar'. Pensou. E fechou com o concorrente que mandou um email no dia seguinte.",
    solution:
      "Um sistema que transforma seu escritório em máquina previsível de captação — sem mercantilizar a advocacia. Profissional, educativo, dentro das diretrizes da OAB.",
    benefits: [
      "Funis de captação por área: Família, Empresarial, Tributário, Trabalhista — cada um com sua linguagem",
      "Agendamento online com triagem prévia: o cliente já chega qualificado na consulta",
      "Follow-up pós-consulta elegante e automático — o prospect não esquece de você",
      "CRM com histórico completo: cada interação, documento e anotação em um lugar",
      "Landing pages educativas por especialidade que posicionam você como autoridade",
      "Programa de indicação automatizado que transforma clientes satisfeitos em embaixadores"
    ],
    keywords: [
      "crm para escritorio de advocacia",
      "marketing digital para advogados",
      "captação de clientes advocacia",
      "software gestão escritorio advocacia",
      "como conseguir clientes advocacia"
    ],
    heroTitle: "Chega de Meses Bons e Meses Ruins. Monte Seu Pipeline.",
    heroSubtitle:
      "O sistema que traz clientes qualificados de forma previsível — sem cold call, sem panfletagem, sem ferir a ética. Dentro da OAB, fora do amadorismo.",
    comparisons: [
      { feature: "Captação", withoutGHL: "Torce por indicação. Reza pro networking funcionar.", withGHL: "Funil por área do direito + conteúdo educativo que atrai" },
      { feature: "Primeiro Contato", withoutGHL: "Secretária sobrecarregada. Lead espera 2 dias.", withGHL: "Agendamento online + resposta em minutos" },
      { feature: "Follow-up", withoutGHL: "'Vou pensar' = nunca mais volta.", withGHL: "Sequência profissional que converte indeciso em contrato" },
      { feature: "Organização", withoutGHL: "Pastas, emails, anotações espalhadas em 5 lugares.", withGHL: "CRM centralizado com timeline completa do prospect" },
      { feature: "Indicações", withoutGHL: "Quando o cliente lembra. Se lembrar.", withGHL: "Programa automatizado: pede na hora certa, da forma certa" }
    ],
    testimonial: {
      name: "Dr. André L.",
      role: "Sócio-fundador — Lemos & Associados, Belo Horizonte",
      text: "Em 60 dias saí de 5 consultas por mês para 22. Mas o que me surpreendeu foi que 70% já chegavam pré-qualificadas. Parei de perder tarde inteira com quem nunca ia fechar. Meu tempo agora é só para quem realmente precisa de mim."
    },
    faq: [
      { question: "Isso é permitido pela OAB?", answer: "O sistema é ferramenta de gestão e relacionamento. Não faz publicidade — faz marketing de conteúdo educativo. Informativo, elegante e dentro das diretrizes do Provimento 205/2021. Centenas de escritórios já usam." },
      { question: "Funciona para advogado solo?", answer: "É ideal. Advogado solo precisa ser eficiente: captar, converter e atender — sozinho. O sistema automatiza a parte comercial pra você focar no jurídico." },
      { question: "Consigo separar por área do direito?", answer: "Totalmente. Cada área — família, empresarial, criminal, tributário, trabalhista — tem seu próprio funil, landing page, linguagem e sequência de follow-up." }
    ],
    roi: { action: "2 contratos fechados a mais por mês", value: "R$ 5.000 a R$ 15.000", payback: "O sistema se paga na primeira semana" }
  },
  {
    slug: "consultorios-odontologia",
    name: "Consultórios de Odontologia",
    pain: "Cadeira vazia e pacientes que somem após pedir orçamento",
    painDetail:
      "O paciente senta na cadeira, você explica o tratamento com cuidado, mostra as opções, faz um orçamento detalhado. Ele agradece, diz que 'vai pensar', pega o papel e sai pela porta. Nunca mais volta. Sua recepcionista até tenta ligar de volta, mas entre atender telefone, confirmar consultas do dia e organizar fichas, o follow-up fica sempre pra depois. Resultado? 70% dos orçamentos morrem no silêncio. São implantes de R$ 15.000, lentes de R$ 20.000, tratamentos que o paciente QUER fazer — mas ninguém empurrou de leve na hora certa.",
    solution:
      "Um sistema que não deixa nenhum orçamento morrer. Acompanha o paciente do 'vou pensar' até o 'quando posso começar?' — automaticamente, sem ser invasivo.",
    benefits: [
      "Follow-up automático pós-orçamento em 7 etapas — recupera até 40% dos indecisos",
      "Agendamento online 24h com confirmação via WhatsApp — zero falta, zero ligação",
      "Funis específicos para implantes, lentes e ortodontia — atrai quem pode pagar",
      "Campanhas de reativação para pacientes sumidos há 6+ meses",
      "Avaliações 5 estrelas no Google pedidas automaticamente após cada procedimento",
      "Landing pages por procedimento que educam e convertem — não apenas 'agende sua consulta'"
    ],
    keywords: [
      "crm para dentista",
      "sistema agendamento consultorio odontologico",
      "marketing digital para dentistas",
      "como captar pacientes odontologia",
      "software gestão consultorio odontologico"
    ],
    heroTitle: "Chega de Orçamento que Sai pela Porta e Nunca Volta",
    heroSubtitle:
      "O sistema que recupera pacientes indecisos, enche sua cadeira todos os dias e transforma seu consultório em máquina de receita previsível.",
    comparisons: [
      { feature: "Orçamentos", withoutGHL: "Entrega o papel e torce. 70% some.", withGHL: "Follow-up em 7 etapas. Paciente volta e fecha." },
      { feature: "Agendamento", withoutGHL: "Telefone tocando + caderneta + confusão.", withGHL: "Online 24h, confirmação automática, zero estresse" },
      { feature: "Reativação", withoutGHL: "Nunca acontece. Paciente esquece que você existe.", withGHL: "Campanhas automáticas que trazem pacientes de volta" },
      { feature: "Reputação", withoutGHL: "5 avaliações no Google desde 2021.", withGHL: "Dezenas de avaliações novas todo mês — automático" },
      { feature: "Captação", withoutGHL: "Depende de indicação e sorte.", withGHL: "Funis + Ads por procedimento = agenda lotada" }
    ],
    testimonial: {
      name: "Dr. Felipe R.",
      role: "Implantodontista — Odonto Excellence, Curitiba",
      text: "Nos primeiros 4 meses recuperei R$ 180.000 em orçamentos que eu considerava perdidos. Eram pacientes que SÓ precisavam de um lembrete gentil na hora certa. Eu estava sentado em cima de uma mina de ouro e não sabia."
    },
    faq: [
      { question: "Substitui meu software odontológico?", answer: "Não, e nem tenta. Ele cuida do COMERCIAL — captação, agendamento, follow-up, fidelização. Seu software clínico continua para prontuários, radiografias e procedimentos. São complementares." },
      { question: "Funciona para clínica popular?", answer: "Funciona, mas o maior ROI está em procedimentos de ticket médio-alto (implantes, lentes, ortodontia) onde o follow-up profissional é o que separa 'vou pensar' de 'quando começamos?'" },
      { question: "Minha recepcionista vai dar conta?", answer: "Esse é o ponto: ela NÃO precisa dar conta. O sistema faz o follow-up sozinho. Sua recepcionista foca em quem está ali presencialmente. O robô cuida do resto." }
    ],
    roi: { action: "1 implante recuperado por mês", value: "R$ 8.000 a R$ 25.000", payback: "Um único orçamento recuperado paga o sistema por 1 ano" }
  },
  {
    slug: "consultorias-visto-imigracao",
    name: "Consultorias de Visto e Imigração",
    pain: "Leads que pesquisam meses mas nunca fecham",
    painDetail:
      "Seu cliente potencial começa a pesquisar sobre imigração em janeiro. Em março, preenche seu formulário. Em maio, manda uma mensagem no WhatsApp. Em agosto, finalmente está pronto pra fechar — mas você já esqueceu dele. Ou pior: ele esqueceu de você. O ciclo de decisão de imigração é de 6 a 12 meses. Se você não mantiver presença constante (sem ser chato), o concorrente que mandou aquele email na semana certa leva o processo de R$ 20.000. E o WhatsApp? Seus clientes ativos mandam mensagem toda semana pedindo 'atualização do processo'. Você vira refém do celular.",
    solution:
      "Um sistema que nutre o prospect durante toda a jornada de decisão (6-12 meses) e mantém seus clientes atualizados sem você precisar responder WhatsApp o dia todo.",
    benefits: [
      "Nurturing de 12 meses com conteúdo educativo — o prospect amadurece sozinho até estar pronto",
      "Portal do cliente com status do processo em tempo real — zero WhatsApp de 'como tá meu visto?'",
      "Funis por tipo de visto: trabalho, investidor, estudante, família — cada um com sua jornada",
      "Automação de coleta de documentos com checklist digital — chega de 'cadê o documento X?'",
      "Webinar automatizado como isca de captação — gera leads qualificados no piloto automático",
      "Pipeline visual por etapa do processo: documentação, protocolo, entrevista, aprovação"
    ],
    keywords: [
      "crm consultoria de imigracao",
      "sistema gestão consultoria de visto",
      "como captar clientes imigracao",
      "marketing digital consultoria visto",
      "software para despachante de visto"
    ],
    heroTitle: "Pare de Perder Clientes que Levam 8 Meses pra Decidir",
    heroSubtitle:
      "O sistema que mantém você presente na mente do prospect por 12 meses — e seus clientes atualizados sem você virar escravo do WhatsApp.",
    comparisons: [
      { feature: "Nutrição de Leads", withoutGHL: "Posta no Instagram e torce pro lead lembrar de você.", withGHL: "Sequência de 12 meses por tipo de visto — educação contínua" },
      { feature: "Status do Processo", withoutGHL: "WhatsApp individual. 30 mensagens por dia.", withGHL: "Portal do cliente automático + notificações de etapa" },
      { feature: "Documentação", withoutGHL: "Email vai e volta. Documento se perde.", withGHL: "Checklist digital com upload direto e confirmação" },
      { feature: "Captação", withoutGHL: "Indicação + redes sociais. Imprevisível.", withGHL: "Funis + webinars automatizados = leads toda semana" },
      { feature: "Gestão", withoutGHL: "Planilha Google que só você entende.", withGHL: "Pipeline visual por etapa migratória para toda equipe" }
    ],
    testimonial: {
      name: "Mariana S.",
      role: "Fundadora — Visa Compass, Consultoria para Canadá",
      text: "Meu ciclo de venda caiu de 8 meses para 3. O prospect recebe conteúdo educativo toda semana, sem eu mover um dedo. Quando ele está pronto, já confia em mim. E meus clientes ativos pararam de me mandar WhatsApp — eles veem tudo no portal. Ganhei minha vida de volta."
    },
    faq: [
      { question: "Funciona para vários países de destino?", answer: "Sim. Cada destino (Canadá, EUA, Portugal, Austrália) pode ter funis, conteúdos e jornadas totalmente separados. O prospect de visto de investidor nos EUA recebe conteúdo diferente do de visto de trabalho no Canadá." },
      { question: "Consigo gerenciar os processos ativos?", answer: "O CRM funciona como pipeline com etapas customizáveis: consulta inicial, documentação, protocolo, entrevista consular, aprovação. Cada processo tem sua timeline e alertas." },
      { question: "O cliente consegue ver o status sozinho?", answer: "Sim. Via área do cliente com login, ele vê o andamento, faz upload de documentos e recebe notificações automáticas a cada mudança de etapa. Sua caixa de WhatsApp agradece." }
    ],
    roi: { action: "1 processo de imigração extra por mês", value: "R$ 10.000 a R$ 30.000", payback: "Meio processo extra já paga o sistema" }
  },
  {
    slug: "clinicas-nutrologia",
    name: "Clínicas de Nutrologia e Performance",
    pain: "Pacientes que abandonam o protocolo após 2 meses",
    painDetail:
      "O paciente chega empolgado. Faz os exames. Começa o protocolo. Nos primeiros 30 dias, segue tudo à risca. No segundo mês, começa a esquecer suplementos. No terceiro, não agenda retorno. No quarto, some. Você investiu consulta, tempo, planejamento — e ele foi embora antes de ver resultado real. O LTV que deveria ser de R$ 5.000 fica em R$ 800. E o pior: ele conta pra todo mundo que 'não funcionou', quando na verdade ele é que não seguiu o protocolo. Sem acompanhamento entre consultas, sem lembretes de recompra, sem check-in — ele fica sozinho e desiste.",
    solution:
      "Um sistema de retenção que mantém seu paciente comprometido com o protocolo entre as consultas — e garante que ele volte para renovar, não para abandonar.",
    benefits: [
      "Lembretes automáticos de recompra de suplementos no timing exato — o paciente nunca fica sem",
      "Check-in semanal automatizado entre consultas — o paciente se sente acompanhado",
      "Agendamento automático de retornos periódicos — sem depender do paciente lembrar",
      "Funis de captação para protocolos premium (longevidade, performance, emagrecimento)",
      "Programa de indicação automatizado — paciente satisfeito traz 3 novos",
      "Dashboard de retenção: quem está engajado, quem está sumindo, quem precisa de atenção"
    ],
    keywords: [
      "crm para nutrologo",
      "sistema gestão clinica nutrologia",
      "marketing digital nutrologia",
      "como captar pacientes nutrologia",
      "software clinica performance humana"
    ],
    heroTitle: "Pacientes que Ficam, Seguem o Protocolo e Renovam",
    heroSubtitle:
      "Chega de perder paciente no terceiro mês. Monte o sistema que mantém ele comprometido, acompanhado e voltando — no piloto automático.",
    comparisons: [
      { feature: "Retenção", withoutGHL: "Paciente some no mês 3. Você nem percebe.", withGHL: "Alertas de desengajamento + reativação automática" },
      { feature: "Suplementos", withoutGHL: "Paciente esquece. Protocolo falha.", withGHL: "Lembrete de recompra no dia certo — nunca fica sem" },
      { feature: "Entre Consultas", withoutGHL: "Silêncio total. Paciente se sente sozinho.", withGHL: "Check-ins semanais com dicas relevantes" },
      { feature: "Retornos", withoutGHL: "Paciente não agenda. Você perde receita.", withGHL: "Agendamento automático no período ideal" },
      { feature: "Indicações", withoutGHL: "Orgânicas e raras.", withGHL: "Programa automatizado no momento de maior satisfação" }
    ],
    testimonial: {
      name: "Dr. Gustavo P.",
      role: "Nutrólogo — Performance Lab, São Paulo",
      text: "Minha taxa de renovação de protocolo saiu de 30% para 78%. O segredo foi simples: o sistema manda um check-in na quarta-feira e um lembrete de suplemento na sexta. O paciente se sente cuidado. E paciente que se sente cuidado fica. E indica."
    },
    faq: [
      { question: "Funciona para nutricionistas também?", answer: "Perfeitamente. Qualquer profissional de saúde que trabalha com acompanhamento contínuo, protocolos e retornos periódicos se beneficia. A lógica é a mesma: manter o paciente engajado e retornando." },
      { question: "Consigo vender suplementos pela plataforma?", answer: "Você pode criar landing pages e funis de venda para suas linhas de suplementos, integrando com e-commerce ou parceiros. O lembrete de recompra pode ter o link direto da loja." },
      { question: "Integra com apps de saúde?", answer: "Via webhooks e integrações (Zapier/n8n) você conecta com apps de monitoramento, wearables e recebe dados automaticamente no CRM do paciente." }
    ],
    roi: { action: "5 pacientes renovando protocolo que teriam abandonado", value: "R$ 5.000 a R$ 15.000/mês", payback: "2 renovações extras já pagam o sistema" }
  },
  {
    slug: "escolas-idiomas",
    name: "Escolas de Idiomas para Executivos",
    pain: "Alunos que cancelam em 3 meses e dificuldade em vender o premium",
    painDetail:
      "Seu aluno é um executivo ocupado. Paga R$ 500/mês porque precisa do inglês pra reunião com a matriz. Nos primeiros 2 meses, frequenta religiosamente. No terceiro, começa a faltar 'por causa da agenda'. No quarto, pede pra pausar. No quinto, cancela. E sabe o pior? Ele vai dizer que 'a escola é boa mas não teve tempo'. A verdade é que ele não viu progresso tangível, não recebeu relatório nenhum e se sentiu mais um número. Do lado de captação, você depende de indicação e Google — e converter empresa é um inferno de emails sem resposta para RH.",
    solution:
      "Um sistema que mostra progresso tangível ao aluno (pra ele não cancelar), envia relatórios automáticos para o RH (pra empresa renovar) e capta contratos corporativos com funis B2B.",
    benefits: [
      "Onboarding automatizado com milestones claros — o aluno sabe exatamente o que vai conquistar",
      "Relatórios de progresso automáticos para o aluno E para o RH da empresa contratante",
      "Alertas de desengajamento: quando o aluno começa a faltar, o sistema age antes do cancelamento",
      "Funis B2B para captar contratos corporativos — RH recebe proposta educativa, não spam",
      "Reativação de alunos que pausaram — o sistema traz de volta no momento certo",
      "Landing pages por idioma e nível: Business English, Espanhol Corporativo, Francês Executivo"
    ],
    keywords: [
      "crm para escola de idiomas",
      "marketing digital escola de idiomas executivos",
      "como captar alunos escola de idiomas",
      "software gestão escola de idiomas",
      "escola de idiomas para empresas"
    ],
    heroTitle: "Alunos que Ficam, Empresas que Renovam, Receita que Cresce",
    heroSubtitle:
      "Pare de perder alunos no terceiro mês. Monte o sistema que mostra resultados, previne cancelamentos e fecha contratos corporativos no automático.",
    comparisons: [
      { feature: "Captação B2B", withoutGHL: "Cold call para RH. Ninguém atende.", withGHL: "Funil educativo que atrai decisores de empresas" },
      { feature: "Onboarding", withoutGHL: "Aula 1 genérica. Aluno se sente mais um.", withGHL: "Jornada personalizada com milestones e celebrações" },
      { feature: "Retenção", withoutGHL: "Aluno cancela sem aviso. Surpresa.", withGHL: "Alertas preditivos + intervenção antes do cancelamento" },
      { feature: "Relatórios", withoutGHL: "Só quando o RH cobra. Manual.", withGHL: "Automáticos — aluno e empresa recebem sem pedir" },
      { feature: "Reativação", withoutGHL: "Aluno pausou = perdido pra sempre.", withGHL: "Campanha de volta às aulas no momento ideal" }
    ],
    testimonial: {
      name: "Patrícia K.",
      role: "Diretora — Executive Language Hub, São Paulo",
      text: "Fechamos 4 contratos corporativos em 2 meses com o funil B2B. Antes levávamos 6 meses pra fechar 1 via cold call. E o churn caiu 35% — o relatório automático pro RH fez toda a diferença. Empresa que vê progresso, renova."
    },
    faq: [
      { question: "Funciona para outros idiomas além do inglês?", answer: "Cada idioma pode ter funis, landing pages e sequências próprias. Espanhol corporativo, francês executivo, mandarim para negócios — o sistema é agnóstico ao idioma." },
      { question: "Como funciona a captação B2B?", answer: "Você cria conteúdo e landing pages direcionadas a gestores de RH e T&D. O funil nutre com cases e ROI até o agendamento de apresentação. É venda consultiva, não spam." },
      { question: "Consigo medir ROI por canal?", answer: "Sim. Dashboard mostra origem de cada lead, custo de aquisição e taxa de conversão por canal — Google, LinkedIn, indicação, parceria. Você sabe exatamente onde investir mais." }
    ],
    roi: { action: "1 contrato corporativo a mais por trimestre", value: "R$ 20.000 a R$ 60.000/ano", payback: "O primeiro mês do contrato já paga o sistema por 1 ano" }
  },
  {
    slug: "concessionarias-veiculos",
    name: "Concessionárias de Veículos Premium",
    pain: "Leads caros que não convertem e vendedores sem processo",
    painDetail:
      "R$ 15.000 por mês no WebMotors. R$ 10.000 no iCarros. Mais R$ 5.000 em Meta Ads. Os leads chegam — 200, 300 por mês. Mas quando você olha a conversão? 3%. Três por cento. Sabe por quê? Porque o vendedor vê o lead às 16h, mas o prospect mandou a mensagem às 10h. Nesse intervalo, ele já falou com 4 concessionárias. E fechou com a que respondeu primeiro. Seus vendedores atendem no WhatsApp pessoal, não registram nada, cada um tem seu 'método'. Você, gerente, não sabe quantos leads viraram test-drive. Não sabe quem foi atendido e quem caiu no limbo.",
    solution:
      "Um CRM que responde o lead em segundos, qualifica automaticamente e dá a você visibilidade total do seu processo comercial — do clique ao emplacamento.",
    benefits: [
      "Resposta automática em menos de 1 minuto — antes de qualquer concorrente",
      "Qualificação inteligente: modelo desejado, ano, orçamento — antes de chegar ao vendedor",
      "Distribuição automática por especialidade (novos, seminovos, premium)",
      "Follow-up pós-test-drive e pós-visita — ninguém esfria sem receber atenção",
      "Showroom digital: landing page premium por veículo com fotos, vídeo e CTA direto",
      "Dashboard gerencial: performance por vendedor, tempo de resposta, conversão por canal"
    ],
    keywords: [
      "crm para concessionaria",
      "sistema gestão concessionaria veiculos",
      "marketing digital concessionaria",
      "como vender mais carros concessionaria",
      "software concessionaria automoveis"
    ],
    heroTitle: "De 3% de Conversão para 11%. Sem Aumentar o Budget de Ads.",
    heroSubtitle:
      "O sistema que responde antes do concorrente, qualifica antes do vendedor e te dá a visibilidade que você nunca teve sobre seu time comercial.",
    comparisons: [
      { feature: "Velocidade", withoutGHL: "Vendedor vê 6h depois. Lead já comprou.", withGHL: "Resposta automática em 30 segundos" },
      { feature: "Atendimento", withoutGHL: "WhatsApp pessoal. Sem registro. Sem padrão.", withGHL: "Canal centralizado com histórico e scripts" },
      { feature: "Follow-up", withoutGHL: "Vendedor promete ligar. Esquece.", withGHL: "Sequência automática pós-visita e pós-test-drive" },
      { feature: "Showroom", withoutGHL: "Fotos no portal entre 500 outros carros.", withGHL: "Página exclusiva do veículo com experiência premium" },
      { feature: "Gestão", withoutGHL: "Você não sabe nem quem foi atendido hoje.", withGHL: "Dashboard em tempo real com todas as métricas" }
    ],
    testimonial: {
      name: "Marcos A.",
      role: "Gerente Comercial — BMW Premium Motors, BH",
      text: "Nossa conversão subiu de 3% para 11% em 90 dias. Não mudamos nada nos anúncios. A diferença foi: o lead recebe resposta em 30 segundos e follow-up automático se não responder. Simples, mas ninguém fazia."
    },
    faq: [
      { question: "Integra com DMS/ERP da concessionária?", answer: "Via API e webhooks, conecta com os principais DMS do mercado. O lead que entra pelo site já aparece no CRM com todos os dados — sem digitação dupla." },
      { question: "Funciona para seminovos?", answer: "Seminovos se beneficiam ainda mais. O ciclo de venda é mais curto e o volume é maior. Resposta rápida + follow-up = mais carros emplacados com o mesmo investimento em Ads." },
      { question: "Como controlo a performance dos vendedores?", answer: "Dashboard individual: tempo médio de resposta, taxa de conversão, ticket médio, volume de atendimentos e avaliações de clientes. Você sabe exatamente quem performa e quem precisa de coaching." }
    ],
    roi: { action: "2 veículos extras vendidos por mês", value: "R$ 10.000 a R$ 30.000 em comissão", payback: "1 venda extra paga o sistema por 6 meses" }
  },
  {
    slug: "escritorios-arquitetura",
    name: "Escritórios de Arquitetura e Design de Interiores",
    pain: "Propostas que morrem no 'vou pensar' e clientes que pechinam",
    painDetail:
      "Você passa 3 dias preparando uma proposta linda. Renderizações impecáveis. Detalhamento técnico. Apresenta com paixão. O cliente olha, elogia, diz que é 'exatamente o que ele queria'. E aí fala: 'vou conversar com minha esposa'. Duas semanas depois, silêncio. Você manda uma mensagem — 'estou analisando'. Mais uma semana — nada. Três cenários: ou fechou com outro mais barato, ou desistiu, ou está esperando VOCÊ dar um sinal de vida mais convincente. Mas você está ocupado com outro projeto e o follow-up morre. 60% das suas propostas evaporam assim.",
    solution:
      "Um sistema que mantém você na mente do cliente após a proposta — com cases, depoimentos e conteúdo que reforçam seu valor — até ele estar pronto para assinar.",
    benefits: [
      "Follow-up pós-proposta automático com cases similares — o cliente vê que outros já confiaram em você",
      "Portfólio digital interativo: landing pages por projeto que impressionam e convertem",
      "Funil de captação para projetos de alto valor que atraem quem entende e paga por qualidade",
      "Pipeline visual: briefing → proposta → negociação → contrato → execução → entrega",
      "Programa de indicação pós-entrega — o momento de maior satisfação vira captação",
      "Nutrição com tendências e inspiração que mantém você como referência na mente do lead"
    ],
    keywords: [
      "crm para escritorio de arquitetura",
      "marketing digital para arquitetos",
      "como captar clientes arquitetura",
      "software gestão escritorio arquitetura",
      "como conseguir projetos de arquitetura"
    ],
    heroTitle: "Chega de Proposta Linda que Morre no 'Vou Pensar'",
    heroSubtitle:
      "Monte o sistema que transforma seus orçamentos em contratos assinados — com follow-up inteligente que reforça seu valor, não que parece desespero.",
    comparisons: [
      { feature: "Propostas", withoutGHL: "Envia, torce e espera. 60% morre.", withGHL: "Follow-up com cases similares que convertem indeciso" },
      { feature: "Portfólio", withoutGHL: "PDF estático ou feed do Instagram.", withGHL: "Landing pages imersivas por projeto que vendem sonho" },
      { feature: "Captação", withoutGHL: "Indicação + Instagram. Aleatório.", withGHL: "Funis + conteúdo + Ads = pipeline previsível" },
      { feature: "Pipeline", withoutGHL: "Post-it na tela ou memória.", withGHL: "Visual: do briefing à entrega com alertas automáticos" },
      { feature: "Pós-entrega", withoutGHL: "Termina o projeto e acabou.", withGHL: "Programa de indicação no momento de êxtase do cliente" }
    ],
    testimonial: {
      name: "Arq. Fernanda C.",
      role: "Sócia — Studio FC Design, Florianópolis",
      text: "Minha taxa de fechamento subiu de 25% para 55%. O segredo: o sistema manda um case similar 3 dias após a proposta, um depoimento de cliente parecido no dia 7, e um convite pra visitar uma obra finalizada no dia 14. O prospect não esquece de mim — e não me vê como 'mais uma'. Vê como A escolha."
    },
    faq: [
      { question: "Sou arquiteto autônomo. Vale a pena?", answer: "Especialmente pra você. Arquiteto solo não pode perder nenhuma proposta por falta de follow-up. O sistema é seu comercial que trabalha 24h enquanto você projeta." },
      { question: "Consigo mostrar meu portfólio de forma profissional?", answer: "Sim. Páginas interativas com fotos em alta resolução, antes/depois, depoimentos do cliente — muito além de um PDF. E cada página funciona como ferramenta de captação." },
      { question: "O ROI justifica para projetos menores?", answer: "O maior retorno está em projetos acima de R$ 30k, onde o follow-up profissional é o que separa 'vou pensar' de contrato assinado. Para alto volume de projetos menores, a automação economiza horas." }
    ],
    roi: { action: "1 projeto de alto valor fechado a mais por mês", value: "R$ 15.000 a R$ 50.000", payback: "1 proposta aceita que teria morrido = sistema pago por anos" }
  },
  {
    slug: "fotografos-casamento",
    name: "Fotógrafos e Organizadores de Casamento",
    pain: "Noivas que pesquisam 20 profissionais e sazonalidade brutal",
    painDetail:
      "A noiva manda mensagem pra 15 fotógrafos no mesmo dia. 'Olá, qual o valor do pacote para casamento em março?' Você responde com seu PDF lindo. Ela agradece. E desaparece. Porque ela recebeu 14 respostas iguais. Na alta temporada, você está tão ocupado que responde tarde e perde as melhores datas. Na baixa temporada, abre o celular e zero mensagens. Janeiro, fevereiro, março — silêncio. Sua receita parece uma montanha-russa: R$ 40.000 num mês, R$ 3.000 no outro. E você se pergunta: 'quando vou ter previsibilidade?'",
    solution:
      "Um sistema que te mantém como primeira opção da noiva durante os 6-12 meses de decisão — e preenche sua baixa temporada com ensaios, eventos corporativos e conteúdo que gera renda.",
    benefits: [
      "Nurturing emocional de 12 meses para noivas — da primeira pesquisa ao 'quero você!'",
      "Portfólio digital imersivo com depoimentos que emocionam e convencem",
      "Funil de captação para eventos corporativos e ensaios — diversifica sua receita",
      "Pipeline por tipo de evento e data — você vê seu ano inteiro com clareza",
      "Programa de indicação entre casais atendidos — noiva satisfeita indica 4 amigas",
      "Landing pages por estilo: rústico, clássico, minimalista — cada noiva se vê ali"
    ],
    keywords: [
      "crm para organizador de eventos",
      "marketing digital casamentos luxo",
      "como captar noivas alto padrao",
      "software gestão eventos e casamentos",
      "como conseguir clientes eventos corporativos"
    ],
    heroTitle: "Agenda Lotada o Ano Inteiro — Não Só na Temporada",
    heroSubtitle:
      "Pare de depender da alta temporada. Monte o sistema que encanta noivas por meses, preenche a baixa com corporativo e transforma indicação em máquina previsível.",
    comparisons: [
      { feature: "Noivas", withoutGHL: "Responde o PDF e torce. Noiva some.", withGHL: "Jornada emocional de 12 meses que mantém você em primeiro" },
      { feature: "Portfólio", withoutGHL: "Instagram que se perde no feed.", withGHL: "Experiência digital imersiva com depoimentos de casais" },
      { feature: "Baixa Temporada", withoutGHL: "Janeiro = conta bancária sangrando.", withGHL: "Funil B2B + ensaios + mini-sessions = receita constante" },
      { feature: "Indicações", withoutGHL: "Quando a noiva lembra. Se lembrar.", withGHL: "Programa automático pós-casamento no momento de êxtase" },
      { feature: "Gestão", withoutGHL: "Agenda de papel. Datas perdidas.", withGHL: "Pipeline visual por evento, data e valor — ano todo organizado" }
    ],
    testimonial: {
      name: "Juliana M.",
      role: "CEO — JM Assessoria de Casamentos, São Paulo",
      text: "Na última temporada fechei 40% mais casamentos. Mas o que mudou meu negócio mesmo foi a baixa temporada: 8 eventos corporativos com o funil B2B. Pela primeira vez em 10 anos, não tive mês ruim. Não sabia que isso era possível."
    },
    faq: [
      { question: "Funciona só para casamentos?", answer: "Não. O sistema serve para qualquer tipo de evento: corporativo, social, debutante, formatura, ensaios. Cada tipo tem seu funil, linguagem e jornada de nutrição." },
      { question: "Como funciona o nurturing de noivas?", answer: "Sequência automatizada de 12 meses: conteúdo emocional, dicas de planejamento, cases de casamentos similares ao estilo dela, convites para visitar trabalhos finalizados. Tudo personalizado — ela se sente única, não mais uma." },
      { question: "Consigo gerenciar fornecedores parceiros?", answer: "O CRM pode rastrear fornecedores parceiros (buffet, decoração, DJ), mas seu foco principal é captação e relacionamento com clientes. É sua ferramenta comercial, não de gestão operacional." }
    ],
    roi: { action: "1 casamento de luxo extra por trimestre", value: "R$ 30.000 a R$ 100.000", payback: "1 evento extra paga o sistema por um ano inteiro" }
  }
];

// Airtable record shape
interface AirtableNiche {
  id: string;
  slug: string;
  nicho: string;
  cidade: string;
  headline: string;
  dor: string;
  beneficio: string;
  linkAfiliado: string;
  snapshotBonus: string;
  metaDescription: string;
}

// Map Airtable nicho names to base template slugs
const NICHO_TO_SLUG: Record<string, string> = {
  Clinica_Estetica: "clinicas-estetica",
  Advocacia: "escritorios-advocacia",
  Imobiliaria: "imobiliarias-luxo",
  Odontologia: "consultorios-odontologia",
  Contabilidade: "consultorias-visto-imigracao",
  Fotografo_Casamento: "fotografos-casamento",
  Personal_Trainer: "clinicas-nutrologia",
  Psicologo: "escolas-idiomas",
  Veterinario: "concessionarias-veiculos",
  Arquiteto: "escritorios-arquitetura",
};

function loadAirtableData(): AirtableNiche[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require("../../data/niches.json") as AirtableNiche[];
  } catch {
    return [];
  }
}

export function getNicheBySlug(slug: string): NicheData | undefined {
  // First check if there's a direct match in base templates
  const baseMatch = niches.find((n) => n.slug === slug);
  if (baseMatch) {
    // Check if Airtable has overrides for this base niche
    const airtableData = loadAirtableData();
    const override = airtableData.find((a) => NICHO_TO_SLUG[a.nicho] === slug);
    if (override) {
      return mergeNicheData(baseMatch, override);
    }
    return baseMatch;
  }

  // Check if slug matches an Airtable city-specific page
  const airtableData = loadAirtableData();
  const airtableMatch = airtableData.find((a) => a.slug === slug);
  if (airtableMatch) {
    const baseSlug = NICHO_TO_SLUG[airtableMatch.nicho];
    const baseTemplate = niches.find((n) => n.slug === baseSlug);
    if (baseTemplate) {
      return mergeNicheData(baseTemplate, airtableMatch);
    }
  }

  return undefined;
}

function mergeNicheData(base: NicheData, override: AirtableNiche): NicheData {
  return {
    ...base,
    slug: override.slug || base.slug,
    heroTitle: override.headline || base.heroTitle,
    painDetail: override.dor || base.painDetail,
    solution: override.beneficio || base.solution,
  };
}

export function getAllNicheSlugs(): string[] {
  const baseSlugs = niches.map((n) => n.slug);
  const airtableData = loadAirtableData();
  const airtableSlugs = airtableData
    .filter((a) => a.slug)
    .map((a) => a.slug);
  return Array.from(new Set([...baseSlugs, ...airtableSlugs]));
}
