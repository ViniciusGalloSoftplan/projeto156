  // ─── FINANÇAS PÚBLICAS ──────────────────────
categories.push({
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/585",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/586",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
      }
    ]
});
