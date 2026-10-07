  // ─── SEGURANÇA E JUSTIÇA ────────────────────
categories.push({
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/587",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2207&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/588",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2208&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/589",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2209&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/590",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2210&cdOrgao=2",
          }
        ]
      },
      {
        id: "procuradoria_juridico",
        name: "Procuradoria e Assuntos Jurídicos",
        icon: "tabler:gavel",
        desc: "Decisões, intimações e demandas judiciais dirigidas ao Município.",
        services: [
          {
            icon: "ph:gavel",
            name: "Protocolar Decisão Judicial",
            tag: "Jurídico",
            desc: "Envio de decisões, liminares, mandados e intimações judiciais à Procuradoria Geral do Município.",
            keywords: [
              "decisão judicial",
              "liminar",
              "mandado",
              "intimação",
              "intimacao",
              "procuradoria",
              "pgm",
              "advogado",
              "oficial de justiça",
              "ordem judicial",
              "processo judicial",
              "notificação judicial"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/759",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2333&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/594",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2211&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/596",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2212&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/597",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2213&cdOrgao=2",
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/700",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2214&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/599",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2215&cdOrgao=4",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/600",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2268&cdOrgao=2",
          }
        ]
      }
    ]
});
