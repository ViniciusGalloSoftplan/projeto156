const categories = [

  // ─── AGRICULTURA E ZONA RURAL ───────────────
  {
    id: "agricultura",
    icon: "temaki:plant",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Agricultura e Zona Rural",
    desc: "Atendimento relacionado à infraestrutura rural, abastecimento e comercialização de produtos agrícolas.",
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
            // order: 1
          },
          { 
            icon: "solar:stethoscope-bold", 
            name: "Castração", 
            tag: "Controle Populacional", 
            desc: "Solicitação ou reclamação sobre castração de cães e gatos.", 
            keywords: [
              "castrar", 
              "esterilizar", 
              "cirurgia de castração", 
              "controle de natalidade", 
              "castração cachorro", 
              "castração gato"
            ], 
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            name: "Corte de Mato", 
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
            featured: true,
            link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
            order: 4
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
          },
          { 
            icon: "ph:person-simple-swim",
            name: "Piscina Municipal", 
            tag: "Esporte", 
            desc: "Solicitações sobre piscinas públicas.", 
            keywords: [
              "piscina", 
              "natação", 
              "piscina municipal", 
              "piscina pública", 
              "nadar"
            ], 
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
          }
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
    subcategories: [
      {
        id: "eventos_culturais",
        name: "Eventos Culturais",
        icon: "fa6-solid:masks-theater",
        desc: "Shows, festivais e eventos culturais.",
        services: [
          { 
            icon: "ph:music-notes",
            name: "Show ou Festival", 
            tag: "Cultura", 
            desc: "Solicitações sobre shows e festivais municipais.", 
            keywords: [
              "show", 
              "festival", 
              "música", 
              "evento cultural", 
              "concerto", 
              "apresentação"
            ], 
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
          },
          { 
            icon: "game-icons:clapperboard",
            name: "Evento de Teatro", 
            tag: "Cultura", 
            desc: "Solicitações sobre eventos teatrais.", 
            keywords: [
              "teatro", 
              "peça", 
              "espetáculo", 
              "apresentação", 
              "evento cultural"
            ], 
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
          },
          { 
            icon: "material-symbols-light:palette-outline",
            name: "Exposição de Arte", 
            tag: "Cultura", 
            desc: "Solicitações sobre exposições artísticas.", 
            keywords: [
              "arte", 
              "exposição", 
              "galeria", 
              "mostra", 
              "evento cultural"
            ], 
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
          }
        ]
      },
      {
        id: "eventos_esportivos",
        name: "Eventos Esportivos",
        icon: "mdi:medal-outline",
        desc: "Campeonatos e competições esportivas.",
        services: [
          { 
            icon: "mdi:podium",
            name: "Campeonato Esportivo", 
            tag: "Esporte", 
            desc: "Solicitações sobre campeonatos municipais.", 
            keywords: [
              "campeonato", 
              "competição", 
              "torneio", 
              "esporte", 
              "campeonato municipal"
            ], 
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
          },
          { 
            icon: "fluent-emoji-high-contrast:running-shoe",
            name: "Corrida de Rua", 
            tag: "Esporte", 
            desc: "Solicitações sobre corridas e provas de rua.", 
            keywords: [
              "corrida", 
              "prova", 
              "maratona", 
              "corrida de rua", 
              "evento esportivo"
            ], 
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
          }
        ]
      },
      {
        id: "eventos_comunitarios",
        name: "Eventos Comunitários",
        icon: "mynaui:users-group",
        desc: "Feiras, festas e eventos comunitários.",
        services: [
          { 
            icon: "mynaui:confetti",
            name: "Festa Comunitária", 
            tag: "Comunidade", 
            desc: "Solicitações sobre festas e eventos comunitários.", 
            keywords: [
              "festa", 
              "evento comunitário", 
              "comunidade", 
              "celebração", 
              "festa de bairro"
            ], 
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
          }
        ]
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
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
        featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: true,
            link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
            order: 1
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: true,
            link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
            order: 2
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
          },
          { 
            icon: "game-icons:grass",
            name: "Mato Alto", 
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: true,
            link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
            order: 3
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
        // order: 1
          },
          { 
            icon: "fluent:clipboard-pulse-20-regular",
            name: "Exame Médico", 
            tag: "SUS", 
            desc: "Solicite ou agende exame pelo SUS.", 
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
    name: "Ouvidoria",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
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
            featured: true,
            link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
            order: 5
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840",
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
            featured: false,
        link: "https://sempapel.piracicaba.sp.gov.br/form-dinamico-web/#/pro/answer/6a32905de4b01881f54557ac/6a46b059e4b01881f5461840"
          }
        ]
      }
    ]
  }

];