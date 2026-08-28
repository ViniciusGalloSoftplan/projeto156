  // ─── RUAS E BAIRROS ─────────────────────────
categories.push({
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/646",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2221&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/647",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2222&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/648",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2223&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/650",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2224&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/651",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2225&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/652",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2226&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/653",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2227&cdOrgao=2",
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
            name: "Manutenção de Calçada Pública", 
            tag: "Calçada", 
            desc: "Solicitação de manutenção de calçada pública.", 
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/654",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2228&cdOrgao=2",
          },
          { 
            icon: "ic:outline-report-problem",
            name: "Fiscalização em Calçada Particular", 
            tag: "Calçada", 
            desc: "Solicitação de fiscalização em calçada particular.", 
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/703",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2276&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/657",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2230&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/658",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2232&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/659",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2233&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/660",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2234&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/661",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2235&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/664",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2236&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/666",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2237&cdOrgao=2",
          },
          {
            icon: "pinhead:manhole-cover",
            name: "Problema com Tampa de Poço de Visita Água/Esgoto",
            tag: "Drenagem",
            desc: "Comunique problema com tampa de poço de visita de água ou esgoto.",
            keywords: [
              "tampa",
              "poço de visita",
              "água",
              "esgoto",
              "tampa quebrada",
              "tampa solta",
              "poço de visita aberto"
            ],
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/719",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2293&cdOrgao=3",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/668",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2238&cdOrgao=2",
          },
          { 
            icon: "game-icons:grass",
            name: "Corte de Mato em Áreas Verdes", 
            tag: "Limpeza", 
            desc: "Solicitar corte de mato em área verde.", 
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
              "terreno com mato"
            ],
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/670",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2239&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/672",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2240&cdOrgao=2",
          },
          { 
            icon: "material-symbols-light:signpost-outline",
            name: "Implantação de Placa/Retirada de Obstáculo em Área Verde", 
            tag: "Praças", 
            desc: "Solicitar implantação de placa ou retirada de obstáculo em área verde.", 
            keywords: [
              "placa",
              "obstáculo",
              "área verde",
              "bloqueio",
              "placa no parque",
              "obstáculo praça",
              "bloqueio área verde"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/673",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2241&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/674",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2242&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/675",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2269&cdOrgao=2",
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
            name: "Manutenção de Buraco em Estrada de Terra", 
            tag: "Pavimentação", 
            desc: "Solicitação de manutenção de buraco em estrada de terra.", 
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/677",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2243&cdOrgao=2",
          },
          { 
            icon: "boxicons:road",
            name: "Manutenção de Buraco em Via Asfaltada", 
            tag: "Pavimentação", 
            desc: "Solicitação de manutenção de buraco em via asfaltada.", 
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/678",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2244&cdOrgao=2",
          },
          { 
            icon: "healthicons:construction-worker-outline",
            name: "Manutenção de Buraco Aberto pelo SEMAE", 
            tag: "Pavimentação", 
            desc: "Denúncia de buraco aberto pelo Semae não recomposto.", 
            keywords: [
              "buraco",
              "semae",
              "recomposto",
              "escavação",
              "buraco semae",
              "buraco não fechado",
              "escavação aberta"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/679",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2254&cdOrgao=3",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/680",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2245&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/681",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2246&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/682",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2247&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/683",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2248&cdOrgao=3",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/684",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2249&cdOrgao=3",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/685",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2250&cdOrgao=3",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/689",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2258&cdOrgao=3",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/692",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2255&cdOrgao=3",
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
        linkInterno: "https://ip.somasig.com.br/login",
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
              "jacob canale", 
              "estrada jacob canale", 
              "lixão"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/694",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2257&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/696",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2231&cdOrgao=2",
          }
        ]
      }
    ]
});
