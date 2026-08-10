// ══════════════════════════════════════════════
//  ORDEM DE EXIBIÇÃO DAS CATEGORIA
// ══════════════════════════════════════════════
// A ordem das categorias na página inicial segue a ordem dos IDs
const categoryOrder = [
  "agricultura",         // Agricultura e Zona Rural
  "animais",              // Animais
  "atendimento_social",   // Atendimento Social
  "discriminacao",        // Discriminação
  "educacao",             // Educação
  "saude",                // Saúde Pública
  "esporte_lazer",        // Esporte e Lazer
  "eventos",              // Eventos
  "financas",             // Finanças Públicas
  "fiscalizacao",         // Fiscalização
  "transito",             // Trânsito
  "transporte_publico",   // Transporte Público
  "limpeza_publica",      // Limpeza Pública
  "ruas_bairros",         // Ruas e Bairros
  "seguranca_justica",    // Segurança e Justiça
  "ouvidoria",            // Sugestões e Reclamações
];

// ══════════════════════════════════════════════
//  SERVIÇOS EM DESTAQUE
// ══════════════════════════════════════════════
// A ordem dos serviços em destaque na página inicial segue a ordem dos IDs
// Os ID's são os mesmo dos formulários
const featuredOrder = [
  635, // Cata-Cacareco
  646, // Poda de Árvore
  678, // Buraco em Asfalto
  577, // Corte de Mato - Educação
  670, // Corte de Mato em Áreas Verdes
  701, // Fiscalização de Corte de Mato em Terreno Particular
  505, // Animal em Risco
  585, // Impostos e Taxas
  626, // Incluir Endereço (Coleta Domiciliar)
  645, // Placa de Trânsito
  676, // Solicitação de Fiscalização
];

