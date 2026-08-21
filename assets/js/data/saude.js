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
            name: "Informações e Reclamações Sobre o (SITSS)", 
            tag: "Transporte", 
            desc: "Informações sobre transporte para consultas e exames médicos pelo SUS.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2195&cdOrgao=2",
          },
          { 
            icon: "tabler:ambulance",
            name: "Ambulância", 
            tag: "Transporte", 
            desc: "Informações e reclamações sobre ambulâncias.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2196&cdOrgao=2",
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
            name: "Demora no Agendamento de Consulta", 
            tag: "SUS", 
            desc: "Reclamação sobre demora de agendamento de consulta pelo SUS.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2197&cdOrgao=2",
          },
          { 
            icon: "ph:pill",
            name: "Falta de Medicamentos em Farmácias Municipais", 
            tag: "SUS", 
            desc: "Reclamação sobre a falta de medicamentos em farmácias municipais.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2198&cdOrgao=2",
          },
          { 
            icon: "tabler:stretching",
            name: "Reclamação sobre Agendamento de Fisioterapia", 
            tag: "SUS", 
            desc: "Reclamação sobre demora no agendamento ou falta de vaga em Fisioterapia.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2199&cdOrgao=2",
          },
          { 
            icon: "streamline-plump:medical-bag",
            name: "Demora no Agendamento de Cirurgia pelo SUS", 
            tag: "SUS", 
            desc: "Reclamação sobre demora no agendamento de cirurgia pelo SUS.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2200&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2202&cdOrgao=2",
          },
          { 
            icon: "hugeicons:hospital-bed-02",
            name: "Falta de Vaga Hospitalar", 
            tag: "SUS", 
            desc: "Reclamação sobre a falta de vaga hospitalar pelo SUS.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2201&cdOrgao=2",
          },
          { 
            icon: "fluent:clipboard-pulse-20-regular",
            name: "Demora no Agendamento de Exames", 
            tag: "SUS", 
            desc: "Reclamação sobre demora no agendamento de exames pelo SUS.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2203&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2204&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2205&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2206&cdOrgao=2",
          }
        ]
      },
      {
        id: "atendimento_sus",
        name: "Atendimento e Funcionários do SUS",
        icon: "tabler:user-exclamation",
        desc: "Reclamações sobre atendimento e conduta de funcionários do SUS.",
        services: [
          {
            icon: "tabler:mood-annoyed",
            name: "Reclamação de Funcionários do SUS",
            tag: "Atendimento",
            desc: "Reclamação sobre atendimento inadequado ou conduta de funcionários do SUS.",
            keywords: [
              "funcionário",
              "atendimento",
              "sus",
              "mau atendimento",
              "funcionário sus",
              "reclamar funcionário",
              "atendimento ruim sus",
              "grosseria sus"
            ],
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/TBD",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=TBD&cdOrgao=2",
          }
        ]
      }
    ]
});
