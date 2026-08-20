  // ─── AGRICULTURA E ZONA RURAL ───────────────
categories.push({
    id: "agricultura",
    icon: "temaki:plant",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Agricultura e Zona Rural",
    desc: "Atendimento em infraestrutura, abastecimento e comercialização agrícola.",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/492",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2061&cdOrgao=2",
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/493",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/494",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/495",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
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
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/496",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
      }
    ]
});
