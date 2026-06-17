// ══════════════════════════════════════════════
//  DATA — categorias e serviços
//  Fonte: Assuntos_ativos_156.xlsx
// ══════════════════════════════════════════════
const categories = [

  // ─── AGRICULTURA E ZONA RURAL ───────────────
  {
    id: "agricultura",
    icon: "ph:plant",
    color: "#16a34a",
    colorLight: "#dcfce7",
    name: "Agricultura e Zona Rural",
    desc: "Atendimento relacionado à infraestrutura rural, abastecimento e comercialização de produtos agrícolas.",
    services: [
      { icon: "ph:road-horizon", name: "Recuperação de Estrada de Terra", tag: "Infraestrutura", desc: "Solicitação de manutenção ou recuperação de estradas de terra na zona rural." },
      { icon: "ph:truck",        name: "Caminhão Pipa",                   tag: "Abastecimento", desc: "Solicitação de caminhão pipa para a zona rural." },
      { icon: "ph:storefront",   name: "Feira Livre",                     tag: "Comercialização", desc: "Reclamações, sugestões, denúncias ou solicitações relacionadas às feiras livres municipais." },
      { icon: "ph:storefront",   name: "Varejão",                         tag: "Comercialização", desc: "Reclamações, sugestões, denúncias ou solicitações relacionadas aos varejões municipais." },
      { icon: "ph:bridge",       name: "Ponte",                           tag: "Infraestrutura", desc: "Solicitação de manutenção, reforma, implantação ou vistoria de pontes na zona rural." }
    ]
  },

  // ─── ANIMAIS ────────────────────────────────
  {
    id: "animais",
    icon: "ph:paw-print",
    color: "#b45309",
    colorLight: "#fef3c7",
    name: "Animais",
    desc: "Demandas relacionadas a animais domésticos, fauna silvestre, zoonoses e controle de pragas.",
    subcategories: [
      {
        id: "criacao_animais",
        name: "Criação de Animais",
        icon: "ph:paw-print",
        desc: "Demandas sobre criação de animais.",
        services: [
          { icon: "ph:info",    name: "Criação de Animais", tag: "Geral", desc: "Solicitações e reclamações sobre criação de animais." }
        ]
      },
      {
        id: "dedetizacao",
        name: "Dedetização",
        icon: "ph:prohibit",
        desc: "Controle de pragas urbanas.",
        services: [
          { icon: "fluent-emoji-high-contrast:cockroach",       name: "Barata",     tag: "Pragas", desc: "Ocorrências envolvendo baratas." },
          { icon: "fluent-emoji-high-contrast:mosquito",  name: "Pernilongo", tag: "Pragas", desc: "Ocorrências envolvendo pernilongos." },
          { icon: "fluent-emoji-high-contrast:rat",     name: "Rato",       tag: "Pragas", desc: "Ocorrências envolvendo ratos." }
        ]
      },
      {
        id: "caes_gatos",
        name: "Cão e Gato",
        icon: "ph:dog",
        desc: "Assuntos relacionados a cães e gatos.",
        services: [
          { icon: "ph:sparkle",      name: "Falta de Higiene",        tag: "Bem-estar",           desc: "Reclamações relacionadas à falta de higiene com cães e gatos." },
          { icon: "ph:users",        name: "Projeto Tutor",            tag: "Programa",             desc: "Demandas relacionadas ao Programa Tutor Responsável." },
          { icon: "ph:scissors",     name: "Reclamação de Castração",  tag: "Controle Populacional", desc: "Reclamações e solicitações relacionadas à castração de cães e gatos." },
          { icon: "ph:skull",        name: "Averiguação — Animal Morto", tag: "Atendimento",        desc: "Solicitações relacionadas à remoção ou averiguação de animais mortos." },
          { icon: "ph:dog",          name: "Averiguação — Animal Vivo", tag: "Atendimento",         desc: "Solicitações relacionadas a animais vivos em situação de risco." },
          { icon: "ph:heart",        name: "Posse Responsável",        tag: "Orientação",           desc: "Orientações e informações sobre a guarda responsável de animais." }
        ]
      },
      {
        id: "zoonoses",
        name: "Zoonoses",
        icon: "ph:shield-warning",
        desc: "Controle e monitoramento de vetores de risco à saúde pública.",
        services: [
          { icon: "ph:info",                   name: "Orientação — Caramujo",      tag: "Zoonoses", desc: "Orientação sobre ocorrências envolvendo caramujos." },
          { icon: "ph:info",                   name: "Orientação — Carrapato e Pulga", tag: "Zoonoses", desc: "Orientação sobre ocorrências envolvendo carrapatos e pulgas." },
          { icon: "ph:info",                   name: "Orientação — Escorpião",     tag: "Zoonoses", desc: "Orientação sobre ocorrências envolvendo escorpiões." },
          { icon: "mdi:bat",                   name: "Orientação — Morcego",       tag: "Zoonoses", desc: "Orientação sobre ocorrências envolvendo morcegos." },
          { icon: "icon-park-outline:pigeon",  name: "Orientação — Pomba",         tag: "Zoonoses", desc: "Orientação sobre ocorrências envolvendo pombas." },
          { icon: "ph:dots-three-circle",      name: "Orientação — Outros",        tag: "Zoonoses", desc: "Orientação sobre outras ocorrências de zoonoses." },
          { icon: "mdi:bat",                   name: "Recolhimento de Morcego",    tag: "Zoonoses", desc: "Solicitação de recolhimento de morcego." }
        ]
      },
      {
        id: "animais_silvestres",
        name: "Animais Silvestres",
        icon: "ph:bird",
        desc: "Atendimento relacionado à fauna silvestre.",
        services: [
          { icon: "ph:bird", name: "Animais Silvestres", tag: "Fauna", desc: "Solicitações gerais relacionadas a animais silvestres." }
        ]
      }
    ]
  },

  // ─── ATENDIMENTO SOCIAL ─────────────────────
  {
    id: "atendimento_social",
    icon: "ph:users",
    color: "#0891b2",
    colorLight: "#e0f7fa",
    name: "Atendimento Social",
    desc: "Apoio a famílias vulneráveis, benefícios sociais e grupos em situação de vulnerabilidade.",
    subcategories: [
      {
        id: "beneficios",
        name: "Benefícios e Programas",
        icon: "ph:money",
        desc: "Benefícios e programas sociais.",
        services: [
          { icon: "ph:money",    name: "Auxílio Brasil",   tag: "Benefício", desc: "Informações e solicitações relacionadas ao Auxílio Brasil." },
          { icon: "ph:list-checks", name: "Cadastro Único", tag: "Cadastro", desc: "Inscrição e atualização no Cadastro Único." },
          { icon: "ph:house",    name: "Casa Própria",     tag: "Habitação", desc: "Informações sobre programas de habitação popular." },
          { icon: "ph:package",  name: "Cesta Básica",     tag: "Benefício", desc: "Solicitação e informações sobre distribuição de cestas básicas." }
        ]
      },
      {
        id: "grupos_vulneraveis",
        name: "Grupos Vulneráveis",
        icon: "ph:heart",
        desc: "Atendimento a grupos em situação de vulnerabilidade social.",
        services: [
          { icon: "ph:baby",        name: "Criança e Adolescente — Outras Situações", tag: "Criança",        desc: "Outras situações envolvendo crianças e adolescentes em vulnerabilidade." },
          { icon: "ph:baby",        name: "Criança e Adolescente — Trabalho Infantil", tag: "Criança",       desc: "Denúncia e atendimento a casos de trabalho infantil." },
          { icon: "ph:user",        name: "Idoso",                                    tag: "Idoso",          desc: "Atendimento e proteção a idosos em situação de vulnerabilidade." },
          { icon: "ph:house-line",  name: "Pessoa em Situação de Rua",                tag: "Vulnerabilidade", desc: "Atendimento e encaminhamento de pessoas em situação de rua." },
          { icon: "ph:wheelchair",  name: "Pessoa com Deficiência",                   tag: "Deficiência",    desc: "Atendimento e serviços voltados a pessoas com deficiência." },
          { icon: "ph:brain",       name: "Pessoa com Problema Psicológico",          tag: "Saúde Mental",   desc: "Atendimento e encaminhamento de pessoas com problemas psicológicos." }
        ]
      }
    ]
  },

  // ─── DISCRIMINAÇÃO ──────────────────────────
  {
    id: "discriminacao",
    icon: "ph:warning",
    color: "#dc2626",
    colorLight: "#fee2e2",
    name: "Discriminação",
    desc: "Denúncia e combate à discriminação.",
    services: [
      { icon: "ph:warning", name: "Racismo",    tag: "Discriminação", desc: "Denúncia de discriminação racial." },
      { icon: "ph:warning", name: "LGBTQIA+",   tag: "Discriminação", desc: "Denúncia de discriminação por orientação sexual ou identidade de gênero." },
      { icon: "ph:warning", name: "Religiosa",  tag: "Discriminação", desc: "Denúncia de discriminação religiosa." },
      { icon: "ph:warning", name: "Outros",     tag: "Discriminação", desc: "Outras denúncias de discriminação." }
    ]
  },

  // ─── EDUCAÇÃO ───────────────────────────────
  {
    id: "educacao",
    icon: "ph:book-open",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Educação",
    desc: "Escola municipal, escola particular, transporte escolar, manutenção e espaços esportivos.",
    subcategories: [
      {
        id: "escola_particular",
        name: "Escola Particular",
        icon: "ph:buildings",
        desc: "Demandas relacionadas às escolas particulares.",
        services: [
          { icon: "ph:chalkboard-teacher", name: "Metodologia",   tag: "Pedagógico",    desc: "Reclamações ou dúvidas sobre metodologias adotadas em escolas particulares." },
          { icon: "ph:file-text",          name: "Documentação",  tag: "Administrativo", desc: "Solicitações relacionadas à documentação em escolas particulares." }
        ]
      },
      {
        id: "escola_municipal",
        name: "Escola Municipal",
        icon: "ph:chalkboard-teacher",
        desc: "Demandas relacionadas às escolas municipais.",
        services: [
          { icon: "ph:wheelchair",  name: "Acessibilidade",                               tag: "Inclusão",   desc: "Solicitações relacionadas à acessibilidade nas escolas municipais." },
          { icon: "ph:warning",     name: "Acidente com Aluno",                            tag: "Segurança",  desc: "Comunicação de acidente envolvendo aluno no ambiente escolar." },
          { icon: "ph:chalkboard-teacher", name: "Falta de Professor",                    tag: "Ensino",     desc: "Denúncia ou comunicado sobre ausência de professor em sala de aula." },
          { icon: "ph:fork-knife",  name: "Merenda",                                      tag: "Alimentação", desc: "Reclamações ou solicitações relacionadas à merenda escolar." },
          { icon: "ph:user-plus",   name: "Reclamação de Auxiliar de Aluno com Necessidade Especial", tag: "Inclusão", desc: "Reclamação sobre ausência ou qualidade do auxiliar de aluno com necessidade especial." },
          { icon: "ph:calendar-x",  name: "Ausência de Aula",                             tag: "Ensino",     desc: "Comunicado sobre suspensão ou falta injustificada de aulas." },
          { icon: "ph:student",     name: "Vaga Escolar",                                 tag: "Matrícula",  desc: "Solicitação de vaga em escola municipal." }
        ]
      },
      {
        id: "cieja",
        name: "CIEJA",
        icon: "ph:book-open",
        desc: "Centro Integrado de Educação de Jovens e Adultos.",
        services: [
          { icon: "ph:book-open", name: "CIEJA — Geral", tag: "CIEJA", desc: "Demandas gerais relacionadas ao CIEJA." }
        ]
      },
      {
        id: "transporte_escolar",
        name: "Transporte Escolar",
        icon: "ph:bus",
        desc: "Demandas relacionadas ao transporte escolar.",
        services: [
          { icon: "ph:wheelchair",  name: "Acessibilidade", tag: "Inclusão",   desc: "Solicitações de acessibilidade no transporte escolar." },
          { icon: "ph:clock",       name: "Atraso",         tag: "Transporte", desc: "Reclamação de atraso no transporte escolar." },
          { icon: "ph:x-circle",    name: "Falta",          tag: "Transporte", desc: "Comunicação de ausência do transporte escolar." }
        ]
      },
      {
        id: "manutencao_escolar",
        name: "Manutenção",
        icon: "ph:wrench",
        desc: "Demandas sobre a estrutura física das escolas.",
        services: [
          { icon: "ph:path",       name: "Calçada",             tag: "Infraestrutura", desc: "Problemas na calçada de unidades escolares." },
          { icon: "ph:tree",       name: "Corte de Mato",       tag: "Manutenção",     desc: "Solicitação de corte de mato em área de unidade escolar." },
          { icon: "ph:paint-brush",name: "Rachaduras e Pinturas", tag: "Manutenção",   desc: "Solicitação de reparos em rachaduras ou pintura de unidades escolares." }
        ]
      },
      {
        id: "outros_educacao",
        name: "Outros",
        icon: "ph:dots-three-circle",
        desc: "Outras demandas de educação.",
        services: [
          { icon: "ph:dots-three-circle", name: "Outros", tag: "Educação", desc: "Outras demandas relacionadas à educação." }
        ]
      },
      {
        id: "espacos_esportivos",
        name: "Espaços Esportivos",
        icon: "ph:football",
        desc: "Demandas relacionadas a espaços esportivos nas escolas.",
        services: [
          { icon: "ph:football",  name: "Campo",                    tag: "Esporte",       desc: "Solicitações relacionadas a campos de futebol em escolas municipais." },
          { icon: "ph:receipt",   name: "Cobrança de Taxa Indevida", tag: "Fiscalização",  desc: "Denúncia de cobrança de taxa indevida em espaços esportivos escolares." },
          { icon: "ph:buildings", name: "Ginásio ou Quadra Aberta", tag: "Esporte",       desc: "Solicitações relacionadas a ginásios ou quadras poliesportivas nas escolas." }
        ]
      }
    ]
  },

  // ─── ESPORTE E LAZER ────────────────────────
  {
    id: "esporte_lazer",
    icon: "ph:trophy",
    color: "#059669",
    colorLight: "#d1fae5",
    name: "Esporte e Lazer",
    desc: "Equipamentos esportivos, programas de atividade física e eventos.",
    services: []
  },

  // ─── EVENTOS ────────────────────────────────
  {
    id: "eventos",
    icon: "ph:calendar",
    color: "#7c3aed",
    colorLight: "#ede9fe",
    name: "Eventos",
    desc: "Eventos culturais, esportivos e comunitários.",
    services: []
  },

  // ─── FINANÇAS PÚBLICAS ──────────────────────
  {
    id: "financas",
    icon: "ph:money",
    color: "#0f766e",
    colorLight: "#ccfbf1",
    name: "Finanças Públicas",
    desc: "Impostos, taxas e serviços online da Prefeitura.",
    services: [
      { icon: "ph:receipt",   name: "Impostos e Taxas",  tag: "Tributário", desc: "Informações e solicitações relacionadas a impostos e taxas municipais." },
      { icon: "ph:monitor",   name: "Serviços On-line",  tag: "Digital",    desc: "Acesso e suporte aos serviços digitais da Prefeitura." }
    ]
  },

  // ─── FISCALIZAÇÃO ───────────────────────────
  {
    id: "fiscalizacao",
    icon: "ph:magnifying-glass",
    color: "#ea580c",
    colorLight: "#ffedd5",
    name: "Fiscalização",
    desc: "Fiscalização de locais públicos, imóveis particulares e estabelecimentos.",
    subcategories: [
      {
        id: "local_publico",
        name: "Local Público",
        icon: "ph:map-pin",
        desc: "Ocorrências em áreas e logradouros públicos.",
        services: [
          { icon: "ph:speaker-high", name: "Poluição Sonora",              tag: "Posturas", desc: "Denúncia de perturbação de sossego em áreas públicas." },
          { icon: "ph:hammer",       name: "Obra Pública",                 tag: "Posturas", desc: "Denúncia de obra pública irregular." },
          { icon: "ph:car",          name: "Veículo Abandonado",           tag: "Posturas", desc: "Denúncia de veículo abandonado em via pública." },
          { icon: "ph:path",         name: "Obstrução de Calçada",         tag: "Posturas", desc: "Denúncia de calçada obstruída por objetos ou obras." },
          { icon: "ph:trash",        name: "Caçamba Irregular",            tag: "Posturas", desc: "Denúncia de caçamba posicionada de forma irregular em via pública." },
          { icon: "ph:tree",         name: "Invasão de Área Verde",        tag: "Ambiental", desc: "Denúncia de invasão ou ocupação irregular de área verde pública." },
          { icon: "ph:tree",         name: "Poda ou Corte de Árvore Irregular", tag: "Ambiental", desc: "Denúncia de poda ou corte irregular de árvore em área pública." }
        ]
      },
      {
        id: "local_particular",
        name: "Local Particular",
        icon: "ph:house-line",
        desc: "Ocorrências em imóveis e estabelecimentos particulares.",
        services: [
          { icon: "ph:warning",       name: "Acumulador",                  tag: "Saúde",     desc: "Denúncia de situação de acumulador compulsivo com risco à saúde." },
          { icon: "ph:trash",         name: "Entulho",                     tag: "Posturas",  desc: "Denúncia de descarte irregular de entulho em imóvel particular." },
          { icon: "ph:file-text",     name: "Alvará Fixo",                 tag: "Licença",   desc: "Fiscalização de alvará de funcionamento de estabelecimento fixo." },
          { icon: "ph:file-text",     name: "Alvará Ambulante",            tag: "Licença",   desc: "Fiscalização de alvará para comércio ambulante." },
          { icon: "ph:mosquito",      name: "Dengue",                      tag: "Saúde",     desc: "Denúncia de foco de dengue em imóvel particular." },
          { icon: "ph:shield-check",  name: "Vigilância Sanitária",        tag: "Saúde",     desc: "Fiscalização sanitária de estabelecimentos." },
          { icon: "ph:map",           name: "Loteamento Irregular",        tag: "Posturas",  desc: "Denúncia de loteamento executado de forma irregular." },
          { icon: "ph:path",          name: "Muro e Calçada",              tag: "Posturas",  desc: "Denúncia de muro ou calçada em situação irregular." },
          { icon: "ph:cigarette",     name: "Fumantes",                    tag: "Saúde",     desc: "Denúncia relacionada ao uso irregular de cigarro em locais proibidos." },
          { icon: "ph:warning",       name: "Odor Forte",                  tag: "Saúde",     desc: "Denúncia de odor forte proveniente de imóvel particular." },
          { icon: "ph:hammer",        name: "Obra Particular",             tag: "Posturas",  desc: "Denúncia de obra irregular em imóvel particular." },
          { icon: "ph:recycle",       name: "Ferro Velho e Material Reciclado", tag: "Posturas", desc: "Denúncia de ferro velho ou material reciclado em situação irregular." },
          { icon: "ph:house-line",    name: "Imóvel Abandonado",           tag: "Posturas",  desc: "Denúncia de imóvel abandonado em situação de risco." },
          { icon: "ph:wine",          name: "Venda de Bebida para Menor",  tag: "Posturas",  desc: "Denúncia de venda de bebida alcoólica para menor de idade." },
          { icon: "ph:tree",          name: "Poda e Corte de Árvore Irregular", tag: "Ambiental", desc: "Denúncia de poda ou corte irregular de árvore em imóvel particular." },
          { icon: "ph:warning",       name: "Venda de Cerol",              tag: "Segurança", desc: "Denúncia de venda de cerol ou linha com cerol." },
          { icon: "ph:factory",       name: "Chaminé",                     tag: "Ambiental", desc: "Denúncia de chaminé em situação irregular." },
          { icon: "ph:speaker-high",  name: "Poluição Sonora",             tag: "Ambiental", desc: "Denúncia de poluição sonora proveniente de imóvel particular." },
          { icon: "ph:eye",           name: "Poluição Visual — Propaganda Irregular", tag: "Ambiental", desc: "Denúncia de propaganda ou publicidade em local não permitido." },
          { icon: "ph:lightning",     name: "Poluição Visual — Fios de Poste", tag: "Ambiental", desc: "Denúncia de fios soltos ou irregulares em postes." },
          { icon: "ph:warning",       name: "CEREST",                      tag: "Saúde",     desc: "Demandas relacionadas ao CEREST (Centro de Referência em Saúde do Trabalhador)." },
          { icon: "ph:smoke",         name: "Emitindo Fumaça",             tag: "Ambiental", desc: "Denúncia de emissão de fumaça por imóvel ou estabelecimento." },
          { icon: "ph:flask",         name: "Produtos Químicos",           tag: "Ambiental", desc: "Denúncia de descarte ou uso irregular de produtos químicos." },
          { icon: "ph:wind",          name: "Excesso de Poeira",           tag: "Ambiental", desc: "Denúncia de excesso de poeira proveniente de imóvel ou obra." },
          { icon: "ph:tree",          name: "Corte de Mato",               tag: "Posturas",  desc: "Solicitação de corte de mato em imóvel particular." },
          { icon: "ph:recycle",       name: "Recolhimento de Aparas",      tag: "Limpeza",   desc: "Solicitação de recolhimento de aparas de vegetação." },
          { icon: "ph:info",          name: "Fiscalização Orientação",     tag: "Orientação", desc: "Solicitação de orientação sobre fiscalização." },
          { icon: "ph:identification-card", name: "Inscrição Municipal",   tag: "Cadastro",  desc: "Fiscalização de inscrição municipal." },
          { icon: "ph:wheelchair",    name: "Rampa de Acessibilidade",     tag: "Acessibilidade", desc: "Denúncia ou solicitação relacionada a rampas de acessibilidade." }
        ]
      }
    ]
  },

  // ─── MOBILIDADE E TRANSPORTE ────────────────
  {
    id: "mobilidade",
    icon: "ph:bus",
    color: "#7c3aed",
    colorLight: "#ede9fe",
    name: "Mobilidade e Transporte",
    desc: "Trânsito, transporte público e limpeza pública.",
    subcategories: [
      {
        id: "transito",
        name: "Trânsito",
        icon: "ph:traffic-light",
        desc: "Sinalização, fiscalização e moderação do tráfego.",
        subcategories: [
          {
            id: "sinalizacao_horizontal",
            name: "Sinalização Horizontal",
            icon: "ph:road-horizon",
            desc: "Marcações e pinturas na pista.",
            services: [
              { icon: "ph:motorcycle",    name: "Áreas de Espera de Motos (Motobox)", tag: "Sinalização", desc: "Demandas relacionadas a motoboxes na pista." },
              { icon: "ph:footprints",    name: "Faixa de Pedestre",  tag: "Sinalização", desc: "Solicitação de implantação ou recuperação de faixa de pedestre." },
              { icon: "ph:road-horizon",  name: "Faixas",             tag: "Sinalização", desc: "Problemas com faixas de sinalização horizontal." },
              { icon: "ph:text-aa",       name: "Legendas",           tag: "Sinalização", desc: "Problemas com legendas pintadas na pista." },
              { icon: "ph:image-square",  name: "Pictograma",         tag: "Sinalização", desc: "Problemas com pictogramas na via." },
              { icon: "ph:arrow-up",      name: "Setas",              tag: "Sinalização", desc: "Problemas com setas de sinalização horizontal." },
              { icon: "ph:parking",       name: "Vagas",              tag: "Sinalização", desc: "Demandas sobre vagas de estacionamento na pista." },
              { icon: "ph:speed-slow",    name: "Lombada",            tag: "Sinalização", desc: "Solicitação de implantação ou manutenção de lombada." },
              { icon: "ph:warning",       name: "Obstáculo",          tag: "Sinalização", desc: "Problemas com obstáculos na sinalização horizontal." },
              { icon: "ph:wheelchair",    name: "Rebaixamento de Guia", tag: "Acessibilidade", desc: "Solicitação de rebaixamento de guia para acessibilidade." },
              { icon: "ph:parking",       name: "Zona Azul",          tag: "Estacionamento", desc: "Demandas sobre vagas regulamentadas pela Zona Azul." }
            ]
          },
          {
            id: "sinalizacao_vertical",
            name: "Sinalização Vertical",
            icon: "ph:sign-in",
            desc: "Placas e postes de sinalização.",
            services: [
              { icon: "ph:sign-in",        name: "Placa", tag: "Sinalização", desc: "Solicitação de instalação, manutenção ou troca de placas de sinalização." },
              { icon: "ph:traffic-sign",   name: "Poste", tag: "Sinalização", desc: "Problemas com postes de sinalização vertical." }
            ]
          }
        ],
        services: [
          { icon: "ph:shield-check",  name: "Fiscalização de Trânsito",    tag: "Fiscalização", desc: "Demandas gerais sobre fiscalização de trânsito." },
          { icon: "ph:receipt",       name: "Multas",                       tag: "Fiscalização", desc: "Consulta, recurso e informações sobre multas de trânsito." },
          { icon: "ph:gauge",         name: "Moderador de Tráfego — Radar", tag: "CET",          desc: "Solicitação ou problemas relacionados a radares de velocidade." },
          { icon: "ph:traffic-light", name: "Moderador de Tráfego — Semáforo", tag: "CET",      desc: "Denúncia de semáforo defeituoso ou solicitação de novo semáforo." },
          { icon: "ph:speed-slow",    name: "Moderador de Tráfego — Faixa Elevada", tag: "CET", desc: "Solicitação de implantação ou manutenção de faixa elevada." },
          { icon: "ph:speed-slow",    name: "Moderador de Tráfego — Linha Redutora de Velocidade", tag: "CET", desc: "Solicitação de implantação de redutor de velocidade." },
          { icon: "ph:road-horizon",  name: "Sistema Viário — Remodelação Viária",  tag: "Viário", desc: "Solicitações de remodelação do sistema viário." },
          { icon: "ph:bicycle",       name: "Sistema Viário — Ciclovia, Ciclofaixa e Ciclorrota", tag: "Mobilidade Ativa", desc: "Solicitação ou problemas relacionados à infraestrutura cicloviária." },
          { icon: "ph:bicycle",       name: "Sistema Viário — Paraciclo",   tag: "Mobilidade Ativa", desc: "Solicitação de implantação ou manutenção de paraciclos." }
        ]
      },
      {
        id: "transporte_publico",
        name: "Transporte Público",
        icon: "ph:bus",
        desc: "Ônibus, terminais, pontos e serviços de transporte.",
        services: [
          { icon: "ph:buildings",   name: "Empresa",                          tag: "Transporte", desc: "Demandas relacionadas a empresas de transporte público." },
          { icon: "ph:bus",         name: "Ônibus — Manutenção",              tag: "Transporte", desc: "Reclamações sobre manutenção de ônibus municipais." },
          { icon: "ph:bus",         name: "Ônibus — Outra",                   tag: "Transporte", desc: "Outras reclamações ou solicitações sobre ônibus." },
          { icon: "ph:map-trifold", name: "Linha — Alteração de Horário",     tag: "Transporte", desc: "Solicitação ou reclamação sobre alteração de horário de linha de ônibus." },
          { icon: "ph:buildings",   name: "Terminal",                         tag: "Transporte", desc: "Demandas sobre terminais de ônibus." },
          { icon: "ph:bus",         name: "Rodoviária — Manutenção",          tag: "Transporte", desc: "Demandas de manutenção relacionadas à rodoviária." },
          { icon: "ph:bus",         name: "Rodoviária — Outros",              tag: "Transporte", desc: "Outras demandas relacionadas à rodoviária." },
          { icon: "ph:sign-in",     name: "Ponto e Abrigo — Alteração",       tag: "Transporte", desc: "Solicitação de alteração de ponto ou abrigo de ônibus." },
          { icon: "ph:sign-in",     name: "Ponto e Abrigo — Manutenção",      tag: "Transporte", desc: "Solicitação de manutenção de ponto ou abrigo de ônibus." },
          { icon: "ph:sign-in",     name: "Ponto e Abrigo — Implantação",     tag: "Transporte", desc: "Solicitação de implantação de ponto ou abrigo de ônibus." },
          { icon: "ph:sign-in",     name: "Ponto e Abrigo — Retirada",        tag: "Transporte", desc: "Solicitação de retirada de ponto ou abrigo de ônibus." },
          { icon: "ph:taxi",        name: "Táxi e Vans Escolares",            tag: "Transporte", desc: "Demandas relacionadas a táxis e vans escolares." },
          { icon: "ph:arrow-up-right", name: "Projeto Elevar",               tag: "Programa",   desc: "Demandas relacionadas ao Projeto Elevar de transporte." },
          { icon: "ph:user",        name: "Motorista",                        tag: "Transporte", desc: "Reclamações ou elogios sobre motoristas do transporte público." }
        ]
      },
      {
        id: "limpeza_publica",
        name: "Limpeza Pública",
        icon: "ph:recycle",
        desc: "Coleta, varrição e equipamentos de limpeza urbana.",
        services: [
          { icon: "ph:road-horizon",   name: "Rua",                           tag: "Limpeza",    desc: "Solicitação de limpeza de rua." },
          { icon: "ph:broom",          name: "Varrição",                      tag: "Limpeza",    desc: "Solicitação de varrição de via pública." },
          { icon: "ph:path",           name: "Viela de Pedestre",             tag: "Limpeza",    desc: "Solicitação de limpeza ou varrição de viela de pedestre." },
          { icon: "ph:trash",          name: "Lixeira e Container",           tag: "Equipamento", desc: "Solicitação de instalação ou manutenção de lixeira ou container." },
          { icon: "ph:recycle",        name: "Reciclável",                    tag: "Coleta",     desc: "Solicitação ou problemas com a coleta seletiva de recicláveis." },
          { icon: "ph:trash",          name: "Domiciliar — Inclusão",         tag: "Coleta",     desc: "Solicitação de inclusão no serviço de coleta domiciliar." },
          { icon: "ph:trash",          name: "Domiciliar — Reclamação",       tag: "Coleta",     desc: "Reclamação sobre o serviço de coleta domiciliar." },
          { icon: "ph:info",           name: "Domiciliar — Orientação",       tag: "Coleta",     desc: "Orientações sobre o serviço de coleta domiciliar." },
          { icon: "ph:drop",           name: "Chorume",                       tag: "Limpeza",    desc: "Ocorrências relacionadas a chorume em vias ou áreas públicas." },
          { icon: "ph:truck",          name: "Cata Cacareco",                 tag: "Coleta",     desc: "Solicitação do serviço de coleta de volumes e móveis inservíveis." }
        ]
      }
    ]
  },

  // ─── RUAS E BAIRROS ─────────────────────────
  {
    id: "ruas_bairros",
    icon: "ph:map-pin",
    color: "#ca8a04",
    colorLight: "#fef9c3",
    name: "Ruas e Bairros",
    desc: "Arborização, córregos, calçadas, vias públicas e infraestrutura de bairros.",
    subcategories: [
      {
        id: "area_verde_arborizacao",
        name: "Área Verde — Arborização",
        icon: "ph:tree",
        desc: "Manutenção e plantio de árvores em áreas verdes e calçadas.",
        services: [
          { icon: "ph:scissors",           name: "Área Verde — Poda",                              tag: "Árvore",    desc: "Solicitação de poda de árvore em área verde." },
          { icon: "ph:branch",             name: "Área Verde — Recolhimento e Retirada de Galho Pendurado", tag: "Risco", desc: "Comunicado de galho pendurado com risco de queda em área verde." },
          { icon: "ph:tree",               name: "Área Verde — Árvore Caída",                      tag: "Emergência", desc: "Comunicado de árvore caída em área verde." },
          { icon: "ph:bee",                name: "Área Verde — Enxame de Abelha",                  tag: "Zoonoses",  desc: "Comunicado de enxame de abelha em árvore de área verde." },
          { icon: "ph:tree",               name: "Área Verde — Retirada de Toco",                  tag: "Árvore",    desc: "Solicitação de retirada de toco de árvore em área verde." },
          { icon: "ph:magnifying-glass",   name: "Área Verde — Vistoria (Seca ou Doente)",         tag: "Árvore",    desc: "Solicitação de vistoria técnica de árvore em área verde." },
          { icon: "ph:warning",            name: "Erosão — Calçada",                               tag: "Infraestrutura", desc: "Problemas de erosão em calçada." },
          { icon: "ph:scissors",           name: "Calçada — Poda",                                 tag: "Árvore",    desc: "Solicitação de poda de árvore em calçada." },
          { icon: "ph:branch",             name: "Calçada — Recolhimento e Retirada de Galho Pendurado", tag: "Risco", desc: "Comunicado de galho pendurado com risco de queda em calçada." },
          { icon: "ph:tree",               name: "Calçada — Árvore Caída",                         tag: "Emergência", desc: "Comunicado de árvore caída em calçada." },
          { icon: "ph:bee",                name: "Calçada — Enxame de Abelha",                     tag: "Zoonoses",  desc: "Comunicado de enxame de abelha em árvore de calçada." },
          { icon: "ph:tree",               name: "Calçada — Retirada de Toco",                     tag: "Árvore",    desc: "Solicitação de retirada de toco em calçada." },
          { icon: "ph:magnifying-glass",   name: "Calçada — Vistoria (Seca ou Doente)",            tag: "Árvore",    desc: "Solicitação de vistoria técnica de árvore em calçada." },
          { icon: "ph:plant",              name: "Mudas para Área Particular",                     tag: "Árvore",    desc: "Solicitação de mudas de árvores para área particular." },
          { icon: "ph:plant",              name: "Plantio — Calçada",                              tag: "Árvore",    desc: "Solicitação de plantio de árvore em calçada." },
          { icon: "ph:plant",              name: "Plantio — Área Verde",                           tag: "Árvore",    desc: "Solicitação de plantio de árvore em área verde." }
        ]
      },
      {
        id: "areas_publicas",
        name: "Áreas Públicas e Praças",
        icon: "ph:park",
        desc: "Demandas sobre equipamentos, córregos e praças.",
        services: [
          { icon: "ph:wrench",      name: "Equipamento em Área Pública",            tag: "Praças",     desc: "Manutenção de equipamentos em áreas públicas." },
          { icon: "ph:truck",       name: "Caminhão Pipa para Irrigação",           tag: "Serviço",    desc: "Solicitação de caminhão pipa para irrigação de plantas e gramados." },
          { icon: "ph:waves",       name: "Córrego — Canalização",                 tag: "Córrego",    desc: "Solicitação de canalização de córrego." },
          { icon: "ph:waves",       name: "Córrego — Limpeza",                     tag: "Córrego",    desc: "Solicitação de limpeza de córrego." },
          { icon: "ph:tree",        name: "Corte de Mato — Áreas Verdes, Praças e Parques", tag: "Limpeza", desc: "Solicitação de corte de mato em áreas verdes, praças e parques." },
          { icon: "ph:tree",        name: "Corte de Mato — Guia e Sarjeta",        tag: "Limpeza",    desc: "Solicitação de corte de mato em guia e sarjeta." },
          { icon: "ph:drop",        name: "Boca de Lobo",                          tag: "Drenagem",   desc: "Problemas com boca de lobo (bueiro)." },
          { icon: "ph:circle",      name: "Poço de Visita",                        tag: "Drenagem",   desc: "Problemas com poço de visita." },
          { icon: "ph:path",        name: "Calçada — Áreas Verdes, Praças e Parques", tag: "Calçada", desc: "Problemas em calçada de áreas verdes, praças e parques." },
          { icon: "ph:path",        name: "Calçada Pública",                       tag: "Calçada",    desc: "Problemas em calçada pública." },
          { icon: "ph:wheelchair",  name: "Calçada — Rampa de Deficiente",         tag: "Acessibilidade", desc: "Solicitação ou problema em rampa de acessibilidade em calçada." },
          { icon: "ph:fire",        name: "Fogo em Terreno ou Quintal",            tag: "Emergência", desc: "Comunicado de fogo em terreno ou quintal." },
          { icon: "ph:tree",        name: "Implantação de Área Verde",             tag: "Praças",     desc: "Solicitação de implantação de área verde." },
          { icon: "ph:sign-in",     name: "Placas e Obstáculos em Área Verde",     tag: "Praças",     desc: "Problemas com placas ou obstáculos em áreas verdes." },
          { icon: "ph:trash",       name: "Recolhimento de Entulho em Área Pública", tag: "Limpeza", desc: "Solicitação de recolhimento de entulho em área pública." },
          { icon: "ph:recycle",     name: "Recolhimento de Aparas",               tag: "Limpeza",    desc: "Solicitação de recolhimento de aparas de vegetação." }
        ]
      },
      {
        id: "meio_ambiente",
        name: "Meio Ambiente",
        icon: "ph:leaf",
        desc: "Demandas ambientais em ruas e bairros.",
        services: [
          { icon: "ph:leaf", name: "Meio Ambiente", tag: "Ambiental", desc: "Demandas gerais de meio ambiente em ruas e bairros." }
        ]
      },
      {
        id: "proprio_municipal",
        name: "Próprio Municipal",
        icon: "ph:buildings",
        desc: "Demandas sobre próprios municipais.",
        services: [
          { icon: "ph:buildings", name: "Próprio Municipal", tag: "Patrimônio", desc: "Demandas sobre bens e propriedades municipais." }
        ]
      },
      {
        id: "via_publica",
        name: "Via Pública",
        icon: "ph:road-horizon",
        desc: "Buracos, pavimentação, iluminação e infraestrutura de vias.",
        services: [
          { icon: "ph:road-horizon", name: "Buraco — Estrada de Terra",          tag: "Pavimentação", desc: "Denúncia de buraco em estrada de terra." },
          { icon: "ph:road-horizon", name: "Buraco — Asfalto",                   tag: "Pavimentação", desc: "Denúncia de buraco em via asfaltada." },
          { icon: "ph:drop",         name: "Buraco Aberto pelo Semae",           tag: "Pavimentação", desc: "Denúncia de buraco aberto pelo Semae não recomposto." },
          { icon: "ph:path",         name: "Canaleta ou Valeta",                 tag: "Drenagem",     desc: "Problemas com canaleta ou valeta de drenagem." },
          { icon: "ph:lightbulb",    name: "Iluminação Viária em Poste",         tag: "Iluminação",   desc: "Falha ou ausência de iluminação em via pública." },
          { icon: "ph:road-horizon", name: "Pavimentação",                       tag: "Obra",         desc: "Solicitação de pavimentação de via." },
          { icon: "ph:bridge",       name: "Ponte ou Viaduto",                   tag: "Obra de Arte", desc: "Problemas em ponte ou viaduto urbano." },
          { icon: "ph:drop-slash",   name: "Semae — Problemas no Esgoto",        tag: "Semae",        desc: "Comunicado de problema na rede de esgoto." },
          { icon: "ph:drop",         name: "Semae — Vazamento de Água na Calçada", tag: "Semae",      desc: "Comunicado de vazamento de água em calçada." },
          { icon: "ph:warning",      name: "Semae — Fraude em Hidrômetro ou Ligação de Água", tag: "Semae", desc: "Denúncia de fraude em hidrômetro ou ligação de água." },
          { icon: "ph:drop-slash",   name: "Semae — Falta de Água",              tag: "Semae",        desc: "Comunicado de falta de água no endereço." },
          { icon: "ph:tree",         name: "Semae — Corte de Mato",              tag: "Semae",        desc: "Solicitação de corte de mato em área do Semae." },
          { icon: "ph:dots-three-circle", name: "Semae — Outros",               tag: "Semae",        desc: "Outros serviços do Semae." },
          { icon: "ph:drop",         name: "Semae — Vazamento de Água na Rua",   tag: "Semae",        desc: "Comunicado de vazamento de água em via pública." },
          { icon: "ph:file-text",    name: "Semae — Segunda Via",                tag: "Semae",        desc: "Solicitação de segunda via de conta do Semae." },
          { icon: "ph:plug",         name: "Semae — Religação",                  tag: "Semae",        desc: "Solicitação de religação de serviço do Semae." },
          { icon: "ph:pencil",       name: "Semae — Alteração Cadastral",        tag: "Semae",        desc: "Solicitação de alteração de dados cadastrais no Semae." },
          { icon: "ph:gear",         name: "Semae — Padrões de Instalação",      tag: "Semae",        desc: "Demandas sobre padrões de instalação do Semae." },
          { icon: "ph:pipe",         name: "Semae — Ligação de Água ou Esgoto",  tag: "Semae",        desc: "Solicitação de ligação de água ou esgoto." },
          { icon: "ph:path",         name: "Guia e Sarjeta",                     tag: "Infraestrutura", desc: "Problemas em guia e sarjeta de via pública." },
          { icon: "ph:truck",        name: "Caminhão Pipa — Área Urbana",        tag: "Serviço",      desc: "Solicitação de caminhão pipa para área urbana." },
          { icon: "ph:truck",        name: "Caminhão Pipa — Estrada Jacob Canale (Lixão)", tag: "Serviço", desc: "Solicitação de caminhão pipa para a Estrada Jacob Canale." },
          { icon: "ph:truck",        name: "Caminhão Pipa — Serviço feito pelo Semae", tag: "Semae",   desc: "Solicitação de caminhão pipa executada pelo Semae." },
          { icon: "ph:sign-in",      name: "Placa com Nome de Rua",              tag: "Identificação", desc: "Solicitação ou problema com placa de identificação de rua." }
        ]
      }
    ]
  },

  // ─── SAÚDE PÚBLICA ──────────────────────────
  {
    id: "saude",
    icon: "ph:heart",
    color: "#dc2626",
    colorLight: "#fee2e2",
    name: "Saúde Pública",
    desc: "Transporte de pacientes, procedimentos SUS e unidades de saúde.",
    subcategories: [
      {
        id: "transporte_sus",
        name: "Transporte SUS",
        icon: "ph:ambulance",
        desc: "Serviços de transporte de pacientes pelo SUS.",
        services: [
          { icon: "ph:bus",       name: "SITSS",      tag: "Transporte", desc: "Solicitação de transporte pelo SITSS para consultas e exames." },
          { icon: "ph:ambulance", name: "Ambulância", tag: "Transporte", desc: "Solicitação de ambulância para transporte de paciente." }
        ]
      },
      {
        id: "procedimentos_sus",
        name: "Procedimentos SUS",
        icon: "ph:hospital",
        desc: "Consultas, exames e procedimentos pelo SUS.",
        services: [
          { icon: "ph:calendar",             name: "Consulta",       tag: "SUS",       desc: "Solicitação ou agendamento de consulta pelo SUS." },
          { icon: "ph:pill",                 name: "Farmácia",       tag: "SUS",       desc: "Retirada de medicamentos nas farmácias da rede municipal." },
          { icon: "ph:person-arms-spread",   name: "Fisioterapia",   tag: "SUS",       desc: "Solicitação de fisioterapia pelo SUS." },
          { icon: "ph:knife",                name: "Cirurgia",       tag: "SUS",       desc: "Solicitação ou informações sobre cirurgia pelo SUS." },
          { icon: "ph:syringe",              name: "Vacina",         tag: "Prevenção", desc: "Informações e pontos de vacinação." },
          { icon: "ph:bed",                  name: "Vaga Hospitalar", tag: "SUS",      desc: "Solicitação de vaga hospitalar pelo SUS." },
          { icon: "ph:activity",             name: "Exame",          tag: "SUS",       desc: "Solicitação ou agendamento de exame pelo SUS." }
        ]
      },
      {
        id: "unidade_saude",
        name: "Unidade de Saúde",
        icon: "ph:hospital",
        desc: "Infraestrutura e suprimentos das unidades de saúde.",
        services: [
          { icon: "ph:buildings", name: "Estrutura",              tag: "Unidade", desc: "Problemas de estrutura física em unidade de saúde." },
          { icon: "ph:wrench",    name: "Equipamento",            tag: "Unidade", desc: "Problemas com equipamentos em unidade de saúde." },
          { icon: "ph:warning",   name: "Falta de Materiais e Insumos", tag: "Unidade", desc: "Comunicado de falta de insumos em unidade de saúde." }
        ]
      }
    ]
  },

  // ─── SEGURANÇA E JUSTIÇA ────────────────────
  {
    id: "seguranca_justica",
    icon: "ph:shield-check",
    color: "#9333ea",
    colorLight: "#f3e8ff",
    name: "Segurança e Justiça",
    desc: "Segurança pública, defesa civil, PROCON e servidores municipais.",
    services: [
      { icon: "ph:shield-check",  name: "Policiamento",                          tag: "Segurança",   desc: "Solicitações e reclamações sobre policiamento." },
      { icon: "ph:warning",       name: "Defesa Civil",                          tag: "Defesa Civil", desc: "Ocorrências gerais de defesa civil." },
      { icon: "ph:scales",        name: "PROCON",                                tag: "Consumidor",  desc: "Demandas relacionadas ao PROCON municipal." },
      { icon: "ph:user",          name: "Servidores Municipais",                 tag: "RH",          desc: "Demandas relacionadas a servidores municipais." },
      { icon: "ph:file-text",     name: "Concurso Público",                      tag: "RH",          desc: "Informações sobre concursos públicos municipais." },
      { icon: "ph:info",          name: "Esclarecimento",                        tag: "Informação",  desc: "Solicitação de esclarecimento sobre serviços municipais." },
      { icon: "ph:megaphone",     name: "Reivindicação — Café da Manhã",         tag: "Benefício",   desc: "Reivindicação sobre o benefício de café da manhã para servidores." },
      { icon: "ph:package",       name: "Reivindicação — Cesta Básica",          tag: "Benefício",   desc: "Reivindicação sobre o benefício de cesta básica para servidores." },
      { icon: "ph:money",         name: "Reivindicação — IPASP",                 tag: "Previdência", desc: "Reivindicação relacionada ao IPASP (previdência do servidor)." }
    ]
  },

  // ─── OUVIDORIA ──────────────────────────────
  {
    id: "ouvidoria",
    icon: "ph:megaphone",
    color: "#a16207",
    colorLight: "#fef9c3",
    name: "Ouvidoria",
    desc: "Canal para agradecimentos, sugestões, reclamações e acesso à informação.",
    subcategories: [
      {
        id: "manifestacoes",
        name: "Manifestações",
        icon: "ph:megaphone",
        desc: "Manifestações gerais dos cidadãos.",
        services: [
          { icon: "ph:heart",       name: "Agradecimento", tag: "Manifestação", desc: "Registro de agradecimento pela ouvidoria." },
          { icon: "ph:lightbulb",   name: "Sugestão",      tag: "Manifestação", desc: "Registro de sugestão pela ouvidoria." }
        ]
      },
      {
        id: "reclamacao",
        name: "Reclamação",
        icon: "ph:warning",
        desc: "Reclamações específicas via ouvidoria.",
        services: [
          { icon: "ph:warning",  name: "Reclamação — Geral",                      tag: "Reclamação", desc: "Reclamações gerais registradas na ouvidoria." },
          { icon: "ph:user",     name: "Reclamação — Funcionários: Número Insuficiente", tag: "Atendimento", desc: "Reclamação sobre número insuficiente de funcionários." },
          { icon: "ph:user",     name: "Reclamação — Funcionários: Mau Atendimento", tag: "Atendimento", desc: "Reclamação sobre mau atendimento por funcionário municipal." },
          { icon: "ph:file-text",name: "Reclamação — Protocolo",                  tag: "Protocolo",  desc: "Abertura e acompanhamento de protocolo." }
        ]
      },
      {
        id: "sic",
        name: "Acesso à Informação",
        icon: "ph:info",
        desc: "Solicitações de acesso à informação pública.",
        services: [
          { icon: "ph:info", name: "SIC", tag: "LAI", desc: "Solicitação de Informação ao Cidadão via SIC (Lei de Acesso à Informação)." }
        ]
      }
    ]
  }

];