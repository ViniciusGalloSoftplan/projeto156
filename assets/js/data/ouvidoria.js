  // ─── OUVIDORIA ──────────────────────────────
categories.push({
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/569",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/568",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/698",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/570",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/572",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/573",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      }
    ]
});
