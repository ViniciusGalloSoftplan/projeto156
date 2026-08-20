  // ─── EDUCAÇÃO ───────────────────────────────
categories.push({
    id: "educacao",
    icon: "tabler:school",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Educação",
    desc: "Escola municipal, escola particular, transporte escolar, manutenção e espaços esportivos.",
    subcategories: [
      {
        id: "escola_particular",
        name: "Escola Particular",
        icon: "tabler:building",
        desc: "Demandas relacionadas às escolas particulares.",
        services: [
          { 
            icon: "mdi:presentation", 
            name: "Metodologia", 
            tag: "Pedagógico", 
            desc: "Reclamações sobre metodologias em escolas particulares.", 
            keywords: [
              "método de ensino", 
              "pedagogia", 
              "forma de ensinar", 
              "didática", 
              "ensino particular", 
              "metodologia escola"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/536",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:file-certificate", 
            name: "Documentação", 
            tag: "Administrativo", 
            desc: "Solicitações sobre documentação em escolas particulares.", 
            keywords: [
              "documentos", 
              "papéis", 
              "matrícula", 
              "histórico", 
              "transferência", 
              "certificado"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/538",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "escola_municipal",
        name: "Escola Municipal",
        icon: "boxicons:school",
        desc: "Demandas relacionadas às escolas municipais.",
        services: [
          { 
            icon: "ph:wheelchair",
            name: "Acessibilidade", 
            tag: "Inclusão", 
            desc: "Solicitações de acessibilidade nas escolas municipais.", 
            keywords: [
              "acesso", 
              "rampa", 
              "adaptado", 
              "inclusão", 
              "cadeira de rodas", 
              "acessível", 
              "banheiro adaptado"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/539",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:first-aid-kit",
            name: "Acidente com Aluno", 
            tag: "Segurança", 
            desc: "Comunique acidentes envolvendo alunos na escola.", 
            keywords: [
              "acidente", 
              "lesão", 
              "ferimento", 
              "emergência escolar", 
              "aluno machucado", 
              "acidente na escola", 
              "aluno se machucou"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/542",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:user-x",
            name: "Falta de Aula ou Professor", 
            tag: "Ensino", 
            desc: "Denuncie ausência de professor ou aulas canceladas sem justificativa.", 
            keywords: [
              "sem professor", 
              "falta de aula", 
              "sala vazia", 
              "professor faltou", 
              "professor não veio", 
              "aula sem professor", 
              "escola fechou"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/540",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:apple",
            name: "Merenda", 
            tag: "Alimentação", 
            desc: "Reclamações ou solicitações sobre a merenda escolar.", 
            keywords: [
              "alimentação", 
              "lanche", 
              "comida escolar", 
              "refeição", 
              "merenda escolar", 
              "comida na escola", 
              "lanche da escola"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/544",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:users-group",
            name: "Auxiliar para Aluno com Necessidade Especial", 
            tag: "Inclusão", 
            desc: "Reclamação sobre auxiliar para aluno com necessidade especial.", 
            keywords: [
              "auxiliar", 
              "acompanhante", 
              "monitor", 
              "apoio especial", 
              "ajuda especial", 
              "cuidador", 
              "acompanhante especial"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/565",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "ph:student",
            name: "Vaga Escolar", 
            tag: "Matrícula", 
            desc: "Solicite vaga em escola municipal.", 
            keywords: [
              "matrícula", 
              "vaga", 
              "inscrição", 
              "escola", 
              "entrar na escola", 
              "vaga para estudar", 
              "colocar filho na escola"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/566",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "cieja",
        name: "Educação de Adultos",
        icon: "ph:book-open",
        desc: "Centro Integrado de Educação de Jovens e Adultos.",
        services: [
          { 
            icon: "ph:book-open",
            name: "Educação de Jovens e Adultos (CIEJA)", 
            tag: "CIEJA", 
            desc: "Demandas sobre o Centro Integrado de Educação de Jovens e Adultos.", 
            keywords: [
              "cieja", 
              "educação de jovens", 
              "supletivo", 
              "eja", 
              "escola para adultos", 
              "supletivo para adultos", 
              "terminar estudos"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/571",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "transporte_escolar",
        name: "Transporte Escolar",
        icon: "ph:bus",
        desc: "Demandas relacionadas ao transporte escolar.",
        services: [
          { 
            icon: "ph:wheelchair",
            name: "Acessibilidade", 
            tag: "Inclusão", 
            desc: "Solicite acessibilidade no transporte escolar.", 
            keywords: [
              "acesso", 
              "adaptado", 
              "cadeira de rodas", 
              "inclusão", 
              "ônibus adaptado", 
              "elevador"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/574",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:clock",
            name: "Atraso", 
            tag: "Transporte", 
            desc: "Reclame de atraso no transporte escolar.", 
            keywords: [
              "atrasado", 
              "demorou", 
              "não chegou", 
              "horário", 
              "ônibus atrasado", 
              "esperando ônibus", 
              "ônibus não chegou"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/575",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:bus-off",
            name: "Falta", 
            tag: "Transporte", 
            desc: "Comunique ausência do transporte escolar.", 
            keywords: [
              "não veio", 
              "faltou", 
              "sem ônibus", 
              "transporte não passou", 
              "ônibus faltou", 
              "sem transporte", 
              "ônibus não apareceu"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/576",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "manutencao_escolar",
        name: "Estrutura Escolar",
        icon: "mdi:hammer-wrench",
        desc: "Demandas sobre a estrutura física das escolas.",
        services: [
          { 
            icon: "mdi:grass",
            name: "Corte de Mato - Educação", 
            tag: "Manutenção", 
            desc: "Solicite corte de mato em área escolar.", 
            keywords: [
              "mato alto", 
              "capina", 
              "limpeza",
              "vegetação", 
              "mato na escola", 
              "capinar escola"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/577",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "fluent:paint-brush-12-regular",
            name: "Rachaduras e Pinturas", 
            tag: "Manutenção", 
            desc: "Solicite reparos em rachaduras ou pintura da escola.", 
            keywords: [
              "rachadura", 
              "pintura", 
              "parede", 
              "reparo", 
              "parede quebrada", 
              "pintura escola", 
              "conserto parede"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/578",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:ball-football",
            name: "Campo", 
            tag: "Esporte", 
            desc: "Solicitações sobre campos de futebol em escolas.", 
            keywords: [
              "campo de futebol", 
              "quadra", 
              "esporte", 
              "ginásio", 
              "campo escola", 
              "quadra esportiva"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/602",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:coin-off",
            name: "Cobrança Indevida", 
            tag: "Fiscalização", 
            desc: "Denúncia de cobrança indevida em espaços esportivos.", 
            keywords: [
              "cobrança", 
              "taxa", 
              "pagamento indevido", 
              "extorsão", 
              "cobrar indevido", 
              "taxa abusiva"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/604",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "mdi:stadium",
            name: "Ginásio ou Quadra", 
            tag: "Esporte", 
            desc: "Solicitações sobre ginásios ou quadras nas escolas.", 
            keywords: [
              "ginásio", 
              "quadra", 
              "esporte", 
              "poliesportiva", 
              "quadra coberta", 
              "ginásio escola"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/605",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
    ]
});
