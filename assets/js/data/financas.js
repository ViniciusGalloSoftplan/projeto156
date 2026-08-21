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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2125&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2126&cdOrgao=2",
      },
      {
        icon: "tabler:shield-lock",
        name: "Informação sobre Taxa de Poder de Polícia",
        tag: "Tributário",
        desc: "Informações sobre a Taxa de Poder de Polícia.",
        keywords: [
          "taxa",
          "poder de polícia",
          "tributo",
          "fiscalização",
          "taxa de fiscalização",
          "taxa poder polícia"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/704",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2277&cdOrgao=2",
      },
      {
        icon: "tabler:receipt-2",
        name: "Informação sobre ISS",
        tag: "Tributário",
        desc: "Informações sobre o Imposto Sobre Serviços (ISS).",
        keywords: [
          "iss",
          "imposto",
          "serviço",
          "tributo",
          "imposto sobre serviço",
          "nota fiscal de serviço"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/705",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2278&cdOrgao=2",
      },
      {
        icon: "tabler:copy-check",
        name: "Informações Duplicidade de Pagamento (Compensação)",
        tag: "Tributário",
        desc: "Informações sobre duplicidade de pagamento e compensação tributária.",
        keywords: [
          "duplicidade",
          "pagamento",
          "compensação",
          "tributo",
          "paguei duas vezes",
          "pagamento em dobro",
          "compensar pagamento"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/706",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2280&cdOrgao=2",
      },
      {
        icon: "tabler:file-check",
        name: "Informação de Baixa de Pagamentos",
        tag: "Tributário",
        desc: "Informações sobre a baixa de pagamentos de tributos.",
        keywords: [
          "baixa",
          "pagamento",
          "tributo",
          "quitação",
          "baixa de pagamento",
          "comprovar pagamento",
          "dar baixa"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/707",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2281&cdOrgao=2",
      },
      {
        icon: "tabler:home-dollar",
        name: "Informação sobre ITBI",
        tag: "Tributário",
        desc: "Informações sobre o Imposto de Transmissão de Bens Imóveis (ITBI).",
        keywords: [
          "itbi",
          "imposto",
          "transmissão",
          "imóvel",
          "transferência de imóvel",
          "compra de imóvel",
          "escritura"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/708",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2282&cdOrgao=2",
      },
      {
        icon: "tabler:building-bank",
        name: "Identificação de Cadastro Imobiliário",
        tag: "Tributário",
        desc: "Identificação do número de cadastro imobiliário do imóvel.",
        keywords: [
          "cadastro imobiliário",
          "imóvel",
          "número do cadastro",
          "cadastro",
          "identificar cadastro",
          "número do imóvel"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/709",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2283&cdOrgao=2",
      },
      {
        icon: "tabler:file-description",
        name: "Identificação de Matrícula do Imóvel",
        tag: "Tributário",
        desc: "Identificação do número de matrícula do imóvel.",
        keywords: [
          "matrícula",
          "imóvel",
          "cartório",
          "registro",
          "número da matrícula",
          "matrícula do imóvel"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/710",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2284&cdOrgao=2",
      },
      {
        icon: "tabler:map-pin-search",
        name: "Identificação do Local do Imóvel",
        tag: "Tributário",
        desc: "Identificação da localização do imóvel.",
        keywords: [
          "localização",
          "imóvel",
          "endereço",
          "local",
          "onde fica o imóvel",
          "localizar imóvel"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/711",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2285&cdOrgao=2",
      },
      {
        icon: "lucide:signpost",
        name: "Identificação da Denominação de Via Pública",
        tag: "Tributário",
        desc: "Identificação do nome oficial de via pública para fins de cadastro.",
        keywords: [
          "denominação",
          "via pública",
          "nome de rua",
          "logradouro",
          "nome oficial da rua",
          "identificar rua"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/712",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2286&cdOrgao=2",
      },
      {
        icon: "tabler:building-store",
        name: "Informações de Administração Financeira / Contabilidade e Tesouraria",
        tag: "Tributário",
        desc: "Informações sobre administração financeira, contabilidade e tesouraria municipal.",
        keywords: [
          "administração financeira",
          "contabilidade",
          "tesouraria",
          "financeiro",
          "informação contábil",
          "orçamento municipal"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/712",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2286&cdOrgao=2",
      },
      {
        icon: "tabler:report-money",
        name: "Informações sobre Tributos em Geral Referentes ao Exercício Corrente",
        tag: "Tributário",
        desc: "Informações gerais sobre tributos referentes ao exercício corrente.",
        keywords: [
          "tributo",
          "exercício corrente",
          "imposto",
          "ano atual",
          "tributos do ano",
          "informação tributária"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/714",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2288&cdOrgao=2",
      },
      {
        icon: "tabler:user-question",
        name: "Orientação Geral ao Contribuinte",
        tag: "Tributário",
        desc: "Orientação geral ao contribuinte sobre assuntos tributários.",
        keywords: [
          "orientação",
          "contribuinte",
          "dúvida",
          "tributo",
          "orientar contribuinte",
          "ajuda tributária"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/715",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2289&cdOrgao=2",
      },
      {
        icon: "tabler:file-pencil",
        name: "Dúvidas sobre o Cadastro e Alteração de Cadastro no Sistema Sem Papel",
        tag: "Digital",
        desc: "Dúvidas sobre cadastro e alteração de cadastro no Sistema Sem Papel.",
        keywords: [
          "sem papel",
          "cadastro",
          "alteração de cadastro",
          "sistema",
          "cadastrar sem papel",
          "mudar cadastro"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/716",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2290&cdOrgao=2",
      },
      {
        icon: "tabler:info-circle",
        name: "Informações Gerais sobre o Sistema Sem Papel (Tributos)",
        tag: "Digital",
        desc: "Informações gerais sobre o Sistema Sem Papel relacionadas a tributos.",
        keywords: [
          "sem papel",
          "sistema",
          "tributos",
          "informação geral",
          "como usar sem papel",
          "dúvida sistema"
        ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/717",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2291&cdOrgao=2",
      }
    ]
});
