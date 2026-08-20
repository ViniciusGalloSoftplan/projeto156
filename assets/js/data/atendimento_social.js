  // ─── ATENDIMENTO SOCIAL ─────────────────────
categories.push({
    id: "atendimento_social",
    icon: "fa-solid:hands-helping",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Atendimento Social",
    desc: "Apoio a famílias vulneráveis, benefícios sociais e grupos em situação de vulnerabilidade.",
    subcategories: [
      {
        id: "beneficios",
        name: "Benefícios e Programas",
        icon: "mdi:card-account-details-outline",
        desc: "Benefícios e programas sociais.",
        services: [
          { 
            icon: "ph:money", 
            name: "Auxílio Brasil", 
            tag: "Benefício", 
            desc: "Informações e solicitações sobre o Auxílio Brasil.", 
            keywords: [
              "auxílio brasil", 
              "bolsa família", 
              "benefício social", 
              "transferência de renda", 
              "auxílio governo", 
              "dinheiro governo", 
              "ajuda financeira"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/514",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "ph:list-checks", 
            name: "Cadastro Único", 
            tag: "Cadastro", 
            desc: "Inscrição e atualização no Cadastro Único.", 
            keywords: [
              "cadúnico", 
              "cadastro único", 
              "inscrição social", 
              "registro governamental", 
              "cadastrar governo", 
              "cadastro social", 
              "fazer cadastro"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/515",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "ph:house", 
            name: "Casa Própria", 
            tag: "Habitação", 
            desc: "Informações sobre programas de habitação popular.", 
            keywords: [
              "casa própria", 
              "moradia popular", 
              "programa habitacional", 
              "financiamento de casa", 
              "comprar casa", 
              "casa financiada", 
              "minha casa minha vida"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/516",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "cil:basket", 
            name: "Cesta Básica", 
            tag: "Benefício", 
            desc: "Solicitação e informações sobre distribuição de cestas básicas.", 
            keywords: [
              "cesta básica", 
              "alimentação", 
              "cesta de alimentos", 
              "distribuição de comida", 
              "comida grátis", 
              "ajuda alimentação", 
              "cesta de alimentos"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/517",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "crianca_adolescente",
        name: "Criança e Adolescente",
        icon: "ph:baby",
        desc: "Atendimento a crianças e adolescentes.",
        services: [
          { 
            icon: "mdi:account-child", 
            name: "Criança e Adolescente", 
            tag: "Criança", 
            desc: "Atendimento a crianças e adolescentes em vulnerabilidade.", 
            keywords: [
              "criança", 
              "adolescente",
              "menor", 
              "infância", 
              "criança precisando ajuda",
              "ajuda criança", 
              "criança em risco"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/518",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "mdi:shield-alert-outline", 
            name: "Trabalho Infantil", 
            tag: "Criança", 
            desc: "Denúncia de trabalho infantil.", 
            keywords: [
              "trabalho infantil", 
              "menor trabalhando", 
              "criança trabalhando", 
              "exploração infantil", 
              "criança no trabalho", 
              "menor empregado", 
              "criança vendendo"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/519",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "idoso",
        name: "Idoso",
        icon: "ph:user",
        desc: "Atendimento e proteção a idosos.",
        services: [
          { 
            icon: "ph:user", 
            name: "Idoso", 
            tag: "Idoso", 
            desc: "Atendimento e proteção a idosos em vulnerabilidade.", 
            keywords: [
              "idoso", 
              "terceira idade", 
              "velho", 
              "pessoa idosa", 
              "velhinho", 
              "ajuda idoso", 
              "idoso precisando ajuda"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/520",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "situacao_rua",
        name: "Pessoa em Situação de Rua",
        icon: "material-symbols:shield-outline",
        desc: "Atendimento e encaminhamento de pessoas em situação de rua.",
        services: [
          { 
            icon: "tabler:home-off", 
            name: "Pessoa em Situação de Rua", 
            tag: "Vulnerabilidade", 
            desc: "Atendimento e encaminhamento de pessoas em situação de rua.", 
            keywords: [
              "situação de rua", 
              "morador de rua", 
              "sem teto", 
              "população de rua", 
              "sem casa", 
              "morando na rua", 
              "pessoa sem lar"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/528",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "pessoa_deficiencia",
        name: "Pessoa com Deficiência",
        icon: "ph:wheelchair",
        desc: "Atendimento a pessoas com deficiência.",
        services: [
          { 
            icon: "ph:wheelchair", 
            name: "Pessoa com Deficiência", 
            tag: "Deficiência", 
            desc: "Atendimento a pessoas com deficiência.", 
            keywords: [
              "deficiente", 
              "pcd", 
              "pessoa com deficiência", 
              "necessidade especial", 
              "portador de deficiência", 
              "deficiência", 
              "cadeirante"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/529",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "saude_mental",
        name: "Saúde Mental",
        icon: "boxicons:brain",
        desc: "Atendimento e encaminhamento para saúde mental.",
        services: [
          { 
            icon: "boxicons:brain", 
            name: "Saúde Mental", 
            tag: "Saúde Mental", 
            desc: "Atendimento e encaminhamento para saúde mental.", 
            keywords: [
              "saúde mental", 
              "psicológico", 
              "depressão", 
              "ansiedade", 
              "psicólogo", 
              "ajuda psicológica", 
              "problema mental"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/530",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      }
    ]
});