const categories = [

  // ─── AGRICULTURA E ZONA RURAL ───────────────
  {
    id: "agricultura",
    icon: "temaki:plant",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Agricultura e Zona Rural",
    desc: "Atendimento em infraestrutura, abastecimento e comercialização agrícola.",
    services: [
      { 
        icon: "fa6-solid:road-circle-exclamation", 
        name: "Estrada de Terra", 
        tag: "Infraestrutura", 
        desc: "Solicite manutenção ou recuperação de estradas de terra na zona rural.", 
        keywords: [
          "estrada de chão", 
          "estrada não pavimentada", 
          "via rural", 
          "acesso rural", 
          "estrada de barro", 
          "estrada esburacada", 
          "estrada ruim", 
          "chão batido"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/492/formulario/6a54f203e4b01881f54683b0",
        // order: 1
      },
      { 
        icon: "fa6-solid:truck-droplet",
        name: "Caminhão Pipa",
        tag: "Abastecimento",
        desc: "Solicite caminhão pipa para abastecimento de água na zona rural.",
        keywords: [
          "carro pipa", 
          "abastecimento de água", 
          "água para rural", 
          "caminhão de água", 
          "água tanque", 
          "entrega água", 
          "água para roça"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/493/formulario/6a552b9ee4b01881f54689d1",
        // order: 1
      },
      { 
        icon: "streamline-plump:food-truck-event-fair",   
        name: "Feira Livre",      
        tag: "Comercialização", 
        desc: "Faça reclamações, sugestões ou denúncias sobre feiras livres municipais.", 
        keywords: [
          "feira", 
          "feira de rua", 
          "comércio ambulante", 
          "venda na rua", 
          "feira livre", 
          "feira semanal", 
          "feira ao ar livre"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/494/formulario/6a552dd8e4b01881f5468a16",
        // order: 1
      },
      { 
        icon: "ph:storefront",   
        name: "Varejão",          
        tag: "Comercialização", 
        desc: "Faça reclamações, sugestões ou denúncias sobre varejões municipais.", 
        keywords: [
          "mercado municipal", 
          "feira de produtos", 
          "varejão municipal", 
          "compra de alimentos", 
          "mercado popular"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/495/formulario/6a552ee8e4b01881f5468a38",
        // order: 1
      },
      {
        icon: "mdi:bridge",       
        name: "Ponte Rural",      
        tag: "Infraestrutura", 
        desc: "Solicite manutenção, reforma ou vistoria de pontes na zona rural.", 
        keywords: [
          "ponte de madeira", 
          "ponte rural", 
          "passarela rural", 
          "viaduto rural", 
          "ponte de terra"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/496/formulario/6a552f63e4b01881f5468a54",
        // order: 1
      }
    ]
  },

  // ─── ANIMAIS ────────────────────────────────
  {
    id: "animais",
    icon: "fluent-emoji-high-contrast:paw-prints",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Animais",
    desc: "Demandas relacionadas a animais domésticos, fauna silvestre, zoonoses e controle de pragas.",
    subcategories: [
      {
        id: "animais_geral",
        name: "Criação de Animais",
        icon: "lucide-lab:barn",
        desc: "Demandas gerais sobre animais.",
        services: [
          { 
            icon: "ph:cow", 
            name: "Criação de Animais", 
            tag: "Geral", 
            desc: "Solicitações e reclamações sobre criação de animais.", 
            keywords: [
              "criação", 
              "animais de criação", 
              "criação de gado", 
              "animais domésticos", 
              "criar animais", 
              "fazenda animais"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/497/formulario/6a57dff6e4b01881f546ae0c",
        // order: 1
          }
        ]
      },
      {
        id: "dedetizacao",
        name: "Pragas e Insetos",
        icon: "solar:bug-outline",
        desc: "Controle de pragas urbanas.",
        services: [
          { 
            icon: "fluent-emoji-high-contrast:cockroach", 
            name: "Barata", 
            tag: "Pragas", 
            desc: "Denúncia de infestação de baratas.", 
            keywords: [
              "baratas", 
              "insetos", 
              "praga doméstica", 
              "barata de esgoto", 
              "infestação", 
              "muitas baratas", 
              "barata na casa"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/498/formulario/6a55336be4b01881f5468af9",
        // order: 1
          },
          { 
            icon: "fluent-emoji-high-contrast:mosquito", 
            name: "Pernilongo", 
            tag: "Pragas", 
            desc: "Denúncia de infestação de pernilongos.", 
            keywords: [
              "mosquito", 
              "pernilongo", 
              "inseto voador", 
              "mosquito comum", 
              "muriçoca", 
              "pernilongo picando", 
              "mosquito picando"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/499/formulario/6a57e0a3e4b01881f546ae22",
        // order: 1
          },
          { 
            icon: "fluent-emoji-high-contrast:rat", 
            name: "Rato", 
            tag: "Pragas", 
            desc: "Denúncia de infestação de ratos.", 
            keywords: [
              "ratos", 
              "roedores", 
              "camundongo", 
              "ratazana", 
              "ratos grandes", 
              "infestação de rato", 
              "rato na casa"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/500/formulario/6a57e337e4b01881f546ae58",
        // order: 1
          }
        ]
      },
      {
        id: "caes_gatos",
        name: "Cães e Gatos",
        icon: "ph:dog",
        desc: "Assuntos relacionados a cães e gatos.",
        services: [
          { 
            icon: "tabler:trash-x", 
            name: "Falta de Higiene", 
            tag: "Bem-estar", 
            desc: "Reclamações sobre falta de higiene com cães e gatos.", 
            keywords: [
              "sujeira de animal", 
              "fezes de cachorro", 
              "higiene animal", 
              "limpeza de animal", 
              "bicho sujo", 
              "fezes na rua", 
              "fezes de cachorro na calçada"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/501/formulario/6a5fd0d5e4b0a15dd79e13b4"
          },
          { 
            icon: "tabler:heart-handshake", 
            name: "Projeto Tutor", 
            tag: "Programa", 
            desc: "Demandas sobre o Programa Tutor Responsável.", 
            keywords: [
              "tutor responsável", 
              "programa tutor", 
              "registro de animal", 
              "tutoria", 
              "cadastro animal", 
              "chip animal"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/502/formulario/6a58e388e4b01881f546b681",
            // order: 1
          },
          { 
            icon: "solar:stethoscope-bold", 
            name: "Castração", 
            tag: "Controle Populacional", 
            desc: "Reclamação sobre castração de cães e gatos.", 
            keywords: [
              "castrar", 
              "esterilizar", 
              "cirurgia de castração", 
              "controle de natalidade", 
              "castração cachorro", 
              "castração gato"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/503/formulario/6a58e496e4b01881f546b6a7",
            // order: 1
          },
          { 
            icon: "material-symbols:skull-outline", 
            name: "Animal Morto", 
            tag: "Atendimento", 
            desc: "Solicitação de remoção de animal morto.", 
            keywords: [
              "animal morto", 
              "cadáver", 
              "remoção de animal", 
              "carcaça", 
              "bicho morto", 
              "corpo de animal", 
              "cachorro morto"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/504/formulario/6a58e51be4b01881f546b6bc",
        // order: 1
          },
          { 
            icon: "mdi:shield-alert-outline", 
            name: "Animal em Risco", 
            tag: "Atendimento", 
            desc: "Solicitação para animal vivo em situação de risco.", 
            keywords: [
              "animal ferido", 
              "animal perdido", 
              "animal abandonado", 
              "resgate animal", 
              "bicho ferido", 
              "ajuda animal", 
              "cachorro atropelado"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/505/formulario/6a58e595e4b01881f546b6c6",
          },
          { 
            icon: "tabler:home-heart", 
            name: "Posse Responsável", 
            tag: "Orientação", 
            desc: "Orientações sobre guarda responsável de animais.", 
            keywords: [
              "posse responsável", 
              "cuidar de animal", 
              "responsabilidade animal", 
              "dono de animal", 
              "bem estar animal", 
              "cuidar cachorro"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/506/formulario/6a58e63ee4b01881f546b6e0",
        // order: 1
          }
        ]
      },
      {
        id: "zoonoses",
        name: "Animais Silvestres",
        icon: "game-icons:deer",
        desc: "Controle e monitoramento de vetores de risco à saúde pública.",
        services: [
          { 
            icon: "tabler:deer", 
            name: "Animais Silvestres", 
            tag: "Fauna", 
            desc: "Solicitações sobre animais silvestres.", 
            keywords: [
              "animal selvagem", 
              "fauna silvestre", 
              "animal nativo", 
              "bicho do mato", 
              "animal silvestre", 
              "bicho da mata"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/507/formulario/6a58e780e4b01881f546b6f4",
        // order: 1
          },
          { 
            icon: "mdi:snail", 
            name: "Caramujo", 
            tag: "Zoonoses", 
            desc: "Orientação sobre ocorrências de caramujos.", 
            keywords: [
              "caramujo", 
              "lesma", 
              "molusco", 
              "caramujo africano", 
              "caramujo na casa", 
              "lesma no jardim"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/508/formulario/6a58e833e4b01881f546b6fe",
        // order: 1
          },
          { 
            icon: "healthicons:animal-tick-outline", 
            name: "Carrapato e Pulga", 
            tag: "Zoonoses", 
            desc: "Orientação sobre carrapatos e pulgas.", 
            keywords: [
              "carrapato", 
              "pulga", 
              "piolho de animal", 
              "parasita", 
              "carrapato cachorro", 
              "pulga gato"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/509/formulario/6a58e9fee4b01881f546b71d",
        // order: 1
          },
          { 
            icon: "game-icons:scorpion", 
            name: "Escorpião", 
            tag: "Zoonoses", 
            desc: "Orientação sobre ocorrências de escorpiões.", 
            keywords: [
              "escorpião", 
              "aracnídeo", 
              "picada de escorpião", 
              "escorpião amarelo", 
              "escorpião na casa", 
              "picada escorpião"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/510/formulario/6a58eab7e4b01881f546b72b",
        // order: 1
          },
          { 
            icon: "mdi:bat", 
            name: "Morcego", 
            tag: "Zoonoses", 
            desc: "Orientação sobre ocorrências de morcegos.", 
            keywords: [
              "morcego", 
              "morcego urbano", 
              "raiva", 
              "morcego em casa", 
              "morcego no telhado", 
              "morcego voando"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/511/formulario/6a58ebc0e4b01881f546b750",
        // order: 1
          },
          { 
            icon: "icon-park-outline:pigeon", 
            name: "Pomba", 
            tag: "Zoonoses", 
            desc: "Orientação sobre ocorrências de pombas.", 
            keywords: [
              "pombo", 
              "pombo urbano", 
              "pombo de rua", 
              "praga de pomba", 
              "muitos pombos", 
              "pombo na varanda"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/512/formulario/6a58ec17e4b01881f546b758",
        // order: 1
          },
          { 
            icon: "boxicons:archive-arrow-down", 
            name: "Recolhimento de Morcego", 
            tag: "Zoonoses", 
            desc: "Solicitação de recolhimento de morcego.", 
            keywords: [
              "morcego", 
              "captura de morcego", 
              "remoção de morcego", 
              "morcego preso", 
              "tirar morcego", 
              "morcego preso na casa"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/511/formulario/6a58ebc0e4b01881f546b750",
        // order: 1
          }
        ]
      },
    ]
  },

  // ─── ATENDIMENTO SOCIAL ─────────────────────
  {
    id: "atendimento_social",
    icon: "fa-solid:hands-helping",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Atendimento Social",
    desc: "Apoio a famílias vulneráveis, benefícios sociais e grupos em situação de vulnerabilidade.",
    subcategories: [
      {
        id: "beneficios",
        name: "Benefícios e Programas",
        icon: "mdi:card-account-details-outline",
        desc: "Benefícios e programas sociais.",
        services: [
          { 
            icon: "ph:money", 
            name: "Auxílio Brasil", 
            tag: "Benefício", 
            desc: "Informações e solicitações sobre o Auxílio Brasil.", 
            keywords: [
              "auxílio brasil", 
              "bolsa família", 
              "benefício social", 
              "transferência de renda", 
              "auxílio governo", 
              "dinheiro governo", 
              "ajuda financeira"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/514/formulario/6a57b99de4b01881f546aa55",
        // order: 1
          },
          { 
            icon: "ph:list-checks", 
            name: "Cadastro Único", 
            tag: "Cadastro", 
            desc: "Inscrição e atualização no Cadastro Único.", 
            keywords: [
              "cadúnico", 
              "cadastro único", 
              "inscrição social", 
              "registro governamental", 
              "cadastrar governo", 
              "cadastro social", 
              "fazer cadastro"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/515/formulario/6a551cede4b01881f54687e8",
        // order: 1
          },
          { 
            icon: "ph:house", 
            name: "Casa Própria", 
            tag: "Habitação", 
            desc: "Informações sobre programas de habitação popular.", 
            keywords: [
              "casa própria", 
              "moradia popular", 
              "programa habitacional", 
              "financiamento de casa", 
              "comprar casa", 
              "casa financiada", 
              "minha casa minha vida"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/516/formulario/6a551d9ce4b01881f5468805",
        // order: 1
          },
          { 
            icon: "cil:basket", 
            name: "Cesta Básica", 
            tag: "Benefício", 
            desc: "Solicitação e informações sobre distribuição de cestas básicas.", 
            keywords: [
              "cesta básica", 
              "alimentação", 
              "cesta de alimentos", 
              "distribuição de comida", 
              "comida grátis", 
              "ajuda alimentação", 
              "cesta de alimentos"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/517/formulario/6a551e6de4b01881f5468828",
        // order: 1
          }
        ]
      },
      {
        id: "crianca_adolescente",
        name: "Criança e Adolescente",
        icon: "ph:baby",
        desc: "Atendimento a crianças e adolescentes.",
        services: [
          { 
            icon: "mdi:account-child", 
            name: "Criança e Adolescente", 
            tag: "Criança", 
            desc: "Atendimento a crianças e adolescentes em vulnerabilidade.", 
            keywords: [
              "criança", 
              "adolescente",
              "menor", 
              "infância", 
              "criança precisando ajuda",
              "ajuda criança", 
              "criança em risco"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/518/formulario/6a55219ce4b01881f546889d",
        // order: 1
          },
          { 
            icon: "mdi:shield-alert-outline", 
            name: "Trabalho Infantil", 
            tag: "Criança", 
            desc: "Denúncia de trabalho infantil.", 
            keywords: [
              "trabalho infantil", 
              "menor trabalhando", 
              "criança trabalhando", 
              "exploração infantil", 
              "criança no trabalho", 
              "menor empregado", 
              "criança vendendo"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/519/formulario/6a552337e4b01881f54688de",
        // order: 1
          }
        ]
      },
      {
        id: "idoso",
        name: "Idoso",
        icon: "ph:user",
        desc: "Atendimento e proteção a idosos.",
        services: [
          { 
            icon: "ph:user", 
            name: "Idoso", 
            tag: "Idoso", 
            desc: "Atendimento e proteção a idosos em vulnerabilidade.", 
            keywords: [
              "idoso", 
              "terceira idade", 
              "velho", 
              "pessoa idosa", 
              "velhinho", 
              "ajuda idoso", 
              "idoso precisando ajuda"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/520/formulario/6a552824e4b01881f5468952",
        // order: 1
          }
        ]
      },
      {
        id: "situacao_rua",
        name: "Pessoa em Situação de Rua",
        icon: "material-symbols:shield-outline",
        desc: "Atendimento e encaminhamento de pessoas em situação de rua.",
        services: [
          { 
            icon: "tabler:home-off", 
            name: "Pessoa em Situação de Rua", 
            tag: "Vulnerabilidade", 
            desc: "Atendimento e encaminhamento de pessoas em situação de rua.", 
            keywords: [
              "situação de rua", 
              "morador de rua", 
              "sem teto", 
              "população de rua", 
              "sem casa", 
              "morando na rua", 
              "pessoa sem lar"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/528/formulario/6a552934e4b01881f546897d",
        // order: 1
          }
        ]
      },
      {
        id: "pessoa_deficiencia",
        name: "Pessoa com Deficiência",
        icon: "ph:wheelchair",
        desc: "Atendimento a pessoas com deficiência.",
        services: [
          { 
            icon: "ph:wheelchair", 
            name: "Pessoa com Deficiência", 
            tag: "Deficiência", 
            desc: "Atendimento a pessoas com deficiência.", 
            keywords: [
              "deficiente", 
              "pcd", 
              "pessoa com deficiência", 
              "necessidade especial", 
              "portador de deficiência", 
              "deficiência", 
              "cadeirante"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/529/formulario/6a552a21e4b01881f5468994",
        // order: 1
          }
        ]
      },
      {
        id: "saude_mental",
        name: "Saúde Mental",
        icon: "boxicons:brain",
        desc: "Atendimento e encaminhamento para saúde mental.",
        services: [
          { 
            icon: "boxicons:brain", 
            name: "Saúde Mental", 
            tag: "Saúde Mental", 
            desc: "Atendimento e encaminhamento para saúde mental.", 
            keywords: [
              "saúde mental", 
              "psicológico", 
              "depressão", 
              "ansiedade", 
              "psicólogo", 
              "ajuda psicológica", 
              "problema mental"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/530/formulario/6a552a61e4b01881f546899d",
        // order: 1
          }
        ]
      }
    ]
  },

  // ─── DISCRIMINAÇÃO ──────────────────────────
  {
    id: "discriminacao",
    icon: "fluent:gavel-20-regular",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Discriminação",
    desc: "Denúncia e combate à discriminação.",
    services: [
      { 
        icon: "mdi:hand-front-left-outline", 
        name: "Racismo", 
        tag: "Discriminação", 
        desc: "Denúncia de discriminação racial.", 
        keywords: [
          "racismo",
          "preconceito racial",
          "discriminação racial",
          "xenofobia",
          "preconceito cor",
          "discriminação cor",
          "ofensa racial"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/531/formulario/6a5a1f2fe4b0a15dd79dda9c",
        // order: 1
      },
      { 
        icon: "tabler:rainbow", 
        name: "LGBTQIA+", 
        tag: "Discriminação", 
        desc: "Denúncia de discriminação por orientação sexual ou identidade de gênero.", 
        keywords: [
          "lgbt", 
          "homofobia", 
          "transfobia",
          "discriminação de gênero", 
          "preconceito sexual", 
          "discriminação lgbt", 
          "preconceito gay"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/532/formulario/6a5a2214e4b0a15dd79ddb40",
        // order: 1
      },
      { 
        icon: "mdi:hands-pray", 
        name: "Religiosa", 
        tag: "Discriminação", 
        desc: "Denúncia de discriminação religiosa.", 
        keywords: [
          "discriminação religiosa", 
          "intolerância religiosa", 
          "preconceito de religião", 
          "fanatismo", 
          "preconceito fé", 
          "intolerância fé", 
          "ofensa religiosa"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/534/formulario/6a5a246de4b0a15dd79ddbbb",
        // order: 1
      },
      { 
        icon: "tabler:dots", 
        name: "Outros Casos de Discriminação", 
        tag: "Discriminação", 
        desc: "Outras denúncias de discriminação não especificadas.", 
        keywords: [
          "discriminação", 
          "preconceito", 
          "intolerância", 
          "bullying", 
          "humilhação", 
          "desrespeito", 
          "ofensa"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/535/formulario/6a5a270ce4b0a15dd79ddc2e",
        // order: 1
      }
    ]
  },

  // ─── EDUCAÇÃO ───────────────────────────────
  {
    id: "educacao",
    icon: "tabler:school",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Educação",
    desc: "Escola municipal, escola particular, transporte escolar, manutenção e espaços esportivos.",
    subcategories: [
      {
        id: "escola_particular",
        name: "Escola Particular",
        icon: "tabler:building",
        desc: "Demandas relacionadas às escolas particulares.",
        services: [
          { 
            icon: "mdi:presentation", 
            name: "Metodologia", 
            tag: "Pedagógico", 
            desc: "Reclamações sobre metodologias em escolas particulares.", 
            keywords: [
              "método de ensino", 
              "pedagogia", 
              "forma de ensinar", 
              "didática", 
              "ensino particular", 
              "metodologia escola"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/536/formulario/6a5a3290e4b0a15dd79dde3e",
        // order: 1
          },
          { 
            icon: "tabler:file-certificate", 
            name: "Documentação", 
            tag: "Administrativo", 
            desc: "Solicitações sobre documentação em escolas particulares.", 
            keywords: [
              "documentos", 
              "papéis", 
              "matrícula", 
              "histórico", 
              "transferência", 
              "certificado"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/538/formulario/6a5a3710e4b0a15dd79ddeba",
        // order: 1
          }
        ]
      },
      {
        id: "escola_municipal",
        name: "Escola Municipal",
        icon: "boxicons:school",
        desc: "Demandas relacionadas às escolas municipais.",
        services: [
          { 
            icon: "ph:wheelchair",
            name: "Acessibilidade", 
            tag: "Inclusão", 
            desc: "Solicitações de acessibilidade nas escolas municipais.", 
            keywords: [
              "acesso", 
              "rampa", 
              "adaptado", 
              "inclusão", 
              "cadeira de rodas", 
              "acessível", 
              "banheiro adaptado"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/539/formulario/6a5a3873e4b0a15dd79ddee8",
        // order: 1
          },
          { 
            icon: "tabler:first-aid-kit",
            name: "Acidente com Aluno", 
            tag: "Segurança", 
            desc: "Comunique acidentes envolvendo alunos na escola.", 
            keywords: [
              "acidente", 
              "lesão", 
              "ferimento", 
              "emergência escolar", 
              "aluno machucado", 
              "acidente na escola", 
              "aluno se machucou"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/542/formulario/6a5a3a55e4b0a15dd79ddf21",
        // order: 1
          },
          { 
            icon: "tabler:user-x",
            name: "Falta de Aula ou Professor", 
            tag: "Ensino", 
            desc: "Denuncie ausência de professor ou aulas canceladas sem justificativa.", 
            keywords: [
              "sem professor", 
              "falta de aula", 
              "sala vazia", 
              "professor faltou", 
              "professor não veio", 
              "aula sem professor", 
              "escola fechou"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/540/formulario/6a63bddae4b0a15dd79e4848",
        // order: 1
          },
          { 
            icon: "tabler:apple",
            name: "Merenda", 
            tag: "Alimentação", 
            desc: "Reclamações ou solicitações sobre a merenda escolar.", 
            keywords: [
              "alimentação", 
              "lanche", 
              "comida escolar", 
              "refeição", 
              "merenda escolar", 
              "comida na escola", 
              "lanche da escola"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/544/formulario/6a5a3b54e4b0a15dd79ddf4c",
        // order: 1
          },
          { 
            icon: "tabler:users-group",
            name: "Auxiliar para Aluno com Necessidade Especial", 
            tag: "Inclusão", 
            desc: "Reclamação sobre auxiliar para aluno com necessidade especial.", 
            keywords: [
              "auxiliar", 
              "acompanhante", 
              "monitor", 
              "apoio especial", 
              "ajuda especial", 
              "cuidador", 
              "acompanhante especial"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/565/formulario/6a5a6a01e4b0a15dd79de44c",
        // order: 1
          },
          { 
            icon: "ph:student",
            name: "Vaga Escolar", 
            tag: "Matrícula", 
            desc: "Solicite vaga em escola municipal.", 
            keywords: [
              "matrícula", 
              "vaga", 
              "inscrição", 
              "escola", 
              "entrar na escola", 
              "vaga para estudar", 
              "colocar filho na escola"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/566/formulario/6a5a6b3de4b0a15dd79de497"
          }
        ]
      },
      {
        id: "cieja",
        name: "Educação de Adultos",
        icon: "ph:book-open",
        desc: "Centro Integrado de Educação de Jovens e Adultos.",
        services: [
          { 
            icon: "ph:book-open",
            name: "Educação de Jovens e Adultos (CIEJA)", 
            tag: "CIEJA", 
            desc: "Demandas sobre o Centro Integrado de Educação de Jovens e Adultos.", 
            keywords: [
              "cieja", 
              "educação de jovens", 
              "supletivo", 
              "eja", 
              "escola para adultos", 
              "supletivo para adultos", 
              "terminar estudos"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/571/formulario/6a5a6d1ce4b0a15dd79de4fb"
          }
        ]
      },
      {
        id: "transporte_escolar",
        name: "Transporte Escolar",
        icon: "ph:bus",
        desc: "Demandas relacionadas ao transporte escolar.",
        services: [
          { 
            icon: "ph:wheelchair",
            name: "Acessibilidade", 
            tag: "Inclusão", 
            desc: "Solicite acessibilidade no transporte escolar.", 
            keywords: [
              "acesso", 
              "adaptado", 
              "cadeira de rodas", 
              "inclusão", 
              "ônibus adaptado", 
              "elevador"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/574/formulario/6a5a71e5e4b0a15dd79de55b",
        // order: 1
          },
          { 
            icon: "tabler:clock",
            name: "Atraso", 
            tag: "Transporte", 
            desc: "Reclame de atraso no transporte escolar.", 
            keywords: [
              "atrasado", 
              "demorou", 
              "não chegou", 
              "horário", 
              "ônibus atrasado", 
              "esperando ônibus", 
              "ônibus não chegou"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/575/formulario/6a5a73aae4b0a15dd79de58a",
        // order: 1
          },
          { 
            icon: "tabler:bus-off",
            name: "Falta", 
            tag: "Transporte", 
            desc: "Comunique ausência do transporte escolar.", 
            keywords: [
              "não veio", 
              "faltou", 
              "sem ônibus", 
              "transporte não passou", 
              "ônibus faltou", 
              "sem transporte", 
              "ônibus não apareceu"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/576/formulario/6a5a76f8e4b0a15dd79de5c8"
          }
        ]
      },
      {
        id: "manutencao_escolar",
        name: "Estrutura Escolar",
        icon: "mdi:hammer-wrench",
        desc: "Demandas sobre a estrutura física das escolas.",
        services: [
          { 
            icon: "mdi:grass",
            name: "Corte de Mato - Educação", 
            tag: "Manutenção", 
            desc: "Solicite corte de mato em área escolar.", 
            keywords: [
              "mato alto", 
              "capina", 
              "limpeza",
              "vegetação", 
              "mato na escola", 
              "capinar escola"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/577/formulario/6a5a77f1e4b0a15dd79de5dc",
          },
          { 
            icon: "fluent:paint-brush-12-regular",
            name: "Rachaduras e Pinturas", 
            tag: "Manutenção", 
            desc: "Solicite reparos em rachaduras ou pintura da escola.", 
            keywords: [
              "rachadura", 
              "pintura", 
              "parede", 
              "reparo", 
              "parede quebrada", 
              "pintura escola", 
              "conserto parede"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/578/formulario/6a5a78fbe4b0a15dd79de5ec"
          },
          { 
            icon: "tabler:ball-football",
            name: "Campo", 
            tag: "Esporte", 
            desc: "Solicitações sobre campos de futebol em escolas.", 
            keywords: [
              "campo de futebol", 
              "quadra", 
              "esporte", 
              "ginásio", 
              "campo escola", 
              "quadra esportiva"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/602/formulario/6a5a79f6e4b0a15dd79de5ff",
        // order: 1
          },
          { 
            icon: "tabler:coin-off",
            name: "Cobrança Indevida", 
            tag: "Fiscalização", 
            desc: "Denúncia de cobrança indevida em espaços esportivos.", 
            keywords: [
              "cobrança", 
              "taxa", 
              "pagamento indevido", 
              "extorsão", 
              "cobrar indevido", 
              "taxa abusiva"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/604/formulario/6a5a7b24e4b0a15dd79de617",
        // order: 1
          },
          { 
            icon: "mdi:stadium",
            name: "Ginásio ou Quadra", 
            tag: "Esporte", 
            desc: "Solicitações sobre ginásios ou quadras nas escolas.", 
            keywords: [
              "ginásio", 
              "quadra", 
              "esporte", 
              "poliesportiva", 
              "quadra coberta", 
              "ginásio escola"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/605/formulario/6a5a7c0ce4b0a15dd79de624"
          }
        ]
      },
    ]
  },

  // ─── ESPORTE E LAZER ────────────────────────
  {
    id: "esporte_lazer",
    icon: "tabler:trophy",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Esporte e Lazer",
    desc: "Equipamentos esportivos, programas de atividade física e eventos.",
    subcategories: [
      {
        id: "equipamentos_esportivos",
        name: "Equipamentos Esportivos",
        icon: "material-symbols-light:stadium-outline",
        desc: "Quadras, campos e equipamentos de esporte.",
        services: [
          { 
            icon: "tabler:ball-football",
            name: "Campo de Futebol", 
            tag: "Esporte", 
            desc: "Solicitações sobre campos de futebol municipais.", 
            keywords: [
              "campo de futebol", 
              "futebol", 
              "gramado", 
              "campo", 
              "esporte", 
              "campo municipal"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/579/formulario/6a5e3797e4b0a15dd79df787",
        // order: 1
          },
          { 
            icon: "tabler:ball-basketball",
            name: "Quadra Esportiva", 
            tag: "Esporte", 
            desc: "Solicitações sobre quadras poliesportivas.", 
            keywords: [
              "quadra", 
              "esporte", 
              "poliesportiva", 
              "basquete", 
              "vôlei", 
              "quadra coberta"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/580/formulario/6a5e4f0ee4b0a15dd79dfa47",
        // order: 1
          },
          { 
            icon: "mdi:skateboard",
            name: "Pista de Skate", 
            tag: "Esporte", 
            desc: "Solicitações sobre pistas de skate.", 
            keywords: [
              "skate", 
              "pista", 
              "skate park", 
              "rampa", 
              "esporte radical"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/581/formulario/6a5e5e01e4b0a15dd79dfbf4",
        // order: 1
          },
        ]
      },
      {
        id: "programas_esporte",
        name: "Programas de Esporte",
        icon: "mdi:run-fast",
        desc: "Programas municipais de esporte e atividade física.",
        services: [
          { 
            icon: "famicons:barbell",
            name: "Academia ao Ar Livre", 
            tag: "Programa", 
            desc: "Solicitações sobre academias ao ar livre.", 
            keywords: [
              "academia", 
              "ginástica", 
              "aparelho", 
              "exercício", 
              "academia ao ar livre", 
              "ginástica ao ar livre"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/583/formulario/6a5e631ee4b0a15dd79dfc89",
        // order: 1
          },
          { 
            icon: "tabler:heart-rate-monitor",
            name: "Atividade Física", 
            tag: "Programa", 
            desc: "Informações sobre programas de atividade física.", 
            keywords: [
              "atividade física", 
              "exercício", 
              "ginástica", 
              "esporte", 
              "programa de saúde", 
              "caminhada"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/584/formulario/6a5e65fce4b0a15dd79dfccf"
          }
        ]
      }
    ]
  },

  // ─── EVENTOS ────────────────────────────────
  {
    id: "eventos",
    icon: "ph:calendar",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Eventos",
    desc: "Eventos culturais, esportivos e comunitários.",
    services: [
      {
        icon: "ph:calendar-check",
        name: "Eventos",
        tag: "Pessoa Jurídica",
        desc: "Solicitações sobre eventos culturais, esportivos e comunitários. Disponível apenas para Pessoa Jurídica.",
        keywords: [
          "evento",
          "show",
          "festival",
          "teatro",
          "exposição",
          "corrida",
          "festa",
          "evento cultural",
          "evento esportivo",
          "evento comunitário",
          "pessoa jurídica",
          "cnpj"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/396/formulario/663916dae4b0c49ff93b95a0"
      },
      {
        icon: "ph:storefront",
        name: "Feira de Rua",
        tag: "Comércio",
        desc: "Solicitações sobre feiras e eventos comerciais.",
        keywords: [
          "feira",
          "evento",
          "comércio",
          "feira de rua",
          "evento comercial"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/494/formulario/6a552dd8e4b01881f5468a16"
      }
    ]
  },

  // ─── FINANÇAS PÚBLICAS ──────────────────────
  {
    id: "financas",
    icon: "mdi:bank",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Tributos e Serviços Digitais",
    desc: "Impostos, taxas e serviços online da Prefeitura.",
    services: [
      { 
        icon: "tabler:receipt-tax",
        name: "Impostos e Taxas", 
        tag: "Tributário", 
        desc: "Informações sobre impostos e taxas municipais.", 
        keywords: [
          "imposto", 
          "taxa", 
          "tributo", 
          "iptu", 
          "iss"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/585/formulario/6a5e6923e4b0a15dd79dfd1b",
      },
      { 
        icon: "material-symbols-light:devices-outline",
        name: "Serviços Digitais", 
        tag: "Digital", 
        desc: "Acesso e suporte aos serviços digitais da Prefeitura.", 
        keywords: [
          "internet", 
          "site", 
          "portal", 
          "digital", 
          "online"
        ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/586/formulario/6a5e6b07e4b0a15dd79dfd63"
      }
    ]
  },

  // ─── FISCALIZAÇÃO ───────────────────────────
  {
    id: "fiscalizacao",
    icon: "bi:clipboard2-check",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Fiscalização",
    desc: "Fiscalização de locais públicos, imóveis particulares e estabelecimentos.",
    subcategories: [
      {
        id: "barulho_poluicao_sonora",
        name: "Barulho e Poluição Sonora",
        icon: "ph:speaker-high",
        desc: "Problemas relacionados a ruído e perturbação do sossego.",
        services: [
          { 
            icon: "ph:speaker-high",
            name: "Barulho", 
            tag: "Regras e Normas", 
            desc: "Denúncia de perturbação de sossego.", 
            keywords: [
              "barulho", 
              "som alto", 
              "ruído", 
              "perturbação", 
              "barulho alto", 
              "som perturbando", 
              "muito barulho", 
              "barulho na praça", 
              "barulho de vizinho", 
              "vizinho barulhento"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/533/formulario/6a5e6ef1e4b0a15dd79dfdcd",
        // order: 1
          }
        ]
      },
      {
        id: "terrenos_propriedades",
        name: "Terrenos e Propriedades",
        icon: "mdi:home-search",
        desc: "Fiscalizações e ocorrências em terrenos e propriedades particulares.",
        services: [
          { 
            icon: "mdi:grass",
            name: "Fiscalização de Corte de Mato em Terreno Particular", 
            tag: "Fiscalização", 
            desc: "Solicite fiscalização de corte de mato em terreno particular.", 
            keywords: [
              "corte de mato",
              "terreno particular",
              "mato alto",
              "capina",
              "fiscalização de terreno",
              "terreno com mato"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/701/formulario/6a70a6bce4b0a15dd79eb78d",
          }
        ]
      },
      {
        id: "comercio_licencas",
        name: "Comércio e Licenças",
        icon: "tabler:file-certificate",
        desc: "Licenças, alvarás e cadastro para funcionamento de comércio.",
        services: [
          { 
            icon: "material-symbols:store-outline-rounded",
            name: "Licença de Comércio Fixo", 
            tag: "Licença", 
            desc: "Fiscalização de alvará de funcionamento de estabelecimento fixo.", 
            keywords: [
              "alvará", 
              "licença", 
              "autorização", 
              "funcionamento", 
              "alvará comércio", 
              "licença funcionamento", 
              "abrir comércio", 
              "licença loja"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/537/formulario/6a5e7501e4b0a15dd79dfe9a",
        // order: 1
          },
          { 
            icon: "boxicons:store-alt",
            name: "Licença de Comércio Ambulante", 
            tag: "Licença", 
            desc: "Fiscalização de alvará para comércio ambulante.", 
            keywords: [
              "alvará", 
              "ambulante", 
              "comércio ambulante", 
              "vendedor", 
              "vendedor ambulante", 
              "comércio de rua", 
              "vendedor na rua", 
              "caminhete"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/541/formulario/6a5e7847e4b0a15dd79dfefd",
        // order: 1
          },
          { 
            icon: "ph:identification-card",
            name: "Inscrição Municipal", 
            tag: "Cadastro", 
            desc: "Fiscalização de inscrição municipal.", 
            keywords: [
              "inscrição", 
              "cadastro", 
              "registro", 
              "municipal", 
              "cadastrar empresa", 
              "inscrição prefeitura", 
              "registro municipal"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/634/formulario/6a5f6dcee4b0a15dd79e06ed"
          }
        ]
      },
      {
        id: "obras_construcoes",
        name: "Obras e Construções",
        icon: "lucide:hard-hat",
        desc: "Obras irregulares, descarte de entulho e loteamentos.",
        services: [
          { 
            icon: "ph:hammer",
            name: "Obra em Casa Irregular", 
            tag: "Regras e Normas", 
            desc: "Denúncia de obra irregular em imóvel particular.", 
            keywords: [
              "obra", 
              "construção", 
              "reforma", 
              "irregular", 
              "obra irregular", 
              "construção ilegal", 
              "reforma sem autorização", 
              "obra sem licença"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/545/formulario/6a5f70d0e4b0a15dd79e0763",
        // order: 1
          },
          { 
            icon: "ph:trash",
            name: "Denunciar Descarte Irregular de Entulho", 
            tag: "Regras e Normas", 
            desc: "Denúncia de descarte irregular de entulho em imóvel particular.", 
            keywords: [
              "entulho", 
              "resto de obra", 
              "construção", 
              "material de construção", 
              "lixo de obra", 
              "resto construção", 
              "entulho na casa", 
              "entulho no quintal"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/543/formulario/6a5f73a5e4b0a15dd79e07d5",
        // order: 1
          },
          { 
            icon: "ph:crane",
            name: "Obra Pública Irregular", 
            tag: "Regras e Normas", 
            desc: "Denúncia de obra pública irregular.", 
            keywords: [
              "obra", 
              "construção", 
              "reforma pública", 
              "irregularidade", 
              "obra irregular", 
              "construção pública", 
              "obra na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/546/formulario/6a5f74f4e4b0a15dd79e080e",
        // order: 1
          },
          { 
            icon: "fa7-solid:map-location-dot",
            name: "Loteamento Irregular", 
            tag: "Regras e Normas", 
            desc: "Denúncia de loteamento executado de forma irregular.", 
            keywords: [
              "loteamento", 
              "terreno", 
              "irregular", 
              "divisão", 
              "loteamento ilegal", 
              "terreno irregular", 
              "divisão irregular", 
              "lotear terreno"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/547/formulario/6a5f7642e4b0a15dd79e083b"
          }
        ]
      },
      {
        id: "saude_higiene",
        name: "Saúde e Higiene",
        icon: "ri:heart-pulse-line",
        desc: "Problemas sanitários, vigilância e saúde do trabalhador.",
        services: [
          { 
            icon: "akar-icons:trash-can",
            name: "Casa com Muito Lixo", 
            tag: "Saúde", 
            desc: "Denúncia de acumulador compulsivo com risco à saúde.", 
            keywords: [
              "acumulador", 
              "acúmulo", 
              "lixo acumulado", 
              "hoarding", 
              "muita coisa", 
              "acumula lixo", 
              "casa cheia", 
              "casa com entulho"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/637/formulario/6a5f77ade4b0a15dd79e086b",
        // order: 1
          },
          { 
            icon: "fluent-emoji-high-contrast:mosquito",
            name: "Foco de Dengue", 
            tag: "Saúde", 
            desc: "Denúncia de foco de dengue em imóvel particular.", 
            keywords: [
              "dengue", 
              "mosquito", 
              "aedes", 
              "criadouro", 
              "mosquito da dengue", 
              "foco de mosquito", 
              "água parada", 
              "criadouro mosquito"
              ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/639/formulario/6a5f789ae4b0a15dd79e0896",
        // order: 1
          },
          { 
            icon: "mdi:clipboard-check-outline",
            name: "Vigilância Sanitária", 
            tag: "Saúde", 
            desc: "Fiscalização sanitária de estabelecimentos.", 
            keywords: [
              "vigilância", 
              "sanitário", 
              "fiscalização", 
              "higiene", 
              "fiscalização saúde", 
              "anvisa", 
              "vigilância sanitária", 
              "estabelecimento sujo"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/640/formulario/6a5f7b87e4b0a15dd79e0914",
        // order: 1
          },
          { 
            icon: "la:smoking-ban",
            name: "Fumo em Local Proibido", 
            tag: "Saúde", 
            desc: "Denúncia de uso irregular de cigarro em locais proibidos.", 
            keywords: [
              "cigarro", 
              "fumo", 
              "fumante proibido", 
              "tabagismo", 
              "fumando onde não pode", 
              "cigarro proibido", 
              "fumo em lugar proibido", 
              "fumando em local fechado"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/548/formulario/6a5f7cd5e4b0a15dd79e0937",
        // order: 1
          },
          { 
            icon: "solar:wind-linear",
            name: "Mau Cheiro Vindo de Casa", 
            tag: "Saúde", 
            desc: "Denúncia de odor forte proveniente de imóvel particular.", 
            keywords: [
              "mau cheiro", 
              "odor", 
              "fedorento", 
              "cheiro forte", 
              "cheiro ruim", 
              "fedendo", 
              "mau odor", 
              "cheiro de esgoto"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/641/formulario/6a5f7e70e4b0a15dd79e0965",
        // order: 1
          },
          { 
            icon: "si:briefcase-medical-line",
            name: "Saúde do Trabalhador (CEREST)", 
            tag: "Saúde", 
            desc: "Demandas sobre o Centro de Referência em Saúde do Trabalhador.", 
            keywords: [
              "cerest", 
              "saúde do trabalhador", 
              "dst", 
              "saúde ocupacional", 
              "doença trabalho", 
              "acidente trabalho"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/642/formulario/6a6b6de9e4b0a15dd79e8ada"
          }
        ]
      },
      {
        id: "meio_ambiente_poluicao",
        name: "Meio Ambiente e Poluição",
        icon: "hugeicons:factory-01",
        desc: "Poluição visual, emissões, fumaça e problemas ambientais.",
        services: [
          { 
            icon: "material-symbols-light:newspaper",
            name: "Propaganda Irregular", 
            tag: "Meio Ambiente", 
            desc: "Denúncia de propaganda em local não permitido.", 
            keywords: [
              "propaganda", 
              "outdoor", 
              "publicidade", 
              "poluição visual", 
              "placa irregular", 
              "outdoor irregular", 
              "propaganda no poste"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/549/formulario/6a5f8067e4b0a15dd79e09a3",
        // order: 1
          },
          { 
            icon: "mdi:smoke",
            name: "Fumaça Saindo de Casa", 
            tag: "Meio Ambiente", 
            desc: "Denúncia de emissão de fumaça por imóvel ou estabelecimento.", 
            keywords: [
              "fumaça", 
              "fumaça preta", 
              "emissão", 
              "poluição", 
              "fumaça de chaminé", 
              "solta fumaça", 
              "fumaça no ar"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/550/formulario/6a5f8149e4b0a15dd79e09c4",
        // order: 1
          },
          { 
            icon: "ph:biohazard",
            name: "Produtos Químicos", 
            tag: "Meio Ambiente", 
            desc: "Denúncia de descarte ou uso irregular de produtos químicos.", 
            keywords: [
              "químico", 
              "tóxico", 
              "veneno", 
              "descarte", 
              "produto químico", 
              "veneno jogado", 
              "descarte químico"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/551/formulario/6a5f82fde4b0a15dd79e09f2",
        // order: 1
          },
          { 
            icon: "ph:wind",
            name: "Poeira de Obra", 
            tag: "Meio Ambiente", 
            desc: "Denúncia de excesso de poeira proveniente de imóvel ou obra.", 
            keywords: [
              "poeira", 
              "pó", 
              "sujeira", 
              "terra", 
              "poeira de obra", 
              "muita poeira", 
              "poeira na rua"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/552/formulario/6a5f847fe4b0a15dd79e0a13",
        // order: 1
          },
          { 
            icon: "iconoir:industry",
            name: "Chaminé Irregular", 
            tag: "Meio Ambiente", 
            desc: "Denúncia de chaminé em situação irregular.", 
            keywords: [
              "chaminé", 
              "fumaça", 
              "fumaça preta", 
              "poluição", 
              "chaminé soltando fumaça", 
              "fumaça de chaminé", 
              "chaminé sem licença"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/553/formulario/6a5f8501e4b0a15dd79e0a21",
        // order: 1
          },
          { 
            icon: "ph:lightning",
            name: "Fios Solto no Poste", 
            tag: "Meio Ambiente", 
            desc: "Denúncia de fios soltos ou irregulares em postes.", 
            keywords: [
              "fios", 
              "cabos", 
              "poste", 
              "fios soltos", 
              "fio solto", 
              "cabo solto", 
              "fio desencapado"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/554/formulario/6a5f8563e4b0a15dd79e0a2b"
          }
        ]
      },
      {
        id: "imoveis_abandonados_irregulares",
        name: "Imóveis Abandonados e Irregulares",
        icon: "bi:house-lock",
        desc: "Imóveis abandonados, ferro velho e veículos abandonados.",
        services: [
          { 
            icon: "ph:house-line",
            name: "Casa Abandonada", 
            tag: "Regras e Normas", 
            desc: "Denúncia de imóvel abandonado em situação de risco.", 
            keywords: [
              "casa abandonada", 
              "imóvel vazio", 
              "casa vazia", 
              "abandono", 
              "casa fechada", 
              "imóvel abandonado", 
              "casa sem morador", 
              "casa fantasma"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/555/formulario/6a5f86f7e4b0a15dd79e0a77",
        // order: 1
          },
          { 
            icon: "material-symbols:delete-sweep-outline",
            name: "Ferro Velho em Casa", 
            tag: "Regras e Normas", 
            desc: "Denúncia de ferro velho ou material reciclado irregular.", 
            keywords: [
              "ferro velho", 
              "sucata", 
              "material reciclado", 
              "ferro", 
              "sucata ferro", 
              "ferro velho irregular", 
              "guardar ferro velho"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/556/formulario/6a5f884ae4b0a15dd79e0ab6",
            // order: 1
          },
          { 
            icon: "hugeicons:car-alert",
            name: "Carro Abandonado na Rua", 
            tag: "Regras e Normas", 
            desc: "Denúncia de veículo abandonado em via pública.", 
            keywords: [
              "carro abandonado", 
              "veículo velho", 
              "carro ferro", 
              "sucata", 
              "carro quebrado", 
              "veículo abandonado", 
              "carro velho na rua", 
              "carro sem dono"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/557/formulario/6a5f896fe4b0a15dd79e0b0a"
          }
        ]
      },
      {
        id: "areas_publicas",
        name: "Áreas Públicas",
        icon: "ph:map-pin",
        desc: "Problemas em calçadas, ruas, áreas verdes e árvores públicas.",
        services: [
          { 
            icon: "tabler:barrier-block",
            name: "Calçada Bloqueada", 
            tag: "Regras e Normas", 
            desc: "Denúncia de calçada obstruída por objetos ou obras.", 
            keywords: [
              "calçada bloqueada", 
              "obstrução", 
              "impedimento", 
              "bloqueio", 
              "calçada impedida", 
              "não consigo passar", 
              "bloqueio calçada", 
              "calçada com obstáculo"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/558/formulario/6a5f8a0ce4b0a15dd79e0b40",
        // order: 1
          },
          { 
            icon: "proicons:container",
            name: "Caçamba na Rua", 
            tag: "Regras e Normas", 
            desc: "Denúncia de caçamba posicionada irregular em via pública.", 
            keywords: [
              "caçamba", 
              "container", 
              "entulho na rua", 
              "caçamba irregular", 
              "container irregular", 
              "caçamba no meio da rua", 
              "caçamba atrapalhando"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/559/formulario/6a5f8a84e4b0a15dd79e0b63",
        // order: 1
          },
          { 
            icon: "carbon:tree-fall-risk",
            name: "Invasão de Área Verde", 
            tag: "Meio Ambiente", 
            desc: "Denúncia de invasão ou ocupação irregular de área verde pública.", 
            keywords: [
              "invasão", 
              "área verde", 
              "parque", 
              "ocupação irregular", 
              "invadir parque", 
              "ocupação ilegal", 
              "tomou área verde", 
              "invasão praça"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/560/formulario/6a5f8aebe4b0a15dd79e0b84",
        // order: 1
          },
          { 
            icon: "mdi:axe",
            name: "Árvore Cortada Ilegalmente", 
            tag: "Meio Ambiente", 
            desc: "Denúncia de poda ou corte irregular de árvore.", 
            keywords: [
              "corte de árvore", 
              "poda irregular", 
              "árvore cortada", 
              "derrubada", 
              "cortaram árvore", 
              "árvore derrubada", 
              "poda sem autorização", 
              "árvore cortada sem permissão"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/558/formulario/6a5f8a0ce4b0a15dd79e0b40"
          }
        ]
      },
      {
        id: "venda_produtos_proibidos",
        name: "Venda de Produtos Proibidos",
        icon: "ion:ban-outline",
        desc: "Denúncia de venda de produtos proibidos por lei.",
        services: [
          { 
            icon: "guidance:no-alcohol",
            name: "Venda de Bebida para Menor", 
            tag: "Regras e Normas", 
            desc: "Denúncia de venda de bebida alcoólica para menor.", 
            keywords: [
              "bebida", 
              "menor", 
              "álcool", 
              "venda proibida", 
              "vender para menor", 
              "bebida para criança", 
              "álcool menor", 
              "vender cerveja menor"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/562/formulario/6a5f8be3e4b0a15dd79e0bb6",
        // order: 1
          },
          { 
            icon: "fluent-emoji-high-contrast:kite",
            name: "Venda de Cerol", 
            tag: "Segurança", 
            desc: "Denúncia de venda de cerol ou linha com cerol.", 
            keywords: [
              "cerol", 
              "linha cortante", 
              "pipa", 
              "perigoso", 
              "linha com cerol", 
              "cerol para pipa", 
              "vender cerol"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/563/formulario/6a5f8c41e4b0a15dd79e0bc5"
          }
        ]
      },
      {
        id: "orientacao",
        name: "Orientação",
        icon: "ph:info",
        desc: "Orientações e informações sobre fiscalização.",
        services: [
          { 
            icon: "tabler:file-info",
            name: "Orientação sobre Fiscalização", 
            tag: "Orientação", 
            desc: "Solicitação de orientação sobre fiscalização.", 
            keywords: [
              "orientação", 
              "dúvida", 
              "informação", 
              "ajuda",
              "tirar dúvida", 
              "perguntar fiscalização", 
              "informação fiscalização"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/564/formulario/6a5f8cb5e4b0a15dd79e0bca"
          }
        ]
      }
    ]
  },

  // ─── TRÂNSITO ─────────────────────────────────
  {
    id: "transito",
    icon: "material-symbols:traffic-outline-sharp",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Trânsito",
    desc: "Sinalização, semáforos, radares, infraestrutura viária e fiscalização de trânsito.",
    subcategories: [
      {
        id: "transito_sinalizacao_horizontal",
        name: "Faixas e Pintura no Chão",
        icon: "tabler:road",
        desc: "Faixas, escritas, símbolos e áreas especiais na pista.",
        services: [
          { 
            icon: "lucide:motorbike",
            name: "Área para Moto", 
            tag: "Sinalização", 
            desc: "Demandas sobre áreas de espera de motos na pista.", 
            keywords: [
              "motobox", 
              "área de moto", 
              "espera de moto", 
              "moto", 
              "área moto", 
              "moto no semáforo"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/608/formulario/6a5fa1f6e4b0a15dd79e0e43",
        // order: 1
          },
          { 
            icon: "temaki:crossing-markings-zebra-bicolour",
            name: "Faixa de Pedestre", 
            tag: "Sinalização", 
            desc: "Solicite implantação ou recuperação de faixa de pedestre.", 
            keywords: [
              "faixa", 
              "travessia", 
              "passarela", 
              "atravessar", 
              "faixa de pedestre", 
              "atravessar rua", 
              "cruzamento", 
              "faixa de travessia"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/610/formulario/6a5fab1ce4b0a15dd79e0f29",
        // order: 1
          },
          { 
            icon: "tabler:line-dashed",
            name: "Faixas na Pista", 
            tag: "Sinalização", 
            desc: "Problemas com faixas de sinalização horizontal.", 
            keywords: [
              "faixa", 
              "pintura", 
              "sinalização", 
              "marcação", 
              "faixa apagada", 
              "pintura rua", 
              "sinalização no chão", 
              "faixa desgastada"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/611/formulario/6a5faba6e4b0a15dd79e0f3b",
        // order: 1
          },
          { 
            icon: "ic:baseline-abc",
            name: "Escrita na Pista", 
            tag: "Sinalização", 
            desc: "Problemas com legendas pintadas na pista.", 
            keywords: [
              "legenda", 
              "texto", 
              "escrita", 
              "pintura", 
              "escrita no chão", 
              "texto na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/612/formulario/6a5facd2e4b0a15dd79e0f58",
        // order: 1
          },
          { 
            icon: "tabler:icons",
            name: "Símbolos na Pista", 
            tag: "Sinalização", 
            desc: "Problemas com pictogramas na via.", 
            keywords: [
              "pictograma", 
              "símbolo", 
              "desenho", 
              "figura", 
              "desenho no chão", 
              "símbolo na pista"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/617/formulario/6a5fad77e4b0a15dd79e0f78",
        // order: 1
          },
          { 
            icon: "bi:arrows-move",
            name: "Setas na Pista", 
            tag: "Sinalização", 
            desc: "Problemas com setas de sinalização horizontal.", 
            keywords: [
              "seta", 
              "direção", 
              "pintura", 
              "sinalização", 
              "seta no chão", 
              "seta na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/619/formulario/6a5fae93e4b0a15dd79e0fb3",
        // order: 1
          }
        ]
      },
      {
        id: "transito_estacionamento",
        name: "Estacionamento",
        icon: "iconoir:parking",
        desc: "Vagas de estacionamento e zona azul.",
        services: [
          { 
            icon: "tabler:border-outer",
            name: "Vagas Pintadas", 
            tag: "Sinalização", 
            desc: "Demandas sobre vagas de estacionamento na pista.", 
            keywords: [
              "vaga", 
              "estacionamento", 
              "local", 
              "parar", 
              "vaga de carro", 
              "estacionar", 
              "local para estacionar", 
              "vaga pintada"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/643/formulario/6a5fb0c9e4b0a15dd79e101c"
          },
          { 
            icon: "mdi:car-clock",
            name: "Zona Azul", 
            tag: "Estacionamento", 
            desc: "Demandas sobre vagas regulamentadas pela Zona Azul.", 
            keywords: [
              "zona azul", 
              "estacionamento pago", 
              "vaga azul", 
              "cartão", 
              "pagar estacionamento", 
              "vaga com tempo", 
              "estacionar com cartão"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/644/formulario/6a5fb421e4b0a15dd79e10ac"
          }
        ]
      },
      {
        id: "transito_sinalizacao_vertical",
        name: "Placas e Sinalização",
        icon: "tabler:road-sign",
        desc: "Placas e postes de sinalização.",
        services: [
          { 
            icon: "at-icons:stop-sign",
            name: "Placa de Trânsito", 
            tag: "Sinalização", 
            desc: "Solicite instalação, manutenção ou troca de placas.", 
            keywords: [
              "placa", 
              "sinalização", 
              "poste", 
              "transito", 
              "placa de trânsito", 
              "sinal de trânsito", 
              "placa de rua", 
              "placa de pare"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/645/formulario/6a5fb541e4b0a15dd79e10de",
          },
          { 
            icon: "material-symbols-light:pin-outline-sharp",
            name: "Poste de Placa", 
            tag: "Sinalização", 
            desc: "Problemas com postes de sinalização vertical.", 
            keywords: [
              "poste", 
              "sinalização", 
              "placa", 
              "suporte", 
              "poste de placa", 
              "suporte de sinalização", 
              "poste torto"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/649/formulario/6a5fb5f1e4b0a15dd79e1103"
          }
        ]
      },
      {
        id: "transito_semaforos_radares",
          name: "Semáforos e Radares",
          icon: "la:traffic-light",
          desc: "Semáforos, radares, lombadas e redutores de velocidade.",
        services: [
          { 
            icon: "tabler:traffic-lights-off",
            name: "Semáforo Quebrado", 
            tag: "CET", 
            desc: "Denúncia de semáforo defeituoso ou solicitação de novo semáforo.", 
            keywords: [
              "semáforo", 
              "sinal", 
              "luz", 
              "trânsito", 
              "sinal de trânsito", 
              "farol", 
              "semáforo quebrado", 
              "sinal não funciona"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/656/formulario/6a5fb66ae4b0a15dd79e1116",
        // order: 1
          },
          { 
            icon: "ph:gauge",
            name: "Radar de Velocidade", 
            tag: "CET", 
            desc: "Solicitação ou problemas relacionados a radares de velocidade.", 
            keywords: [
              "radar", 
              "multa", 
              "velocidade", 
              "fiscalização", 
              "radar de velocidade", 
              "multa por radar", 
              "medidor de velocidade", 
              "radar fixo"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/662/formulario/6a5fb798e4b0a15dd79e1153",
        // order: 1
          },
          { 
            icon: "mdi:sine-wave",
            name: "Lombada ou Quebra-Mola", 
            tag: "CET", 
            desc: "Solicite implantação ou manutenção de lombada.", 
            keywords: [
              "lombada", 
              "quebra mola", 
              "redutor", 
              "velocidade", 
              "lombada na rua", 
              "redutor de velocidade", 
              "quebra-mola", 
              "lombada quebrada",
              "segurança",
              "diminuir velocidade",
              "redutor de velocidade rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/663/formulario/6a5fb836e4b0a15dd79e1167",
        // order: 1
          },
        ]
      },
      {
        id: "transito_ciclovias_bicicletas",
        name: "Ciclovias e Bicicletas",
        icon: "ph:bicycle",
        desc: "Ciclovias, ciclofaixas e paraciclos.",
        services: [
          { 
            icon: "mdi:bike-fast",
            name: "Ciclovia e Ciclofaixa", 
            tag: "Mobilidade Ativa", 
            desc: "Solicitação ou problemas sobre infraestrutura cicloviária.", 
            keywords: [
              "ciclovia", 
              "ciclofaixa", 
              "bicicleta", 
              "bike", 
              "pista de bike", 
              "caminho de bicicleta", 
              "via para bike"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/665/formulario/6a5fbaa9e4b0a15dd79e11b1",
        // order: 1
          },
          { 
            icon: "material-symbols:lock",
            name: "Paraciclo", 
            tag: "Mobilidade Ativa", 
            desc: "Solicite implantação ou manutenção de paraciclos.", 
            keywords: [
              "paraciclo", 
              "bicicletário", 
              "estacionar bike", 
              "bike", 
              "estacionar bicicleta", 
              "parar bicicleta", 
              "bicicletário na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/667/formulario/6a5fbbb1e4b0a15dd79e11d4",
        // order: 1
          }
        ]
      },
      {
        id: "transito_alteracoes_rua",
        name: "Alterações de Rua",
        icon: "tabler:git-fork",
        desc: "Alterações e remodelações do sistema viário.",
        services: [
          { 
            icon: "tabler:git-fork",
            name: "Alteração de Rua", 
            tag: "Viário", 
            desc: "Solicitações de remodelação do sistema viário.", 
            keywords: [
              "remodelação", 
              "via", 
              "rua", 
              "alteração", 
              "mudar rua", 
              "alterar via", 
              "projeto viário"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/669/formulario/6a5fbcbbe4b0a15dd79e11f7"
          }
        ]
      },
      {
        id: "transito_fiscalizacao",
        name: "Multas e Fiscalização",
        icon: "tabler:gavel",
        desc: "Multas e fiscalização de trânsito.",
        services: [
          { 
            icon: "tabler:file-text",
            name: "Multa de Trânsito", 
            tag: "Fiscalização", 
            desc: "Consulta, recurso e informações sobre multas de trânsito.", 
            keywords: [
              "multa", 
              "infração", 
              "pontos", 
              "cnh", 
              "multa de trânsito", 
              "pontos na carteira", 
              "recorrer multa", 
              "pagar multa"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/671/formulario/6a5fbeefe4b0a15dd79e123c",
        // order: 1
          },
          { 
            icon: "tabler:eye",
            name: "Solicitação de Fiscalização", 
            tag: "Fiscalização", 
            desc: "Demandas gerais sobre fiscalização de trânsito.", 
            keywords: [
              "fiscalização", 
              "multa", 
              "trânsito", 
              "polícia", 
              "fiscal de trânsito", 
              "guarda municipal", 
              "blitz trânsito"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/676/formulario/6a5fc01de4b0a15dd79e1256",
          }
        ]
      }
    ]
  },

  // ─── TRANSPORTE PÚBLICO ───────────────────────
  {
    id: "transporte_publico",
    icon: "ph:bus",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Transporte Público",
    desc: "Ônibus, terminais, rodoviária, pontos e táxis.",
    subcategories: [
      {
        id: "transporte_onibus",
        name: "Ônibus",
        icon: "mdi:bus-side",
        desc: "Empresa, manutenção, horários e motoristas.",
        services: [
          { 
            icon: "mdi:office-building-cog-outline",
            name: "Empresa de Ônibus", 
            tag: "Transporte", 
            desc: "Demandas sobre empresas de transporte público.", 
            keywords: [
              "empresa",
              "concessionária",
              "transporte",
              "ônibus",
              "empresa de ônibus",
              "concessionária de transporte",
              "empresa de transporte",
              "problema ônibus",
              "ônibus não funciona",
              "ônibus com problema"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/591/formulario/6a5fc331e4b0a15dd79e12ac",
        // order: 1
          },
          { 
            icon: "mdi:bus-wrench",
            name: "Ônibus Quebrado", 
            tag: "Transporte", 
            desc: "Reclamações sobre manutenção de ônibus municipais.", 
            keywords: [
              "ônibus",
              "manutenção",
              "veículo",
              "conserto",
              "ônibus quebrado",
              "ônibus velho",
              "ônibus ruim",
              "ônibus estragado"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/592/formulario/6a5fc40ae4b0a15dd79e12c6",
        // order: 1
          },
          { 
            icon: "mdi:bus-clock",
            name: "Horário do Ônibus Mudou", 
            tag: "Transporte", 
            desc: "Solicitação ou reclamação sobre alteração de horário de linha.", 
            keywords: [
              "linha",
              "horário",
              "itinerário",
              "mudança",
              "horário do ônibus",
              "mudou horário",
              "linha mudou",
              "ônibus atrasou"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/593/formulario/6a5fc9b4e4b0a15dd79e133a",
        // order: 1
          },
          { 
            icon: "mdi:account-cog-outline",
            name: "Motorista de Ônibus", 
            tag: "Transporte", 
            desc: "Reclamações ou elogios sobre motoristas do transporte público.", 
            keywords: [
              "motorista",
              "cobrador",
              "condutor",
              "atendimento",
              "motorista de ônibus",
              "cobrador de ônibus",
              "motorista rude",
              "reclamação"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/595/formulario/6a5fcacee4b0a15dd79e134b"
          }
        ]
      },
      {
        id: "transporte_terminais_rodoviaria",
        name: "Terminais e Rodoviária",
        icon: "map:bus-station",
        desc: "Terminais de ônibus e rodoviária municipal.",
        services: [
          { 
            icon: "tabler:building-community",
            name: "Terminal de Ônibus", 
            tag: "Transporte", 
            desc: "Demandas sobre terminais de ônibus.", 
            keywords: [
              "terminal",
              "estação",
              "ponto",
              "ônibus",
              "terminal de ônibus",
              "estação de ônibus",
              "terminal urbano"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/598/formulario/6a5fcc8ce4b0a15dd79e1372",
        // order: 1
          },
          { 
            icon: "mdi:ticket-confirmation-outline",
            name: "Rodoviária", 
            tag: "Transporte", 
            desc: "Demandas sobre a rodoviária municipal.", 
            keywords: [
              "rodoviária",
              "manutenção",
              "estrutura",
              "terminal",
              "rodoviária precisa conserto",
              "estrutura rodoviária",
              "rodoviária municipal"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/601/formulario/6a5fcdf9e4b0a15dd79e1387",
        // order: 1
          }
        ]
      },
      {
        id: "transporte_pontos_onibus",
        name: "Pontos de Ônibus",
        icon: "tabler:bus-stop",
        desc: "Pontos de ônibus e abrigos.",
        services: [
          { 
            icon: "tabler:tool",
            name: "Ponto de Ônibus — Manutenção", 
            tag: "Transporte", 
            desc: "Solicite manutenção de ponto ou abrigo de ônibus.", 
            keywords: [
              "ponto",
              "abrigo",
              "manutenção",
              "conserto",
              "ponto quebrado",
              "abrigo ruim",
              "consertar ponto",
              "abrigo quebrado"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/603/formulario/6a5fce67e4b0a15dd79e1391",
        // order: 1
          },
          { 
            icon: "tabler:square-plus",
            name: "Ponto de Ônibus — Novo", 
            tag: "Transporte", 
            desc: "Solicite implantação de ponto ou abrigo de ônibus.", 
            keywords: [
              "ponto",
              "abrigo",
              "novo",
              "implantação",
              "novo ponto",
              "colocar ponto",
              "ponto novo",
              "querer ponto"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/606/formulario/6a60bfa1e4b0a15dd79e1acb",
        // order: 1
          },
          { 
            icon: "tabler:arrows-left-right",
            name: "Ponto de Ônibus — Mudar", 
            tag: "Transporte", 
            desc: "Solicite alteração de ponto ou abrigo de ônibus.", 
            keywords: [
              "ponto",
              "abrigo",
              "alteração",
              "mudança",
              "mudar ponto",
              "alterar ponto de ônibus",
              "mudar local ponto"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/607/formulario/6a60c18ce4b0a15dd79e1b21",
        // order: 1
          },
          { 
            icon: "tabler:square-x",
            name: "Ponto de Ônibus — Retirar", 
            tag: "Transporte", 
            desc: "Solicite retirada de ponto ou abrigo de ônibus.", 
            keywords: [
              "ponto",
              "abrigo",
              "remoção",
              "tirar",
              "tirar ponto",
              "remover ponto",
              "ponto foi embora",
              "ponto não existe mais"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/609/formulario/6a60c260e4b0a15dd79e1b3b",
        // order: 1
          },
          { 
            icon: "fa6-solid:people-roof",
            name: "Abrigo de Ônibus", 
            tag: "Transporte", 
            desc: "Demandas sobre abrigos de ônibus.", 
            keywords: [
              "abrigo",
              "ponto de ônibus",
              "cobertura",
              "proteção",
              "abrigo de chuva",
              "abrigo sol"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/614/formulario/6a60c2ede4b0a15dd79e1b63"
          }
        ]
      },
      {
        id: "transporte_outros",
        name: "Outros Transportes",
        icon: "mdi:car",
        desc: "Táxi, vans e programas especiais.",
        services: [
          { 
            icon: "mdi:taxi",
            name: "Táxi e Vans Escolares", 
            tag: "Transporte", 
            desc: "Demandas sobre táxis e vans escolares.", 
            keywords: [
              "táxi",
              "van",
              "escolar",
              "transporte",
              "van escolar",
              "táxi municipal",
              "transporte especial"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/616/formulario/6a60c3bfe4b0a15dd79e1b8c",
        // order: 1
          },
          { 
            icon: "ph:arrow-up-right",
            name: "Projeto Elevar", 
            tag: "Programa", 
            desc: "Demandas sobre o Projeto Elevar de transporte.", 
            keywords: [
              "elevar",
              "projeto",
              "transporte",
              "acessibilidade",
              "projeto elevar transporte",
              "transporte acessível"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/618/formulario/6a60c431e4b0a15dd79e1ba9"
          }
        ]
      }
    ]
  },

  // ─── LIMPEZA PÚBLICA ───────────────────────────
  {
    id: "limpeza_publica",
    icon: "tabler:trash",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Limpeza Pública",
    desc: "Varrição, coleta de lixo, recicláveis e equipamentos.",
    subcategories: [
      {
        id: "limpeza_varricao",
        name: "Varrição",
        icon: "ph:broom",
        desc: "Varrição e limpeza de vias públicas.",
        services: [
          { 
            icon: "tabler:sparkles",
            name: "Limpeza de Rua", 
            tag: "Limpeza", 
            desc: "Solicite limpeza de via pública.", 
            keywords: [
              "limpeza",
              "rua",
              "sujeira",
              "varrição",
              "rua suja",
              "limpar rua",
              "varrer rua",
              "varrição",
              "varredor",
              "varrer",
              "varredor não passou",
              "varredor de rua",
              "viela",
              "beco",
              "travessa",
              "beco sujo",
              "viela suja",
              "limpar beco"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/624/formulario/6a60c8cae4b0a15dd79e1c3b"
          }
        ]
      },
      {
        id: "limpeza_coleta",
        name: "Coleta de Lixo",
        icon: "hugeicons:garbage-truck",
        desc: "Coleta domiciliar, recicláveis e cata cacareco.",
        services: [
          { 
            icon: "ph:recycle",
            name: "Coleta de Recicláveis", 
            tag: "Coleta", 
            desc: "Solicitação ou problemas com coleta seletiva de recicláveis.", 
            keywords: [
              "reciclável",
              "coleta seletiva",
              "reciclagem",
              "separar",
              "lixo reciclável",
              "coleta seletiva não passou",
              "reciclar"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/625/formulario/6a60cd38e4b0a15dd79e1cb8",
        // order: 1
          },
          { 
            icon: "tabler:map-pin-plus",
            name: "Incluir Endereço", 
            tag: "Coleta", 
            desc: "Solicite inclusão no serviço de coleta domiciliar.", 
            keywords: [
              "coleta",
              "lixo",
              "casa",
              "inclusão",
              "começar coleta",
              "incluir na coleta",
              "querer coleta"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/626/formulario/6a60cdf0e4b0a15dd79e1cd6",
          },
          { 
            icon: "tabler:alert-triangle",
            name: "Reclamação", 
            tag: "Coleta", 
            desc: "Reclamação sobre o serviço de coleta domiciliar.", 
            keywords: [
              "coleta",
              "lixo",
              "não passou",
              "atraso",
              "lixo não coletado",
              "caminhão não passou",
              "coleta atrasada"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/628/formulario/6a60ce65e4b0a15dd79e1ce7",
        // order: 1
          },
          { 
            icon: "mdi:information-outline",
            name: "Dúvidas", 
            tag: "Coleta", 
            desc: "Orientações sobre o serviço de coleta domiciliar.", 
            keywords: [
              "coleta",
              "lixo",
              "orientação",
              "informação",
              "dia da coleta",
              "horário coleta",
              "como separar lixo"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/633/formulario/6a6b659be4b0a15dd79e8a56",
        // order: 1
          },
          { 
            icon: "mdi:sofa-outline", 
            name: "Cata-Cacareco", 
            tag: "Coleta", 
            desc: "Solicite coleta de volumes e móveis inservíveis.", 
            keywords: [
              "cata cacareco",
              "Coleta de Móveis Velhos",
              "móvel velho",
              "entulho",
              "coleta",
              "móvel inservível",
              "retirar móvel",
              "coletar móvel velho"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/635/formulario/6a60d525e4b0a15dd79e1de3",
          },
          { 
            icon: "tabler:droplet-exclamation",
            name: "Chorume na Rua", 
            tag: "Limpeza", 
            desc: "Ocorrências de chorume em vias ou áreas públicas.", 
            keywords: [
              "chorume",
              "lixo",
              "mau cheiro",
              "esgoto",
              "líquido de lixo",
              "chorume vazando",
              "esgoto na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/636/formulario/6a60d153e4b0a15dd79e1d3b"
          }
        ]
      },
      {
        id: "limpeza_equipamentos",
        name: "Lixeiras e Equipamentos",
        icon: "mdi:delete-empty-outline",
        desc: "Lixeiras, containers e equipamentos de limpeza.",
        services: [
          { 
            icon: "mdi:delete-empty-outline",
            name: "Lixeira ou Container", 
            tag: "Equipamento", 
            desc: "Solicite instalação ou manutenção de lixeira ou container.", 
            keywords: [
              "lixeira",
              "container",
              "coleta",
              "lixo",
              "lixeira quebrada",
              "lixeira cheia",
              "colocar lixeira",
              "container de lixo"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/638/formulario/6a60d274e4b0a15dd79e1d71"
          }
        ]
      }
    ]
  },

  // ─── RUAS E BAIRROS ─────────────────────────
  {
    id: "ruas_bairros",
    icon: "tabler:building-community",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Ruas e Bairros",
    desc: "Arborização, calçadas, vias públicas, drenagem e áreas verdes.",
    subcategories: [
      {
        id: "arvores",
        name: "Árvores e Vegetação",
        icon: "mynaui:trees",
        desc: "Poda, galhos, árvores caídas e plantio de árvores.",
        services: [
          { 
            icon: "ph:scissors-fill",
            name: "Poda de Árvore", 
            tag: "Árvore", 
            desc: "Solicite poda de árvore.", 
            keywords: [
              "poda",
              "árvore",
              "corte",
              "poda de árvore",
              "cortar árvore",
              "poda parque",
              "árvore alta",
              "árvore na calçada",
              "cortar árvore calçada"
            ],
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/646/formulario/6a620e98e4b0a15dd79e2cfc",
          },
          { 
            icon: "game-icons:tree-branch",
            name: "Galho Pendurado", 
            tag: "Risco", 
            desc: "Comunique galho pendurado com risco de queda.", 
            keywords: [
              "galho",
              "risco",
              "queda",
              "perigo",
              "galho quebrado",
              "galho perigoso",
              "galho vai cair",
              "galho na calçada"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/647/formulario/6a620f3be4b0a15dd79e2d18",
        // order: 1
          },
          { 
            icon: "pepicons-pencil:tree-off",
            name: "Árvore Caída", 
            tag: "Emergência", 
            desc: "Comunique árvore caída.", 
            keywords: [
              "árvore caída",
              "queda",
              "bloqueio",
              "emergência",
              "árvore no chão",
              "árvore tombou",
              "tronco caído",
              "árvore bloqueando calçada"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/648/formulario/6a620fcde4b0a15dd79e2d4b",
        // order: 1
          },
          { 
            icon: "game-icons:tree-beehive",
            name: "Abelhas em Árvore", 
            tag: "Zoonoses", 
            desc: "Comunique enxame de abelha em árvore.", 
            keywords: [
              "abelha",
              "enxame",
              "perigo",
              "picada",
              "abelha na árvore",
              "enxame de abelha",
              "colmeia",
              "abelha calçada"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/650/formulario/6a62104ee4b0a15dd79e2d66",
        // order: 1
          },
          { 
            icon: "pinhead:tree-stump",
            name: "Toco de Árvore", 
            tag: "Árvore", 
            desc: "Solicite retirada de toco de árvore.", 
            keywords: [
              "toco",
              "toco de árvore",
              "remoção",
              "corte",
              "toco no chão",
              "resto de árvore",
              "cortar toco",
              "toco calçada"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/651/formulario/6a6211e5e4b0a15dd79e2dc3",
        // order: 1
          },
          { 
            icon: "roentgen:dead-tree",
            name: "Árvore Doente ou Seca", 
            tag: "Árvore", 
            desc: "Solicite vistoria técnica de árvore.", 
            keywords: [
              "vistoria",
              "árvore doente",
              "árvore seca",
              "técnico",
              "árvore morrendo",
              "árvore podre",
              "examinar árvore"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/652/formulario/6a621278e4b0a15dd79e2dd5",
        // order: 1
          },
          { 
            icon: "ph:plant",
            name: "Plantar ou Receber Muda de Árvore", 
            tag: "Árvore", 
            desc: "Solicite o plantio de uma árvore pela prefeitura ou peça uma muda para plantar você mesmo.", 
            keywords: [
              "plantio",
              "árvore",
              "muda",
              "nova árvore",
              "plantar árvore",
              "muda de árvore",
              "árvore nova",
              "árvore na calçada",
              "pedir muda",
              "muda grátis",
              "árvore para plantar",
              "plantar árvore na rua"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/653/formulario/6a621479e4b0a15dd79e2e38"
          }
        ]
      },
      {
        id: "calcadas_meio_fio",
        name: "Calçadas e Meio-Fio",
        icon: "mdi:walk",
        desc: "Calçadas quebradas, erosão, meio-fio e acessibilidade.",
        services: [
          { 
            icon: "ic:outline-report-problem",
            name: "Calçada com Problema", 
            tag: "Calçada", 
            desc: "Problemas em calçada: piso quebrado, irregular ou com muro em situação irregular.", 
            keywords: [
              "calçada",
              "quebrada",
              "piso quebrado",
              "calçada irregular",
              "calçada ruim",
              "buraco na calçada",
              "calçada danificada",
              "muro caído",
              "calçada da escola",
              "calçada irregular",
              "piso quebrado",
              "muro caído",
              "calçada da escola"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/654/formulario/6a6218f6e4b0a15dd79e2f0b",
        // order: 1
          },
          { 
            icon: "material-symbols-light:landslide-outline-rounded",
            name: "Calçada Desmoronando", 
            tag: "Infraestrutura", 
            desc: "Problemas de erosão em calçada.", 
            keywords: [
              "erosão",
              "buraco",
              "desmoronamento",
              "terra",
              "calçada caindo",
              "terra caindo",
              "buraco na calçada",
              "calçada afundando"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/655/formulario/6a621a6ce4b0a15dd79e2f4e",
        // order: 1
          },
          { 
            icon: "bi:bricks",
            name: "Meio-Fio Quebrado", 
            tag: "Infraestrutura", 
            desc: "Problemas em guia e sarjeta de via pública.", 
            keywords: [
              "guia",
              "sarjeta",
              "calcamento",
              "meio fio",
              "meio fio quebrado",
              "sarjeta ruim",
              "calcamento quebrado",
              "guia quebrada"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/657/formulario/6a622087e4b0a15dd79e3001",
        // order: 1
          },
          { 
            icon: "carbon:accessibility",
            name: "Rampa de Acessibilidade", 
            tag: "Acessibilidade", 
            desc: "Solicitação de rampa de acessibilidade.", 
            keywords: [
              "rampa",
              "acessibilidade",
              "deficiente",
              "acesso",
              "rampa para cadeira",
              "acesso deficiente",
              "sem rampa",
              "rebaixamento",
              "guia",
              "cadeira de rodas",
              "descer cadeira",
              "rampa na calçada",
              "rampa praça"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/658/formulario/6a624700e4b0a15dd79e33c6"
          }
        ]
      },
      {
        id: "drenagem_corregos",
        name: "Drenagem e Córregos",
        icon: "ph:waves",
        desc: "Bueiros, poços de visita, canaletas e córregos.",
        services: [
          { 
            icon: "temaki:water-manhole",
            name: "Bueiro Entupido", 
            tag: "Drenagem", 
            desc: "Problemas com boca de lobo (bueiro).", 
            keywords: [
              "bueiro",
              "boca de lobo",
              "drenagem",
              "esgoto",
              "bueiro entupido",
              "boca de lobo entupida",
              "água não desce"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/659/formulario/6a624800e4b0a15dd79e33da",
        // order: 1
          },
          { 
            icon: "pinhead:manhole-cover",
            name: "Tampa de Bueiro", 
            tag: "Drenagem", 
            desc: "Problemas com poço de visita.", 
            keywords: [
              "poço de visita",
              "drenagem",
              "bueiro",
              "esgoto",
              "poço de visita aberto",
              "tampa bueiro"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/660/formulario/6a6248c6e4b0a15dd79e33f1",
        // order: 1
          },
          { 
            icon: "tabler:border-sides",
            name: "Canaleta ou Valeta", 
            tag: "Drenagem", 
            desc: "Problemas com canaleta ou valeta de drenagem.", 
            keywords: [
              "canaleta",
              "valeta",
              "drenagem",
              "água",
              "canaleta entupida",
              "valeta suja",
              "água na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/661/formulario/6a624a92e4b0a15dd79e341e",
        // order: 1
          },
          { 
            icon: "fluent:stream-output-20-regular",
            name: "Canalizar Córrego", 
            tag: "Córrego", 
            desc: "Solicite canalização de córrego.", 
            keywords: [
              "córrego",
              "canalização",
              "tubulação",
              "drenagem",
              "tubular córrego",
              "cobrir córrego",
              "canal córrego"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/664/formulario/6a625126e4b0a15dd79e34d7",
        // order: 1
          },
          { 
            icon: "ph:waves",
            name: "Limpar Córrego", 
            tag: "Córrego", 
            desc: "Solicite limpeza de córrego.", 
            keywords: [
              "córrego",
              "limpeza",
              "entulho",
              "drenagem",
              "córrego sujo",
              "entulho no córrego",
              "desentupir córrego"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/666/formulario/6a6251a5e4b0a15dd79e34e7"
          }
        ]
      },
      {
        id: "pracas_areas_verdes",
        name: "Praças e Áreas Verdes",
        icon: "pinhead:tree-and-bench-with-backrest",
        desc: "Equipamentos, limpeza e manutenção de praças e áreas verdes.",
        services: [
          { 
            icon: "wpf:maintenance",
            name: "Equipamento de Praça Quebrado", 
            tag: "Praças", 
            desc: "Manutenção de equipamentos em áreas públicas.", 
            keywords: [
              "equipamento",
              "praça",
              "parque",
              "brinquedo",
              "brinquedo quebrado",
              "equipamento praça",
              "parque infantil"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/668/formulario/6a625231e4b0a15dd79e34f9",
        // order: 1
          },
          { 
            icon: "game-icons:grass",
            name: "Corte de Mato em Áreas Verdes", 
            tag: "Limpeza", 
            desc: "Solicite corte de mato.", 
            keywords: [
              "mato",
              "capina",
              "mato alto",
              "mato no parque",
              "capinar praça",
              "mato na guia",
              "capinar guia",
              "vegetação alta",
              "mato no terreno",
              "mato no quintal",
              "capinar terreno",
              "terreno com mato",
              "mato semae",
              "capinar área semae"
            ],
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/670/formulario/6a62528de4b0a15dd79e3503",
          },
          { 
            icon: "hugeicons:trees",
            name: "Criar Praça ou Parque", 
            tag: "Praças", 
            desc: "Solicite implantação de área verde.", 
            keywords: [
              "área verde",
              "parque",
              "praça",
              "implantação",
              "nova praça",
              "criar parque",
              "área verde nova"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/672/formulario/6a625306e4b0a15dd79e352a",
        // order: 1
          },
          { 
            icon: "material-symbols-light:signpost-outline",
            name: "Placa ou Obstáculo em Área Verde", 
            tag: "Praças", 
            desc: "Problemas com placas ou obstáculos em áreas verdes.", 
            keywords: [
              "placa",
              "obstáculo",
              "área verde",
              "bloqueio",
              "placa no parque",
              "obstáculo praça",
              "bloqueio área verde"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/673/formulario/6a6253b8e4b0a15dd79e3556",
        // order: 1
          },
          { 
            icon: "material-symbols:delete-sweep-outline-rounded",
            name: "Remover Entulho de Área Pública", 
            tag: "Limpeza", 
            desc: "Solicite recolhimento de entulho em área pública.", 
            keywords: [
              "entulho",
              "lixo",
              "área pública",
              "limpeza",
              "entulho no parque",
              "lixo na praça",
              "limpar área pública"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/674/formulario/6a62554fe4b0a15dd79e3592",
        // order: 1
          },
          { 
            icon: "mdi:leaf",
            name: "Recolher Galhos e Aparas", 
            tag: "Limpeza", 
            desc: "Solicite recolhimento de aparas de vegetação.", 
            keywords: [
              "aparas",
              "galhos",
              "vegetação",
              "poda",
              "galhos no chão",
              "recolher galhos",
              "limpar galhos",
              "aparas de poda"
            ],
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/675/formulario/6a625929e4b0a15dd79e35fa"
          }
        ]
      },
      {
        id: "pavimentacao_vias",
        name: "Pavimentação e Buracos",
        icon: "proicons:road-cone",
        desc: "Buracos, pavimentação, pontes e placas de rua.",
        services: [
          { 
            icon: "tabler:tractor",
            name: "Buraco em Rua de Terra", 
            tag: "Pavimentação", 
            desc: "Denúncia de buraco em estrada de terra.", 
            keywords: [
              "buraco",
              "estrada de terra",
              "via não pavimentada",
              "buraco na rua",
              "estrada esburacada",
              "buraco na estrada",
              "via com buraco",
              "estrada de barro"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/677/formulario/6a625990e4b0a15dd79e3605"
          },
          { 
            icon: "boxicons:road",
            name: "Buraco em Asfalto", 
            tag: "Pavimentação", 
            desc: "Denúncia de buraco em via asfaltada.", 
            keywords: [
              "buraco",
              "asfalto",
              "via pavimentada",
              "buraco na rua",
              "rua esburacada",
              "buraco no asfalto",
              "asfalto com buraco",
              "rua com buraco"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/678/formulario/6a625abfe4b0a15dd79e361b",
          },
          { 
            icon: "healthicons:construction-worker-outline",
            name: "Buraco em Obra", 
            tag: "Pavimentação", 
            desc: "Denúncia de buraco aberto pelo Semae não recomposto.", 
            keywords: [
              "buraco",
              "semae",
              "recomposto",
              "escavação",
              "buraco semae",
              "buraco não fechado",
              "escavação aberta",
              "buraco sem tampa"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/679/formulario/6a627102e4b0a15dd79e3878",
        // order: 1
          },
          { 
            icon: "tabler:map-plus",
            name: "Pavimentar Rua", 
            tag: "Obra", 
            desc: "Solicite pavimentação de via.", 
            keywords: [
              "pavimentação",
              "asfalto",
              "obra",
              "reforma",
              "pavimentar rua",
              "colocar asfalto",
              "asfaltar",
              "rua de terra"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/680/formulario/6a62630de4b0a15dd79e372b",
        // order: 1
          },
          { 
            icon: "mdi:bridge",
            name: "Ponte ou Viaduto", 
            tag: "Obra de Arte", 
            desc: "Problemas em ponte ou viaduto urbano.", 
            keywords: [
              "ponte",
              "viaduto",
              "obra de arte",
              "estrutura",
              "ponte quebrada",
              "viaduto ruim",
              "ponte precisa conserto",
              "viaduto com problema"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/681/formulario/6a626391e4b0a15dd79e3733",
        // order: 1
          },
          { 
            icon: "lucide:signpost-big",
            name: "Placa de Rua", 
            tag: "Identificação", 
            desc: "Solicitação ou problema com placa de identificação de rua.", 
            keywords: [
              "placa",
              "nome de rua",
              "identificação",
              "logradouro",
              "placa de rua",
              "nome da rua",
              "placa de identificação",
              "sem placa"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/682/formulario/6a62642fe4b0a15dd79e374a"
          }
        ]
      },
      {
        id: "agua_esgoto",
        name: "Água e Esgoto",
        icon: "ph:drop",
        desc: "Vazamentos, falta de água, conta, cadastro e outros serviços.",
        services: [
          { 
            icon: "mdi:pipe-leak",
            name: "Esgoto Entupido ou Vazando", 
            tag: "Semae", 
            desc: "Comunique problema na rede de esgoto.", 
            keywords: [
              "esgoto",
              "entupido",
              "vazamento",
              "semae",
              "esgoto entupido",
              "vazamento de esgoto",
              "esgoto vazando",
              "esgoto voltando"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/683/formulario/6a6264a2e4b0a15dd79e3757",
        // order: 1
          },
          { 
            icon: "ph:drop",
            name: "Água Vazando na Calçada", 
            tag: "Semae", 
            desc: "Comunique vazamento de água em calçada.", 
            keywords: [
              "vazamento", 
              "água", 
              "calçada", 
              "semae", 
              "água vazando", 
              "vazamento na calçada", 
              "água saindo", 
              "água jorrando"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/684/formulario/6a626509e4b0a15dd79e3768",
        // order: 1
          },
          { 
            icon: "mdi:water-alert-outline",
            name: "Água Vazando na Rua", 
            tag: "Semae", 
            desc: "Comunique vazamento de água em via pública.", 
            keywords: [
              "vazamento", 
              "água", 
              "rua", 
              "semae", 
              "água na rua", 
              "vazamento na rua", 
              "água saindo na rua", 
              "jato de água"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/685/formulario/6a626567e4b0a15dd79e3772",
        // order: 1
          },
          { 
            icon: "ph:drop-slash",
            name: "Falta de Água em Casa", 
            tag: "Semae", 
            desc: "Comunique falta de água no endereço.", 
            keywords: [
              "falta de água", 
              "sem água", 
              "corte", 
              "semae", 
              "água cortada", 
              "sem água em casa", 
              "falta água", 
              "água parou"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/686/formulario/6a626800e4b0a15dd79e37af"
          },
          { 
            icon: "ph:file-text",
            name: "Segunda Via de Conta", 
            tag: "Semae", 
            desc: "Solicite segunda via de conta do Semae.", 
            keywords: [
              "segunda via", 
              "conta", 
              "fatura", 
              "semae", 
              "copia de conta", 
              "nova conta", 
              "reemitir conta"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/687/formulario/6a626aa9e4b0a15dd79e37fb",
        // order: 1
          },
          { 
            icon: "la:user-edit",
            name: "Alterar Dados da Conta", 
            tag: "Semae", 
            desc: "Solicite alteração de dados cadastrais no Semae.", 
            keywords: [
              "cadastro", 
              "alteração", 
              "dados", 
              "semae", 
              "mudar cadastro", 
              "atualizar dados", 
              "trocar titular"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/688/formulario/6a626d9ee4b0a15dd79e3832",
        // order: 1
          },
          { 
            icon: "tabler:ruler-measure",
            name: "Padrões de Instalação", 
            tag: "Semae", 
            desc: "Demandas sobre padrões de instalação do Semae.", 
            keywords: [
              "padrão", 
              "instalação", 
              "hidrômetro", 
              "semae", 
              "instalação água", 
              "hidrômetro padrão", 
              "norma instalação"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/689/formulario/6a6396d9e4b0a15dd79e446f"
          },
          { 
            icon: "mdi:water-plus-outline",
            name: "Ligar Água ou Esgoto", 
            tag: "Semae", 
            desc: "Solicite ligação de água ou esgoto.", 
            keywords: [
              "ligação", 
              "água", 
              "esgoto", 
              "nova ligação", 
              "instalar água", 
              "ligar água", 
              "nova conta água"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/690/formulario/6a6398f7e4b0a15dd79e44aa",
        // order: 1
          },
          { 
            icon: "mdi:water-check-outline",
            name: "Religar Água", 
            tag: "Semae", 
            desc: "Solicite religação de serviço do Semae.", 
            keywords: [
              "religação", 
              "corte", 
              "água", 
              "semae", 
              "voltar água", 
              "religar serviço", 
              "água cortada"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/691/formulario/6a639a0de4b0a15dd79e44bc",
        // order: 1
          },
          { 
            icon: "ph:warning",
            name: "Fraude no Hidrômetro", 
            tag: "Semae", 
            desc: "Denúncia de fraude em hidrômetro ou ligação de água.", 
            keywords: [
              "fraude", 
              "hidrômetro", 
              "ligação", 
              "água", 
              "fraude água", 
              "ligação irregular", 
              "hidrômetro fraudado", 
              "adulteração"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/692/formulario/6a6271b2e4b0a15dd79e3884"
          }
        ]
      },
      {
        id: "iluminacao_publica",
        name: "Iluminação Pública",
        icon: "ph:lightbulb",
        desc: "Iluminação viária.",
        services: [
          { 
            icon: "iconoir:light-bulb-off",
            name: "Rua sem Luz", 
            tag: "Iluminação", 
            desc: "Falha ou ausência de iluminação em via pública.", 
            keywords: [
              "luz", 
              "iluminação", 
              "poste", 
              "rua escura", 
              "luz apagada", 
              "poste sem luz", 
              "rua escura à noite", 
              "iluminação quebrada"
            ], 
        link: "https://ip.somasig.com.br/ocorrencias/piracicaba",
        // order: 1
          }
        ]
      },
      {
        id: "caminhao_pipa",
        name: "Caminhão Pipa",
        icon: "fa6-solid:truck-droplet",
        desc: "Abastecimento de água por caminhão pipa.",
        services: [
          { 
            icon: "fa6-solid:truck-droplet",
            name: "Caminhão Pipa Urbano", 
            tag: "Serviço", 
            desc: "Solicite caminhão pipa para abastecimento de água na área urbana.", 
            keywords: [
              "caminhão pipa", 
              "água", 
              "urbana", 
              "irrigação", 
              "água para rua", 
              "lavar rua", 
              "caminhão pipa cidade", 
              "água para praça", 
              "irrigar gramado", 
              "regar praça", 
              "caminhão pipa semae", 
              "água semae", 
              "jacob canale", 
              "estrada jacob canale", 
              "lixão"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/694/formulario/6a627290e4b0a15dd79e3894",  
          }
        ]
      },
      {
        id: "ruas_bairros_geral",
        name: "Geral",
        icon: "ph:info",
        desc: "Demandas gerais sobre ruas e bairros.",
        services: [
          { 
            icon: "fluent:earth-leaf-20-regular",
            name: "Meio Ambiente", 
            tag: "Ambiental", 
            desc: "Demandas gerais de meio ambiente em ruas e bairros.", 
            keywords: [
              "meio ambiente", 
              "ambiental", 
              "natureza", 
              "ecologia", 
              "problema ambiental", 
              "natureza urbana"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/695/formulario/6a639dade4b0a15dd79e4506",
        // order: 1
          },
          { 
            icon: "f7:building-columns-fill",
            name: "Prédio da Prefeitura", 
            tag: "Patrimônio", 
            desc: "Demandas sobre bens e propriedades municipais.", 
            keywords: [
              "próprio", 
              "patrimônio", 
              "municipal", 
              "imóvel", 
              "prédio público", 
              "imóvel municipal"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/696/formulario/6a62443de4b0a15dd79e338f"
          }
        ]
      }
    ]
  },

  // ─── SAÚDE PÚBLICA ──────────────────────────
  {
    id: "saude",
    icon: "tabler:heart-plus",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Saúde Pública",
    desc: "Transporte de pacientes, procedimentos SUS e unidades de saúde.",
    subcategories: [
      {
        id: "transporte_sus",
        name: "Transporte para Consultas e Exames",
        icon: "fa6-solid:truck-medical",
        desc: "Serviços de transporte de pacientes pelo SUS.",
        services: [
          { 
            icon: "lucide:van",
            name: "Carro da Prefeitura para Consulta (SITSS)", 
            tag: "Transporte", 
            desc: "Solicite carro da prefeitura para levar você a consultas e exames médicos pelo SUS.", 
            keywords: [
              "sitss", 
              "transporte", 
              "consulta", 
              "exame", 
              "transporte médico", 
              "carro saúde", 
              "transporte sus", 
              "carro prefeitura", 
              "ônibus médico"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/613/formulario/6a60d3f7e4b0a15dd79e1db9",
        // order: 1
          },
          { 
            icon: "tabler:ambulance",
            name: "Ambulância", 
            tag: "Transporte", 
            desc: "Solicite ambulância para transporte de paciente.", 
            keywords: [
              "ambulância", 
              "emergência", 
              "transporte", 
              "paciente", 
              "socorro", 
              "emergência médica", 
              "chamar ambulância", 
              "samu"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/615/formulario/6a60d456e4b0a15dd79e1dc5"
          }
        ]
      },
      {
        id: "procedimentos_sus",
        name: "Consultas, Exames e Medicamentos",
        icon: "tabler:stethoscope",
        desc: "Consultas, exames, medicamentos e procedimentos pelo SUS.",
        services: [
          { 
            icon: "fa6-solid:user-doctor",
            name: "Consulta Médica", 
            tag: "SUS", 
            desc: "Solicite ou agende consulta pelo SUS.", 
            keywords: [
              "consulta", 
              "médico", 
              "atendimento", 
              "sus", 
              "marcar consulta", 
              "agendar médico", 
              "consulta médica", 
              "ir ao médico"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/620/formulario/6a60d5b6e4b0a15dd79e1dfb",
        // order: 1
          },
          { 
            icon: "ph:pill",
            name: "Remédio de Graça", 
            tag: "SUS", 
            desc: "Retire medicamentos nas farmácias da rede municipal.", 
            keywords: [
              "farmácia", 
              "remédio", 
              "medicamento", 
              "drogaria", 
              "pegar remédio", 
              "medicamento grátis", 
              "farmácia municipal", 
              "remédio sus"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/699/formulario/6a60d765e4b0a15dd79e1e38",
        // order: 1
          },
          { 
            icon: "tabler:stretching",
            name: "Fisioterapia", 
            tag: "SUS", 
            desc: "Solicite fisioterapia pelo SUS.", 
            keywords: [
              "fisioterapia", 
              "reabilitação", 
              "fisioterapeuta", 
              "terapia", 
              "sessão fisioterapia", 
              "tratamento fisioterapia", 
              "fisioterapeuta sus"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/621/formulario/6a60d864e4b0a15dd79e1e50",
        // order: 1
          },
          { 
            icon: "streamline-plump:medical-bag",
            name: "Cirurgia pelo SUS", 
            tag: "SUS", 
            desc: "Solicite informações sobre cirurgia pelo SUS.", 
            keywords: [
              "cirurgia", 
              "operação", 
              "cirurgião", 
              "procedimento", 
              "operar", 
              "cirurgia pelo sus", 
              "marcar cirurgia"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/622/formulario/6a60d8a3e4b0a15dd79e1e57",
        // order: 1
          },
          { 
            icon: "tabler:vaccine",
            name: "Vacina", 
            tag: "Prevenção", 
            desc: "Informações e pontos de vacinação.", 
            keywords: [
              "vacina", 
              "vacinação", 
              "imunização", 
              "posto de saúde", 
              "tomar vacina", 
              "vacinar", 
              "posto vacinação", 
              "vacina grátis"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/623/formulario/6a610261e4b0a15dd79e22a0",
        // order: 1
          },
          { 
            icon: "hugeicons:hospital-bed-02",
            name: "Internação no Hospital", 
            tag: "SUS", 
            desc: "Solicite vaga hospitalar pelo SUS.", 
            keywords: [
              "hospital", 
              "internação", 
              "vaga", 
              "leito", 
              "internar", 
              "leito hospital", 
              "vaga no hospital", 
              "precisar internar"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/627/formulario/6a6101e7e4b0a15dd79e2287",
        // order: 1
          },
          { 
            icon: "fluent:clipboard-pulse-20-regular",
            name: "Exame Médico", 
            tag: "SUS", 
            desc: "Demora no agendamento de consulta ou no agendamento de exames", 
            keywords: [
              "exame", 
              "laboratório", 
              "raio x", 
              "sangue", 
              "fazer exame", 
              "agendar exame", 
              "exame laboratório", 
              "exame de sangue"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/629/formulario/6a6102cfe4b0a15dd79e22b3"
          },
          { 
            icon: "material-symbols:pill-off-outline",
            name: "Falta de Remédio ou Material", 
            tag: "SUS", 
            desc: "Comunique falta de insumos em unidade de saúde.", 
            keywords: [
              "falta", 
              "material", 
              "insumo", 
              "estoque", 
              "sem material", 
              "falta remédio", 
              "sem insumo", 
              "falta medicamento"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/630/formulario/6a610339e4b0a15dd79e22c1"
          }
        ]
      },
      {
        id: "unidade_saude",
        name: "Postos de Saúde",
        icon: "tabler:building-hospital",
        desc: "Infraestrutura e suprimentos das unidades de saúde.",
        services: [
          { 
            icon: "ph:hospital-light",
            name: "Prédio do Posto de Saúde", 
            tag: "Unidade", 
            desc: "Problemas de estrutura física em unidade de saúde.", 
            keywords: [
              "estrutura", 
              "prédio", 
              "construção", 
              "manutenção", 
              "posto de saúde", 
              "ubs", 
              "unidade básica"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/697/formulario/6a6103bae4b0a15dd79e22d6",
        // order: 1
          },
          { 
            icon: "mdi:cog-off-outline",
            name: "Aparelho Quebrado", 
            tag: "Unidade", 
            desc: "Problemas com equipamentos em unidade de saúde.", 
            keywords: [
              "equipamento", 
              "aparelho", 
              "máquina", 
              "conserto", 
              "aparelho quebrado", 
              "máquina ruim", 
              "equipamento defeito", 
              "aparelho médico"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/632/formulario/6a610652e4b0a15dd79e231a",
        // order: 1
          }
        ]
      }
    ]
  },

  // ─── SEGURANÇA E JUSTIÇA ────────────────────
  {
    id: "seguranca_justica",
    icon: "tabler:shield",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Segurança e Justiça",
    desc: "Segurança pública, defesa civil, PROCON e servidores municipais.",
    subcategories: [
      {
        id: "seguranca_publica",
        name: "Segurança Pública",
        icon: "tabler:shield-half-filled",
        desc: "Policiamento, defesa civil e emergências.",
        services: [
          { 
            icon: "ri:police-car-fill",
            name: "Policiamento", 
            tag: "Segurança", 
            desc: "Solicitações e reclamações sobre policiamento.", 
            keywords: [
              "polícia", 
              "segurança", 
              "patrulha", 
              "vigilância", 
              "guarda", 
              "ronda", 
              "polícia militar", 
              "falta polícia"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/587/formulario/6a610899e4b0a15dd79e234c",
        // order: 1
          },
          { 
            icon: "mdi:shield-alert-outline",
            name: "Defesa Civil", 
            tag: "Defesa Civil", 
            desc: "Ocorrências gerais de defesa civil.", 
            keywords: [
              "defesa civil", 
              "emergência", 
              "desastre", 
              "chuva", 
              "enchente", 
              "deslizamento", 
              "emergência civil", 
              "chuva forte"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/588/formulario/6a61091fe4b0a15dd79e235e",
        // order: 1
          }
        ]
      },
      {
        id: "emergencias",
        name: "Emergências",
        icon: "lucide:siren",
        desc: "Emergências e situações de risco.",
        services: [
          { 
            icon: "tabler:flame",
            name: "Fogo em Terreno ou Quintal", 
            tag: "Emergência", 
            desc: "Comunique fogo em terreno ou quintal.", 
            keywords: [
              "fogo", 
              "incêndio", 
              "queimada", 
              "emergência", 
              "pegando fogo", 
              "incêndio terreno", 
              "fogo no quintal"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/589/formulario/6a6109e6e4b0a15dd79e2373"
          }
        ]
      },
      {
        id: "procon_consumidor",
        name: "PROCON e Consumidor",
        icon: "ph:scales",
        desc: "Direitos do consumidor e reclamações.",
        services: [
          { 
            icon: "ph:scales",
            name: "PROCON", 
            tag: "Consumidor", 
            desc: "Demandas sobre o PROCON municipal.", 
            keywords: [
              "procon", 
              "consumidor", 
              "reclamação", 
              "direito do consumidor", 
              "reclamar empresa", 
              "problema consumo",              
              "empresa não cumpriu"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/590/formulario/6a610a78e4b0a15dd79e2388"
          }
        ]
      },
      {
        id: "servidores_rh",
        name: "Servidores Municipais",
        icon: "clarity:id-badge-solid",
        desc: "Concursos, informações, demandas de RH e benefícios.",
        services: [
          { 
            icon: "ph:user",
            name: "Servidor Municipal", 
            tag: "RH", 
            desc: "Demandas sobre servidores municipais.", 
            keywords: [
              "servidor", 
              "funcionário", 
              "municipal", 
              "rh", 
              "funcionário prefeitura", 
              "servidor público"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/594/formulario/6a610b10e4b0a15dd79e23a4",
        // order: 1
          },
          { 
            icon: "tabler:file-text",
            name: "Concurso Público", 
            tag: "RH", 
            desc: "Informações sobre concursos públicos municipais.", 
            keywords: [
              "concurso", 
              "prova", 
              "cargo público", 
              "vestibular", 
              "concurso prefeitura", 
              "prova concurso", 
              "vaga concursos"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/596/formulario/6a610cb8e4b0a15dd79e23d1",
        // order: 1
          },
          { 
            icon: "tabler:coffee",
            name: "Café da Manhã", 
            tag: "Benefício", 
            desc: "Reivindicação sobre o benefício de café da manhã para servidores.", 
            keywords: [
              "café da manhã", 
              "benefício", 
              "servidor", 
              "alimentação", 
              "café servidor", 
              "alimentação servidor"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/597/formulario/6a610f12e4b0a15dd79e243d",
        // order: 1
          },
          { 
            icon: "tabler:basket",
            name: "Cesta Básica", 
            tag: "Benefício", 
            desc: "Reivindicação sobre o benefício de cesta básica para servidores.", 
            keywords: [
              "cesta básica", 
              "benefício", 
              "servidor", 
              "alimentação", 
              "cesta servidor", 
              "alimentação funcionário"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/700/formulario/6a610fd9e4b0a15dd79e245b",
        // order: 1
          },
          { 
            icon: "ph:piggy-bank-light",
            name: "Previdência do Servidor (IPASP)", 
            tag: "Previdência", 
            desc: "Reivindicação sobre o IPASP (previdência do servidor).", 
            keywords: [
              "ipasp", 
              "previdência", 
              "aposentadoria", 
              "servidor", 
              "aposentadoria servidor", 
              "previdência municipal"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/599/formulario/6a611057e4b0a15dd79e2464"
          }
        ]
      },
      {
        id: "duvidas_servicos",
        name: "Dúvidas sobre Serviços",
        icon: "tabler:help-circle",
        desc: "Esclarecimentos sobre serviços municipais.",
        services: [
          { 
            icon: "tabler:help-circle",
            name: "Dúvida sobre Serviços", 
            tag: "Informação", 
            desc: "Solicite esclarecimento sobre serviços municipais.", 
            keywords: [
              "informação", 
              "dúvida", 
              "esclarecimento", 
              "ajuda", 
              "tirar dúvida", 
              "perguntar serviço", 
              "informação prefeitura"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/600/formulario/6a6110b8e4b0a15dd79e2473"
          }
        ]
      }
    ]
  },

  // ─── OUVIDORIA ──────────────────────────────
  {
    id: "ouvidoria",
    icon: "tabler:message-report",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Sugestões e Reclamações",
    desc: "Canal para agradecimentos, sugestões, reclamações e acesso à informação.",
    subcategories: [
      {
        id: "manifestacoes",
        name: "Elogios e Sugestões",
        icon: "tabler:thumb-up",
        desc: "Manifestações gerais dos cidadãos.",
        services: [
          { 
            icon: "tabler:heart",
            name: "Agradecimento", 
            tag: "Manifestação", 
            desc: "Registro de agradecimento pela ouvidoria.", 
            keywords: [
              "agradecimento", 
              "elogio", 
              "parabéns", 
              "reconhecimento", 
              "queria agradecer", 
              "elogiar serviço", 
              "parabenizar", 
              "agradecer prefeitura"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/569/formulario/6a611197e4b0a15dd79e2490",
        // order: 1
          },
          { 
            icon: "tabler:bulb",
            name: "Sugestão", 
            tag: "Manifestação", 
            desc: "Registro de sugestão pela ouvidoria.", 
            keywords: [
              "sugestão", 
              "ideia", 
              "proposta",
              "melhoria", 
              "dar ideia", 
              "sugerir melhoria", 
              "proposta", 
              "sugestão para cidade"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/568/formulario/6a611229e4b0a15dd79e24b4"
          }
        ]
      },
      {
        id: "reclamacao",
        name: "Reclamações",
        icon: "tabler:alert-triangle",
        desc: "Reclamações específicas via ouvidoria.",
        services: [
          { 
            icon: "tabler:message-exclamation",
            name: "Reclamação Geral", 
            tag: "Reclamação", 
            desc: "Reclamações gerais registradas na ouvidoria.", 
            keywords: [
              "reclamação", 
              "denúncia", 
              "problema", 
              "queixa", 
              "reclamar geral", 
              "fazer denúncia", 
              "abrir reclamação", 
              "reclamar serviço"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/698/formulario/6a611291e4b0a15dd79e24cc",
          },
          { 
            icon: "tabler:user-minus",
            name: "Falta de Funcionário", 
            tag: "Atendimento", 
            desc: "Reclamação sobre número insuficiente de funcionários.", 
            keywords: [
              "falta de funcionário", 
              "pouco pessoal", 
              "fila", "demora", 
              "sem funcionário", 
              "fila grande", 
              "demora atendimento", 
              "pouco atendimento"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/570/formulario/6a6114bbe4b0a15dd79e2511",
        // order: 1
          },
          { 
            icon: "tabler:mood-annoyed",
            name: "Mau Atendimento", 
            tag: "Atendimento", 
            desc: "Reclamação sobre mau atendimento por funcionário municipal.", 
            keywords: [
              "mau atendimento", 
              "grosseria", 
              "descortesia", 
              "ruim", 
              "funcionário rude", 
              "atendimento ruim", 
              "mal atendido", 
              "funcionário grosso"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/572/formulario/6a611575e4b0a15dd79e2529",
        // order: 1
          }
        ]
      },
      {
        id: "acompanhamento",
        name: "Acompanhamento",
        icon: "tabler:file-search",
        desc: "Acompanhamento de protocolos e processos.",
        services: [
          { 
            icon: "tabler:search",
            name: "Acompanhar Protocolo", 
            tag: "Protocolo", 
            desc: "Abertura e acompanhamento de protocolo.", 
            keywords: [
              "protocolo", 
              "processo", 
              "acompanhamento", 
              "número", 
              "número de protocolo", 
              "acompanhar processo", 
              "status protocolo", 
              "consultar protocolo"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/solicitar-servico/573/formulario/6a611605e4b0a15dd79e2535"
          }
        ]
      }
    ]
  }

];

// Reordena as categorias conforme a lista `categoryOrder` definida acima.
// Categorias com ID ausente na lista vão para o final, na ordem original.
categories.sort((a, b) => {
  let orderA = categoryOrder.indexOf(a.id);
  let orderB = categoryOrder.indexOf(b.id);
  if (orderA === -1) orderA = categoryOrder.length;
  if (orderB === -1) orderB = categoryOrder.length;
  return orderA - orderB;
});

// Marca como featured e define a ordem de cada serviço cujo ID
// (extraído do link) esteja na lista `featuredOrder` acima.
// Serviços fora da lista simplesmente não aparecem no carrossel.
(function applyFeaturedOrder() {
  function walk(node) {
    if (node.services) {
      node.services.forEach(svc => {
        const match = svc.link && svc.link.match(/solicitar-servico\/(\d+)\//);
        const id = match ? Number(match[1]) : null;
        const idx = id !== null ? featuredOrder.indexOf(id) : -1;
        if (idx !== -1) {
          svc.featured = true;
          svc.order = idx;
        }
      });
    }
    if (node.subcategories) {
      node.subcategories.forEach(walk);
    }
  }
  categories.forEach(walk);
})();