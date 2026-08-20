  // ─── LIMPEZA PÚBLICA ───────────────────────────
categories.push({
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/624",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/625",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/626",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:alert-triangle",
            name: "Reclamação de Coleta de Lixo Domiciliar", 
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/628",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/633",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/635",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/636",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/638",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      }
    ]
});
