  // ─── ANIMAIS ────────────────────────────────
categories.push({
    id: "animais",
    icon: "fluent-emoji-high-contrast:paw-prints",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Animais",
    desc: "Demandas relacionadas a animais domésticos, fauna silvestre, zoonoses e controle de pragas.",
    subcategories: [
      {
        id: "animais_geral",
        name: "Criação de Animais",
        icon: "lucide-lab:barn",
        desc: "Demandas gerais sobre animais.",
        services: [
          { 
            icon: "ph:cow", 
            name: "Criação de Animais", 
            tag: "Geral", 
            desc: "Solicitações e reclamações sobre criação de animais.", 
            keywords: [
              "criação", 
              "animais de criação", 
              "criação de gado", 
              "animais domésticos", 
              "criar animais", 
              "fazenda animais"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/497",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "dedetizacao",
        name: "Pragas e Insetos",
        icon: "solar:bug-outline",
        desc: "Controle de pragas urbanas.",
        services: [
          { 
            icon: "fluent-emoji-high-contrast:cockroach", 
            name: "Barata", 
            tag: "Pragas", 
            desc: "Denúncia de infestação de baratas.", 
            keywords: [
              "baratas", 
              "insetos", 
              "praga doméstica", 
              "barata de esgoto", 
              "infestação", 
              "muitas baratas", 
              "barata na casa"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/498",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "fluent-emoji-high-contrast:mosquito", 
            name: "Pernilongo", 
            tag: "Pragas", 
            desc: "Denúncia de infestação de pernilongos.", 
            keywords: [
              "mosquito", 
              "pernilongo", 
              "inseto voador", 
              "mosquito comum", 
              "muriçoca", 
              "pernilongo picando", 
              "mosquito picando"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/499",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "fluent-emoji-high-contrast:rat", 
            name: "Rato", 
            tag: "Pragas", 
            desc: "Denúncia de infestação de ratos.", 
            keywords: [
              "ratos", 
              "roedores", 
              "camundongo", 
              "ratazana", 
              "ratos grandes", 
              "infestação de rato", 
              "rato na casa"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/500",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "caes_gatos",
        name: "Cães e Gatos",
        icon: "ph:dog",
        desc: "Assuntos relacionados a cães e gatos.",
        services: [
          { 
            icon: "tabler:trash-x", 
            name: "Falta de Higiene", 
            tag: "Bem-estar", 
            desc: "Reclamações sobre falta de higiene com cães e gatos.", 
            keywords: [
              "sujeira de animal", 
              "fezes de cachorro", 
              "higiene animal", 
              "limpeza de animal", 
              "bicho sujo", 
              "fezes na rua", 
              "fezes de cachorro na calçada"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/501",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:heart-handshake", 
            name: "Projeto Tutor", 
            tag: "Programa", 
            desc: "Demandas sobre o Programa Tutor Responsável.", 
            keywords: [
              "tutor responsável", 
              "programa tutor", 
              "registro de animal", 
              "tutoria", 
              "cadastro animal", 
              "chip animal"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/502",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "solar:stethoscope-bold", 
            name: "Castração", 
            tag: "Controle Populacional", 
            desc: "Reclamação sobre castração de cães e gatos.", 
            keywords: [
              "castrar", 
              "esterilizar", 
              "cirurgia de castração", 
              "controle de natalidade", 
              "castração cachorro", 
              "castração gato"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/503",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "material-symbols:skull-outline", 
            name: "Recolhimento de Animal Atropelado", 
            tag: "Atendimento", 
            desc: "Recolhimento de Animal Atropelado em via pública.", 
            keywords: [
              "animal morto", 
              "cadáver", 
              "remoção de animal", 
              "carcaça", 
              "bicho morto", 
              "corpo de animal", 
              "cachorro morto"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/504",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "mdi:shield-alert-outline", 
            name: "Animal em Risco", 
            tag: "Atendimento", 
            desc: "Solicitação para animal vivo em situação de risco.", 
            keywords: [
              "animal ferido", 
              "animal perdido", 
              "animal abandonado", 
              "resgate animal", 
              "bicho ferido", 
              "ajuda animal", 
              "cachorro atropelado"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/505",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:home-heart", 
            name: "Posse Responsável de Animais", 
            tag: "Orientação", 
            desc: "Orientações sobre guarda responsável de animais.", 
            keywords: [
              "posse responsável", 
              "cuidar de animal", 
              "responsabilidade animal", 
              "dono de animal", 
              "bem estar animal", 
              "cuidar cachorro"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/506",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "zoonoses",
        name: "Animais Silvestres",
        icon: "game-icons:deer",
        desc: "Controle e monitoramento de vetores de risco à saúde pública.",
        services: [
          { 
            icon: "tabler:deer", 
            name: "Animais Silvestres", 
            tag: "Fauna", 
            desc: "Solicitações sobre animais silvestres.", 
            keywords: [
              "animal selvagem", 
              "fauna silvestre", 
              "animal nativo", 
              "bicho do mato", 
              "animal silvestre", 
              "bicho da mata"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/507",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "mdi:snail", 
            name: "Caramujo", 
            tag: "Zoonoses", 
            desc: "Orientação sobre ocorrências de caramujos.", 
            keywords: [
              "caramujo", 
              "lesma", 
              "molusco", 
              "caramujo africano", 
              "caramujo na casa", 
              "lesma no jardim"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/508",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "healthicons:animal-tick-outline", 
            name: "Carrapato e Pulga", 
            tag: "Zoonoses", 
            desc: "Orientação sobre carrapatos e pulgas.", 
            keywords: [
              "carrapato", 
              "pulga", 
              "piolho de animal", 
              "parasita", 
              "carrapato cachorro", 
              "pulga gato"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/509",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "game-icons:scorpion", 
            name: "Escorpião", 
            tag: "Zoonoses", 
            desc: "Orientação sobre ocorrências de escorpiões.", 
            keywords: [
              "escorpião", 
              "aracnídeo", 
              "picada de escorpião", 
              "escorpião amarelo", 
              "escorpião na casa", 
              "picada escorpião"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/510",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "mdi:bat", 
            name: "Morcego", 
            tag: "Zoonoses", 
            desc: "Orientação sobre ocorrências de morcegos.", 
            keywords: [
              "morcego", 
              "morcego urbano", 
              "raiva", 
              "morcego em casa", 
              "morcego no telhado", 
              "morcego voando"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/511",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "icon-park-outline:pigeon", 
            name: "Pomba", 
            tag: "Zoonoses", 
            desc: "Orientação sobre ocorrências de pombas.", 
            keywords: [
              "pombo", 
              "pombo urbano", 
              "pombo de rua", 
              "praga de pomba", 
              "muitos pombos", 
              "pombo na varanda"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/512",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "boxicons:archive-arrow-down", 
            name: "Recolhimento de Morcego", 
            tag: "Zoonoses", 
            desc: "Solicitação de recolhimento de morcego.", 
            keywords: [
              "morcego", 
              "captura de morcego", 
              "remoção de morcego", 
              "morcego preso", 
              "tirar morcego", 
              "morcego preso na casa"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/511",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
    ]
});
