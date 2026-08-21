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
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2156&cdOrgao=2",
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
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2157&cdOrgao=2",
          },
          { 
            icon: "tabler:line-dashed",
            name: "Implantação ou Manutenção de Faixas de Sinalização", 
            tag: "Sinalização", 
            desc: "Implantação ou manutenção de faixas de sinalização horizontal.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2158&cdOrgao=2",
          },
          { 
            icon: "ic:baseline-abc",
            name: "Implantação ou Manutenção de Legendas Pintadas na Via", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2159&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2160&cdOrgao=2",
          },
          { 
            icon: "bi:arrows-move",
            name: "Implantação/Manutenção de Setas de Sinalização", 
            tag: "Sinalização", 
            desc: "Implantação ou manutenção de setas de sinalização horizontal.", 
            keywords: [
              "seta", 
              "direção", 
              "pintura", 
              "sinalização", 
              "seta no chão", 
              "seta na rua"
            ], 
        link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/619",
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2161&cdOrgao=2",
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
            name: "Implantação/Manutenção de Vagas de Estacionamento na Via", 
            tag: "Sinalização", 
            desc: "Implantação ou manutenção de vagas de estacionamento na via.", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2162&cdOrgao=2",
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
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2163&cdOrgao=2",
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
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2164&cdOrgao=2",
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
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2165&cdOrgao=2",
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
            name: "Implantação/Manutenção de Semáforo", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2166&cdOrgao=2",
          },
          { 
            icon: "ph:gauge",
            name: "Implantação/Manutenção de Radares de Velocidade", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2167&cdOrgao=2",
          },
          { 
            icon: "mdi:sine-wave",
            name: "Implantação ou Manutenção de Lombada", 
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2168&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2170&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2169&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2171&cdOrgao=2",
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
        linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2172&cdOrgao=2",
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
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2270&cdOrgao=2",
          }
        ]
      },
      {
        id: "transito_veiculos_abandonados",
        name: "Veículos Abandonados",
        icon: "mdi:car-off",
        desc: "Veículos abandonados ou sucateados em vias públicas.",
        services: [
          {
            icon: "hugeicons:car-alert",
            name: "Carro Abandonado na Rua",
            tag: "Regras e Normas",
            desc: "Denúncia de veículo abandonado em via pública.",
            keywords: [
              "carro abandonado",
              "veículo velho",
              "carro ferro",
              "sucata",
              "carro quebrado",
              "veículo abandonado",
              "carro velho na rua",
              "carro sem dono"
            ],
            link: "https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/557",
            linkInterno: "/cpav/abrirCadastroProcessoDinamico.do?cdClasse=2148&cdOrgao=2",
          }
        ]
      }
    ]
});
