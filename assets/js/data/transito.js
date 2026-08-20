  // ─── TRÂNSITO ─────────────────────────────────
categories.push({
    id: "transito",
    icon: "material-symbols:traffic-outline-sharp",
    color: "#2563eb",
    colorLight: "#dbeafe",
    name: "Trânsito",
    desc: "Sinalização, semáforos, radares, infraestrutura viária e fiscalização de trânsito.",
    subcategories: [
      {
        id: "transito_sinalizacao_horizontal",
        name: "Faixas e Pintura no Chão",
        icon: "tabler:road",
        desc: "Faixas, escritas, símbolos e áreas especiais na pista.",
        services: [
          { 
            icon: "lucide:motorbike",
            name: "Área para Moto", 
            tag: "Sinalização", 
            desc: "Demandas sobre áreas de espera de motos na pista.", 
            keywords: [
              "motobox", 
              "área de moto", 
              "espera de moto", 
              "moto", 
              "área moto", 
              "moto no semáforo"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/608",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "temaki:crossing-markings-zebra-bicolour",
            name: "Faixa de Pedestre", 
            tag: "Sinalização", 
            desc: "Solicite implantação ou recuperação de faixa de pedestre.", 
            keywords: [
              "faixa", 
              "travessia", 
              "passarela", 
              "atravessar", 
              "faixa de pedestre", 
              "atravessar rua", 
              "cruzamento", 
              "faixa de travessia"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/610",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:line-dashed",
            name: "Faixas na Pista", 
            tag: "Sinalização", 
            desc: "Problemas com faixas de sinalização horizontal.", 
            keywords: [
              "faixa", 
              "pintura", 
              "sinalização", 
              "marcação", 
              "faixa apagada", 
              "pintura rua", 
              "sinalização no chão", 
              "faixa desgastada"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/611",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "ic:baseline-abc",
            name: "Escrita na Pista", 
            tag: "Sinalização", 
            desc: "Problemas com legendas pintadas na pista.", 
            keywords: [
              "legenda", 
              "texto", 
              "escrita", 
              "pintura", 
              "escrita no chão", 
              "texto na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/612",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:icons",
            name: "Símbolos na Pista", 
            tag: "Sinalização", 
            desc: "Problemas com pictogramas na via.", 
            keywords: [
              "pictograma", 
              "símbolo", 
              "desenho", 
              "figura", 
              "desenho no chão", 
              "símbolo na pista"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/617",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "bi:arrows-move",
            name: "Setas na Pista", 
            tag: "Sinalização", 
            desc: "Problemas com setas de sinalização horizontal.", 
            keywords: [
              "seta", 
              "direção", 
              "pintura", 
              "sinalização", 
              "seta no chão", 
              "seta na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/619",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "transito_estacionamento",
        name: "Estacionamento",
        icon: "iconoir:parking",
        desc: "Vagas de estacionamento e zona azul.",
        services: [
          { 
            icon: "tabler:border-outer",
            name: "Vagas Pintadas", 
            tag: "Sinalização", 
            desc: "Demandas sobre vagas de estacionamento na pista.", 
            keywords: [
              "vaga", 
              "estacionamento", 
              "local", 
              "parar", 
              "vaga de carro", 
              "estacionar", 
              "local para estacionar", 
              "vaga pintada"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/643",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "mdi:car-clock",
            name: "Zona Azul", 
            tag: "Estacionamento", 
            desc: "Demandas sobre vagas regulamentadas pela Zona Azul.", 
            keywords: [
              "zona azul", 
              "estacionamento pago", 
              "vaga azul", 
              "cartão", 
              "pagar estacionamento", 
              "vaga com tempo", 
              "estacionar com cartão"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/644",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "transito_sinalizacao_vertical",
        name: "Placas e Sinalização",
        icon: "tabler:road-sign",
        desc: "Placas e postes de sinalização.",
        services: [
          { 
            icon: "at-icons:stop-sign",
            name: "Sinalização de Trânsito", 
            tag: "Sinalização", 
            desc: "Solicite instalação, manutenção ou troca de placas.", 
            keywords: [
              "placa", 
              "sinalização", 
              "poste", 
              "transito", 
              "placa de trânsito", 
              "sinal de trânsito", 
              "placa de rua", 
              "placa de pare"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/645",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "material-symbols-light:pin-outline-sharp",
            name: "Poste de Placa", 
            tag: "Sinalização", 
            desc: "Problemas com postes de sinalização vertical.", 
            keywords: [
              "poste", 
              "sinalização", 
              "placa", 
              "suporte", 
              "poste de placa", 
              "suporte de sinalização", 
              "poste torto"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/649",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "transito_semaforos_radares",
          name: "Semáforos e Radares",
          icon: "la:traffic-light",
          desc: "Semáforos, radares, lombadas e redutores de velocidade.",
        services: [
          { 
            icon: "tabler:traffic-lights-off",
            name: "Semáforo Quebrado", 
            tag: "CET", 
            desc: "Denúncia de semáforo defeituoso ou solicitação de novo semáforo.", 
            keywords: [
              "semáforo", 
              "sinal", 
              "luz", 
              "trânsito", 
              "sinal de trânsito", 
              "farol", 
              "semáforo quebrado", 
              "sinal não funciona"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/656",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "ph:gauge",
            name: "Radar de Velocidade", 
            tag: "CET", 
            desc: "Solicitação ou problemas relacionados a radares de velocidade.", 
            keywords: [
              "radar", 
              "multa", 
              "velocidade", 
              "fiscalização", 
              "radar de velocidade", 
              "multa por radar", 
              "medidor de velocidade", 
              "radar fixo"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/662",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "mdi:sine-wave",
            name: "Lombada ou Quebra-Mola", 
            tag: "CET", 
            desc: "Solicite implantação ou manutenção de lombada.", 
            keywords: [
              "lombada", 
              "quebra mola", 
              "redutor", 
              "velocidade", 
              "lombada na rua", 
              "redutor de velocidade", 
              "quebra-mola", 
              "lombada quebrada",
              "segurança",
              "diminuir velocidade",
              "redutor de velocidade rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/663",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
        ]
      },
      {
        id: "transito_ciclovias_bicicletas",
        name: "Ciclovias e Bicicletas",
        icon: "ph:bicycle",
        desc: "Ciclovias, ciclofaixas e paraciclos.",
        services: [
          { 
            icon: "mdi:bike-fast",
            name: "Ciclovia e Ciclofaixa", 
            tag: "Mobilidade Ativa", 
            desc: "Solicitação ou problemas sobre infraestrutura cicloviária.", 
            keywords: [
              "ciclovia", 
              "ciclofaixa", 
              "bicicleta", 
              "bike", 
              "pista de bike", 
              "caminho de bicicleta", 
              "via para bike"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/665",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "material-symbols:lock",
            name: "Paraciclo", 
            tag: "Mobilidade Ativa", 
            desc: "Solicite implantação ou manutenção de paraciclos.", 
            keywords: [
              "paraciclo", 
              "bicicletário", 
              "estacionar bike", 
              "bike", 
              "estacionar bicicleta", 
              "parar bicicleta", 
              "bicicletário na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/667",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "transito_alteracoes_rua",
        name: "Alterações de Rua",
        icon: "tabler:git-fork",
        desc: "Alterações e remodelações do sistema viário.",
        services: [
          { 
            icon: "tabler:git-fork",
            name: "Alteração de Rua", 
            tag: "Viário", 
            desc: "Solicitações de remodelação do sistema viário.", 
            keywords: [
              "remodelação", 
              "via", 
              "rua", 
              "alteração", 
              "mudar rua", 
              "alterar via", 
              "projeto viário"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/669",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      },
      {
        id: "transito_fiscalizacao",
        name: "Multas e Fiscalização",
        icon: "tabler:gavel",
        desc: "Multas e fiscalização de trânsito.",
        services: [
          { 
            icon: "tabler:file-text",
            name: "Multa de Trânsito", 
            tag: "Fiscalização", 
            desc: "Consulta, recurso e informações sobre multas de trânsito.", 
            keywords: [
              "multa", 
              "infração", 
              "pontos", 
              "cnh", 
              "multa de trânsito", 
              "pontos na carteira", 
              "recorrer multa", 
              "pagar multa"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/671",
        linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          },
          { 
            icon: "tabler:eye",
            name: "Fiscalização de Trânsito", 
            tag: "Fiscalização", 
            desc: "Demandas gerais sobre fiscalização de trânsito.", 
            keywords: [
              "fiscalização", 
              "multa", 
              "trânsito", 
              "polícia", 
              "fiscal de trânsito", 
              "guarda municipal", 
              "blitz trânsito"
            ], 
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/676",
            linkInterno: "", // TODO: preencher "/cpav/abrirCadastroProcessoDinamico.do?cdClasse={cdClasse}&cdOrgao={cdOrgao}" (ver getServiceLink)
          }
        ]
      }
    ]
});
