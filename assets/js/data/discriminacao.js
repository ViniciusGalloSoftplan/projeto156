  // ─── DISCRIMINAÇÃO ──────────────────────────
categories.push({
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/531",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2093&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/532",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2094&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/534",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2095&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/535",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2096&cdOrgao=2",
      }
    ]
});
