// ══════════════════════════════════════════════
//  DATA — categorias e serviços
// ══════════════════════════════════════════════
const categories = [
  {
    id: "agricultura",
    icon: "wheat",
    color: "#16a34a",
    colorLight: "#dcfce7",
    name: "Agricultura & Zona Rural",
    desc: "Serviços voltados ao produtor rural, abastecimento e feiras livres.",
    subcategories: [
      {
        id: "feiras",
        name: "Feiras Livres e Comerciais",
        icon: "salad",
        desc: "Permissão e cadastro de barracas em feiras livres e mercados municipais.",
        services: [
          { icon: "file-text", name: "Cadastro de Barracas", tag: "Comercial", desc: "Solicitação de cadastro para barracas em feiras livres.", link: "https://piracicaba-hml.solarbpm.softplan.com.br/form-dinamico-web/#/hml/answer/6a1eb5fde4b090bc98169e33/6a26d164e4b090bc98169ed7" },
          { icon: "clipboard-list", name: "Permissão de Comercialização", tag: "Licença", desc: "Autorização para comercialização em feiras municipais." }
        ]
      },
      {
        id: "agricultura_urbana",
        name: "Agricultura Urbana",
        icon: "sprout",
        desc: "Apoio a hortas comunitárias, pomares coletivos e segurança alimentar.",
        services: [
          { icon: "salad", name: "Hortas Comunitárias", tag: "Ambiental", desc: "Cadastro e apoio a hortas comunitárias." },
          { icon: "apple", name: "Pomares Coletivos", tag: "Ambiental", desc: "Projetos de pomares coletivos em áreas urbanas." }
        ]
      },
      {
        id: "logistica",
        name: "Transporte e Logística",
        icon: "truck",
        desc: "Autorização e licenciamento para transporte de produtos agrícolas.",
        services: [
          { icon: "truck", name: "Transporte de Produtos In Natura", tag: "Logística", desc: "Licenciamento para veículos de carga de produtos agrícolas." },
          { icon: "droplets", name: "Acesso à Água para Irrigação", tag: "Infraestrutura", desc: "Programa de apoio a pequenos produtores rurais no abastecimento hídrico." }
        ]
      }
    ]
  },
  {
    id: "animais",
    icon: "paw-print",
    color: "#b45309",
    colorLight: "#fef3c7",
    name: "Animais",
    desc: "Guarda responsável, adoção, vacinas e bem-estar animal.",
    subcategories: [
      {
        id: "adocao",
        name: "Adoção e Bem-Estar",
        icon: "dog",
        desc: "Processo de adoção e bem-estar animal.",
        services: [
          { icon: "dog", name: "Adoção de Animais", tag: "Bem-estar", desc: "Processo de adoção de cães e gatos nos Centros de Controle de Zoonoses (CCZ) municipais." },
          { icon: "alert-triangle", name: "Denúncia de Maus-Tratos", tag: "Proteção", desc: "Canal para denúncias de maus-tratos, abandono e exploração de animais domésticos e silvestres." }
        ]
      },
      {
        id: "saude_animal",
        name: "Saúde Animal",
        icon: "syringe",
        desc: "Vacinação, registro e controle sanitário.",
        services: [
          { icon: "truck", name: "Cata Cacareco", tag: "Coleta", desc: "Solicitação de coleta de cacareco (móveis velhos).", featured: true, link: "https://piracicaba-hml.solarbpm.softplan.com.br/form-dinamico-web/#/hml/answer/6a1eb5fde4b090bc98169e33/6a26d164e4b090bc98169ed7" },
          { icon: "tag", name: "Registro e Identificação Animal", tag: "Cadastro", desc: "Chip de identificação e registro obrigatório de animais domésticos na Prefeitura." }
        ]
      },
      {
        id: "controle_grande_porte",
        name: "Controle de Grande Porte",
        icon: "cow",
        desc: "Controle de animais de grande porte em situação de risco.",
        services: [
          { icon: "cow", name: "Controle de Animais de Grande Porte", tag: "Fiscalização", desc: "Remoção e destinação de equinos e bovinos em situação de maus-tratos ou abandono." }
        ]
      }
    ]
  },
  {
    id: "animais_peconhentos",
    icon: "bug",
    color: "#7c3aed",
    colorLight: "#ede9fe",
    name: "Animais Peçonhentos",
    desc: "Controle e manejo de animais peçonhentos e sinantrópicos.",
    services: [
      { icon: "bug", name: "Captura de Animais Peçonhentos", tag: "Urgência", desc: "Serviço de remoção de escorpiões, aranhas, cobras e outros animais peçonhentos em residências." },
      { icon: "hospital", name: "Atendimento a Acidentados", tag: "Saúde", desc: "Orientação sobre unidades de saúde com soro antiofídico e antiaracnídico disponível." },
      { icon: "clipboard-list", name: "Educação Preventiva", tag: "Prevenção", desc: "Materiais e palestras sobre prevenção de acidentes com animais peçonhentos." }
    ]
  },
  {
    id: "assistencia_social",
    icon: "handshake",
    color: "#0891b2",
    colorLight: "#e0f7fa",
    name: "Assistência Social",
    desc: "Apoio a famílias vulneráveis, CRAS, CREAS e benefícios sociais.",
    services: [
      { icon: "home", name: "CRAS – Centro de Referência", tag: "Proteção Básica", desc: "Atendimento a famílias em situação de vulnerabilidade social para acesso a benefícios e serviços." },
      { icon: "life-buoy", name: "CREAS – Proteção Especial", tag: "Proteção Especial", desc: "Acompanhamento a pessoas em situação de violência, exploração e violação de direitos." },
      { icon: "banknote", name: "Benefício Eventual", tag: "Benefício", desc: "Auxílio financeiro temporário para famílias em situação de emergência ou vulnerabilidade extrema." },
      { icon: "utensils", name: "Restaurante Escola", tag: "Alimentação", desc: "Refeições subsidiadas em restaurantes populares para trabalhadores e famílias de baixa renda." },
      { icon: "shield", name: "Rede de Proteção à Mulher", tag: "Proteção", desc: "Abrigos, atendimento psicossocial e jurídico para mulheres em situação de violência doméstica." },
      { icon: "user", name: "Serviços ao Idoso", tag: "Idoso", desc: "Centro Dia, casa de repouso, acompanhamento e transporte para idosos em situação de risco." }
    ]
  },
  {
    id: "defesa_civil",
    icon: "alert-triangle",
    color: "#dc2626",
    colorLight: "#fee2e2",
    name: "Defesa Civil",
    desc: "Prevenção e resposta a desastres naturais e emergências.",
    services: [
      { icon: "cloud-rain", name: "Alertas de Chuva e Alagamento", tag: "Emergência", desc: "Sistema de alertas em tempo real sobre chuvas intensas, alagamentos e riscos geológicos." },
      { icon: "tent", name: "Abrigos Temporários", tag: "Assistência", desc: "Cadastro, localização e capacidade dos abrigos municipais ativados em situações de desastre." },
      { icon: "home", name: "Vistoria de Imóveis em Risco", tag: "Prevenção", desc: "Solicitação de vistoria técnica para imóveis em encostas ou áreas de risco geológico." },
      { icon: "smartphone", name: "Cadastro no Alerta SP", tag: "Tecnologia", desc: "Inscrição no sistema de SMS de alertas meteorológicos da Defesa Civil de São Paulo." }
    ]
  },
  {
    id: "educacao",
    icon: "book-open",
    color: "#1d4ed8",
    colorLight: "#eff6ff",
    name: "Educação",
    desc: "Matrículas, creches, escolas municipais e programas educacionais.",
    services: [
      { icon: "backpack", name: "Matrícula Escolar", tag: "Ensino Fundamental", desc: "Processo de matrícula nas escolas municipais para o ensino fundamental e médio." },
      { icon: "baby", name: "Creches e CEIs", tag: "Educação Infantil", desc: "Vagas em Centros de Educação Infantil para crianças de 0 a 3 anos." },
      { icon: "moon", name: "Educação de Jovens e Adultos (EJA)", tag: "EJA", desc: "Ensino gratuito para jovens e adultos que não concluíram o ensino fundamental ou médio." },
      { icon: "wheelchair", name: "Educação Especial e Inclusiva", tag: "Inclusão", desc: "Salas de recursos, intérpretes de Libras e suporte pedagógico especializado." },
      { icon: "school", name: "Escola em Tempo Integral", tag: "Período Integral", desc: "Programas de contraturno com esporte, cultura e reforço escolar nas escolas municipais." },
      { icon: "book", name: "Bibliotecas Municipais", tag: "Cultura", desc: "Acervo, empréstimo, eventos e cursos gratuitos nas bibliotecas da rede municipal." }
    ]
  },
  {
    id: "esporte_lazer",
    icon: "trophy",
    color: "#16a34a",
    colorLight: "#dcfce7",
    name: "Esporte e Lazer",
    desc: "Equipamentos esportivos, programas de atividade física e eventos.",
    services: [
      { icon: "building-2", name: "CEUs – Centro Educacional Unificado", tag: "Complexo", desc: "Quadras, piscinas, teatro e espaços culturais nos CEUs da cidade." },
      { icon: "waves", name: "Piscinas Municipais", tag: "Natação", desc: "Acesso e horários das piscinas públicas com aulas de natação para todas as idades." },
      { icon: "bike", name: "CicloFaixa e Ciclistas", tag: "Mobilidade", desc: "Mapa de ciclovias, ciclorrotas e eventos de ciclofaixa de lazer nos fins de semana." },
      { icon: "trees", name: "Parques e Áreas Verdes", tag: "Lazer", desc: "Calendário de eventos, horários e programas esportivos nos parques municipais." }
    ]
  },
  {
    id: "financas",
    icon: "banknote",
    color: "#0d9488",
    colorLight: "#ccfbf1",
    name: "Finanças Públicas",
    desc: "IPTU, ISS, ITBI, nota fiscal e demais tributos municipais.",
    subcategories: [
      {
        id: "iptu",
        name: "IPTU",
        icon: "home",
        desc: "Imposto Predial e Territorial Urbano.",
        services: [
          { icon: "receipt", name: "Emissão de Boleto", tag: "Pagamento", desc: "Emitir 2ª via de boleto do IPTU.", link: "#", featured: true },
          { icon: "file-text", name: "Segunda Via de Conta", tag: "Pagamento", desc: "Emitir segunda via de contas e boletos municipais.", featured: true },
          { icon: "clipboard-list", name: "Parcelamento", tag: "Renegociação", desc: "Solicitar parcelamento de IPTU em atraso." },
          { icon: "file-text", name: "Isenção", tag: "Benefício", desc: "Solicitar isenção de IPTU para casos específicos." }
        ]
      },
      {
        id: "iss",
        name: "ISS e Nota Fiscal",
        icon: "receipt",
        desc: "Imposto Sobre Serviços e emissão de NF-e.",
        services: [
          { icon: "building-2", name: "ISS – Imposto Sobre Serviços", tag: "Empresas", desc: "Cadastro, declaração e recolhimento do ISS para prestadores de serviços no município." },
          { icon: "receipt", name: "Nota Fiscal Eletrônica", tag: "Nota Fiscal", desc: "Emissão, consulta e créditos da Nota Fiscal de Serviços Eletrônica (NF-e).", featured: true }
        ]
      },
      {
        id: "imoveis",
        name: "Transação de Imóveis",
        icon: "key",
        desc: "ITBI e certidões imobiliárias.",
        services: [
          { icon: "key", name: "ITBI – Transmissão de Imóveis", tag: "Imóveis", desc: "Cálculo, recolhimento e certidão do ITBI em transações imobiliárias no município." },
          { icon: "file-text", name: "Certidões e Débitos", tag: "Certidão", desc: "Emissão de certidão negativa de débitos tributários e não tributários municipais." }
        ]
      },
      {
        id: "alvaras",
        name: "Alvarás e Licenças",
        icon: "hard-hat",
        desc: "Alvará de funcionamento e fiscalização.",
        services: [
          { icon: "hard-hat", name: "Alvará de Funcionamento", tag: "Licença", desc: "Solicitação, renovação e consulta de alvarás para estabelecimentos comerciais e de serviços.", featured: true },
          { icon: "hard-hat", name: "Alvará de Obras", tag: "Obras", desc: "Solicitação de alvará para obras residenciais e comerciais.", featured: true },
          { icon: "credit-card", name: "Auto de Infração", tag: "Fiscalização", desc: "Consulta, recurso e pagamento de autos de infração emitidos pela fiscalização municipal." }
        ]
      }
    ]
  },
  {
    id: "fiscalizacao",
    icon: "search",
    color: "#ea580c",
    colorLight: "#fff7ed",
    name: "Fiscalização",
    desc: "Obras irregulares, posturas, saúde e vigilância sanitária.",
    services: [
      { icon: "megaphone", name: "Ouvidoria", tag: "Cidadania", desc: "Canal para denúncias, reclamações, elogios e sugestões dos cidadãos.", featured: true },
      { icon: "home", name: "Obras Irregulares", tag: "Posturas", desc: "Denúncia de construções clandestinas, irregulares ou sem alvará de obras." },
      { icon: "utensils-crossed", name: "Vigilância Sanitária", tag: "Saúde", desc: "Inspeção e licenciamento de estabelecimentos de alimentos, saúde e cosméticos." },
      { icon: "bug", name: "Controle de Pragas Urbanas", tag: "Saúde Pública", desc: "Denúncia e combate a focos de ratos, baratas e outras pragas urbanas em espaços públicos." },
      { icon: "megaphone", name: "Poluição Sonora", tag: "Posturas", desc: "Denúncia de perturbação de sossego, estabelecimentos barulhentos e obras em horários proibidos." },
      { icon: "construction", name: "Fiscalização de Obras Públicas", tag: "Obras", desc: "Acompanhamento e fiscalização de contratos e obras do município pela Controladoria Geral." }
    ]
  },
  {
    id: "mobilidade",
    icon: "bus",
    color: "#7c3aed",
    colorLight: "#ede9fe",
    name: "Mobilidade e Transporte",
    desc: "Ônibus, metrô, táxi, estacionamento e infraestrutura viária.",
    services: [
      { icon: "bus", name: "Ônibus Municipais", tag: "Transporte", desc: "Itinerários, horários, planejamento de rotas e informações sobre a frota de ônibus do município." },
      { icon: "credit-card", name: "Bilhete Único", tag: "Passe", desc: "Solicitação, recarga, bloqueio e segunda via do Bilhete Único de transporte público." },
      { icon: "car", name: "Táxi e Transporte por Aplicativo", tag: "Táxi", desc: "Cadastro, permissão e fiscalização de táxis municipais e motoristas de aplicativo." },
      { icon: "square-parking", name: "Zona Azul Digital", tag: "Estacionamento", desc: "Compra de créditos e consulta de vagas regulamentadas de estacionamento rotativo." },
      { icon: "road", name: "Manutenção de Vias e Pavimento", tag: "Infraestrutura", desc: "Solicitação de tapa-buraco, recapeamento e sinalização de ruas e avenidas." },
      { icon: "traffic-light", name: "Semáforos e Sinalização", tag: "CET", desc: "Reporte de semáforos defeituosos, placas danificadas e problemas de sinalização viária." },
      { icon: "footprints", name: "Calçadas e Acessibilidade", tag: "Acessibilidade", desc: "Programa de regularização de calçadas e rotas acessíveis para pedestres e cadeirantes." },
      { icon: "bike", name: "Bicicletas Compartilhadas", tag: "Mobilidade Ativa", desc: "Cadastro, planos e estações do sistema de bicicletas compartilhadas de Piracicaba." }
    ]
  },
  {
    id: "habitacao",
    icon: "home",
    color: "#b45309",
    colorLight: "#fef3c7",
    name: "Habitação",
    desc: "Programas habitacionais, regularização fundiária e moradias.",
    services: [
      { icon: "home", name: "Programa Minha Casa Minha Vida", tag: "Habitação", desc: "Inscrição e consulta de processo nos programas habitacionais municipais e estaduais." },
      { icon: "clipboard-check", name: "Habite-se", tag: "Documentação", desc: "Emissão de habite-se para conclusão de obras residenciais e comerciais.", featured: true },
      { icon: "clipboard-list", name: "Regularização Fundiária", tag: "Regularização", desc: "Processo de regularização de imóveis em áreas de ocupação e favelas urbanizadas." },
      { icon: "hammer", name: "Mutirão de Reforma", tag: "Reforma", desc: "Programa de apoio técnico e material para reforma de moradias precárias." },
      { icon: "clipboard-list", name: "Cadastro Municipal de Habitação", tag: "Cadastro", desc: "Inscrição no cadastro para acesso a programas de moradia da Secretaria Municipal de Habitação." }
    ]
  },
  {
    id: "saude",
    icon: "stethoscope",
    color: "#dc2626",
    colorLight: "#fee2e2",
    name: "Saúde",
    desc: "UBS, hospitais, vacinas, saúde mental e programas de saúde pública.",
    services: [
      { icon: "hospital", name: "UBS – Unidade Básica de Saúde", tag: "Atenção Básica", desc: "Localização, agendamento e serviços das Unidades Básicas de Saúde do município." },
      { icon: "calendar", name: "Agendamento de Saúde", tag: "Agendamento", desc: "Agendamento de consultas e exames nas unidades de saúde do município.", featured: true },
      { icon: "pill", name: "Farmácia Popular e Municipal", tag: "Medicamentos", desc: "Retirada de medicamentos gratuitos e de baixo custo nas farmácias da rede municipal." },
      { icon: "brain", name: "CAPS – Saúde Mental", tag: "Saúde Mental", desc: "Centros de Atenção Psicossocial para tratamento de transtornos mentais e dependência química." },
      { icon: "baby", name: "Pré-Natal e Saúde da Mulher", tag: "Saúde da Mulher", desc: "Acompanhamento pré-natal, planejamento reprodutivo e exames de rastreamento feminino." },
      { icon: "child", name: "Saúde da Criança e Adolescente", tag: "Pediatria", desc: "Calendário vacinal, consultas de puericultura e acompanhamento do desenvolvimento infantil." },
      { icon: "syringe", name: "Vacinação", tag: "Prevenção", desc: "Pontos de vacinação, calendário vacinal e campanhas de imunização da Prefeitura." },
      { icon: "smile", name: "Saúde Bucal", tag: "Odontologia", desc: "Agendamento de consultas odontológicas nas UBSs e CEOs (Centro de Especialidades)." },
      { icon: "activity", name: "Academia da Saúde", tag: "Prevenção", desc: "Atividades físicas orientadas por educadores físicos em polos ao ar livre." }
    ]
  },
  {
    id: "meio_ambiente",
    icon: "tree-pine",
    color: "#15803d",
    colorLight: "#dcfce7",
    name: "Meio Ambiente",
    desc: "Arborização, coleta seletiva, licenciamento ambiental e parques.",
    services: [
      { icon: "tree-pine", name: "Poda e Remoção de Árvores", tag: "Arborização", desc: "Solicitação de poda emergencial, remoção e plantio de árvores em vias públicas." },
      { icon: "recycle", name: "Coleta Seletiva e Reciclagem", tag: "Sustentabilidade", desc: "Calendário de coleta seletiva, pontos de entrega voluntária e ecopontos municipais.", featured: true },
      { icon: "factory", name: "Licenciamento Ambiental", tag: "Licença", desc: "Licença ambiental para atividades potencialmente poluidoras no território municipal." },
      { icon: "droplets", name: "Córregos e Saneamento", tag: "Saneamento", desc: "Denúncia de descarte irregular em córregos e solicitação de limpeza e canalização." },
      { icon: "wind", name: "Qualidade do Ar", tag: "Monitoramento", desc: "Índices e boletins diários da qualidade do ar em Piracicaba pela CETESB." }
    ]
  },
  {
    id: "cultura",
    icon: "masks",
    color: "#9333ea",
    colorLight: "#f3e8ff",
    name: "Cultura e Turismo",
    desc: "Museus, teatros, patrimônio histórico e eventos culturais.",
    services: [
      { icon: "masks", name: "Teatros e Centros Culturais", tag: "Cultura", desc: "Programação, ingressos e espaços disponíveis nos teatros e centros culturais municipais." },
      { icon: "landmark", name: "Museus Municipais", tag: "Patrimônio", desc: "Acervo, visitas guiadas e agendamento escolar nos museus da Prefeitura de Piracicaba." },
      { icon: "camera", name: "Patrimônio Histórico", tag: "Preservação", desc: "Tombamento, inventário e autorização para intervenções em bens históricos municipais." },
      { icon: "calendar-days", name: "Eventos e Festivais", tag: "Eventos", desc: "Autorização para realização de eventos culturais, shows e festivais em espaços públicos." }
    ]
  }
];
