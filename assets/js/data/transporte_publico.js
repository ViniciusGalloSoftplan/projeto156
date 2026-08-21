  // ─── TRANSPORTE PÚBLICO ───────────────────────
categories.push({
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/591",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2173&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/592",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2174&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/593",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2175&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/595",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2176&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/598",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2177&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/601",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2178&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/603",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2179&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/606",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2181&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/607",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2182&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/609",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2183&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/614",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2184&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/616",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2185&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/618",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2186&cdOrgao=2",
          }
        ]
      }
    ]
});
