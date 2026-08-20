  // ─── SAÚDE PÚBLICA ──────────────────────────
categories.push({
    id: "saude",
    icon: "tabler:heart-plus",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Saúde Pública",
    desc: "Transporte de pacientes, procedimentos SUS e unidades de saúde.",
    subcategories: [
      {
        id: "transporte_sus",
        name: "Transporte para Consultas e Exames",
        icon: "fa6-solid:truck-medical",
        desc: "Serviços de transporte de pacientes pelo SUS.",
        services: [
          { 
            icon: "lucide:van",
            name: "Carro da Prefeitura para Consulta (SITSS)", 
            tag: "Transporte", 
            desc: "Solicite carro da prefeitura para levar você a consultas e exames médicos pelo SUS.", 
            keywords: [
              "sitss", 
              "transporte", 
              "consulta", 
              "exame", 
              "transporte médico", 
              "carro saúde", 
              "transporte sus", 
              "carro prefeitura", 
              "ônibus médico"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/613",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:ambulance",
            name: "Ambulância", 
            tag: "Transporte", 
            desc: "Solicite ambulância para transporte de paciente.", 
            keywords: [
              "ambulância", 
              "emergência", 
              "transporte", 
              "paciente", 
              "socorro", 
              "emergência médica", 
              "chamar ambulância", 
              "samu"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/615",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "procedimentos_sus",
        name: "Consultas, Exames e Medicamentos",
        icon: "tabler:stethoscope",
        desc: "Consultas, exames, medicamentos e procedimentos pelo SUS.",
        services: [
          { 
            icon: "fa6-solid:user-doctor",
            name: "Consulta Médica", 
            tag: "SUS", 
            desc: "Solicite ou agende consulta pelo SUS.", 
            keywords: [
              "consulta", 
              "médico", 
              "atendimento", 
              "sus", 
              "marcar consulta", 
              "agendar médico", 
              "consulta médica", 
              "ir ao médico"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/620",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "ph:pill",
            name: "Remédio de Graça", 
            tag: "SUS", 
            desc: "Retire medicamentos nas farmácias da rede municipal.", 
            keywords: [
              "farmácia", 
              "remédio", 
              "medicamento", 
              "drogaria", 
              "pegar remédio", 
              "medicamento grátis", 
              "farmácia municipal", 
              "remédio sus"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/699",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:stretching",
            name: "Fisioterapia", 
            tag: "SUS", 
            desc: "Solicite fisioterapia pelo SUS.", 
            keywords: [
              "fisioterapia", 
              "reabilitação", 
              "fisioterapeuta", 
              "terapia", 
              "sessão fisioterapia", 
              "tratamento fisioterapia", 
              "fisioterapeuta sus"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/621",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "streamline-plump:medical-bag",
            name: "Cirurgia pelo SUS", 
            tag: "SUS", 
            desc: "Solicite informações sobre cirurgia pelo SUS.", 
            keywords: [
              "cirurgia", 
              "operação", 
              "cirurgião", 
              "procedimento", 
              "operar", 
              "cirurgia pelo sus", 
              "marcar cirurgia"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/622",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:vaccine",
            name: "Vacina", 
            tag: "Prevenção", 
            desc: "Informações e pontos de vacinação.", 
            keywords: [
              "vacina", 
              "vacinação", 
              "imunização", 
              "posto de saúde", 
              "tomar vacina", 
              "vacinar", 
              "posto vacinação", 
              "vacina grátis"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/623",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "hugeicons:hospital-bed-02",
            name: "Internação no Hospital", 
            tag: "SUS", 
            desc: "Solicite vaga hospitalar pelo SUS.", 
            keywords: [
              "hospital", 
              "internação", 
              "vaga", 
              "leito", 
              "internar", 
              "leito hospital", 
              "vaga no hospital", 
              "precisar internar"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/627",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "fluent:clipboard-pulse-20-regular",
            name: "Exame Médico", 
            tag: "SUS", 
            desc: "Demora no agendamento de consulta ou no agendamento de exames", 
            keywords: [
              "exame", 
              "laboratório", 
              "raio x", 
              "sangue", 
              "fazer exame", 
              "agendar exame", 
              "exame laboratório", 
              "exame de sangue"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/629",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "material-symbols:pill-off-outline",
            name: "Falta de Remédio ou Material", 
            tag: "SUS", 
            desc: "Comunique falta de insumos em unidade de saúde.", 
            keywords: [
              "falta", 
              "material", 
              "insumo", 
              "estoque", 
              "sem material", 
              "falta remédio", 
              "sem insumo", 
              "falta medicamento"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/630",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "unidade_saude",
        name: "Postos de Saúde",
        icon: "tabler:building-hospital",
        desc: "Infraestrutura e suprimentos das unidades de saúde.",
        services: [
          { 
            icon: "ph:hospital-light",
            name: "Prédio do Posto de Saúde", 
            tag: "Unidade", 
            desc: "Problemas de estrutura física em unidade de saúde.", 
            keywords: [
              "estrutura", 
              "prédio", 
              "construção", 
              "manutenção", 
              "posto de saúde", 
              "ubs", 
              "unidade básica"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/697",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "mdi:cog-off-outline",
            name: "Aparelho Quebrado", 
            tag: "Unidade", 
            desc: "Problemas com equipamentos em unidade de saúde.", 
            keywords: [
              "equipamento", 
              "aparelho", 
              "máquina", 
              "conserto", 
              "aparelho quebrado", 
              "máquina ruim", 
              "equipamento defeito", 
              "aparelho médico"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/632",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      }
    ]
});
