  // ─── ESPORTE E LAZER ────────────────────────
categories.push({
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/579",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/580",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/581",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/583",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/584",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      }
    ]
});
