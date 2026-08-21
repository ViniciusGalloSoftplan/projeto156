  // ─── FISCALIZAÇÃO ───────────────────────────
categories.push({
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/533",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2127&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/701",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2273&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/537",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2128&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/541",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2129&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/634",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2130&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/545",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2131&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/543",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2132&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/546",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2264&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/547",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2133&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/637",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2134&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/639",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2135&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/640",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2136&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/548",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2137&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/641",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2138&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/642",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2140&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/549",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2139&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/550",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2141&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/551",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2142&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/552",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2143&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/553",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2144&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/554",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2145&cdOrgao=2",
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
            name: "Fiscalização de Imóvel Abandonado", 
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/555",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2146&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/556",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2147&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/558",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2149&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/559",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2150&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/560",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2151&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/561/",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2152&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/562",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2153&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/563",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2154&cdOrgao=2",
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
            name: "Solicitar Fiscalização e/ou Orientação", 
            tag: "Orientação", 
            desc: "Solicitação de orientação ou fiscalização.", 
            keywords: [
              "orientação", 
              "dúvida", 
              "informação", 
              "ajuda",
              "tirar dúvida", 
              "perguntar fiscalização", 
              "informação fiscalização"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/564",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2155&cdOrgao=2",
          }
        ]
      }
    ]
});
