// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  DATA Ã¢â‚¬â€ categorias e serviÃƒÂ§os
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
const categories = [
  {
    id: "agricultura",
    icon: "Ã°Å¸Å’Â¾",
    color: "#16a34a",
    colorLight: "#dcfce7",
    name: "Agricultura & Zona Rural",
    desc: "ServiÃƒÂ§os voltados ao produtor rural, abastecimento e feiras livres.",
    subcategories: [
      {
        id: "feiras",
        name: "Feiras Livres e Comerciais",
        icon: "Ã°Å¸Â¥Â¬",
        desc: "PermissÃƒÂ£o e cadastro de barracas em feiras livres e mercados municipais.",
        services: [
          { icon: "Ã°Å¸â€œÂ", name: "Cadastro de Barracas", tag: "Comercial", desc: "SolicitaÃƒÂ§ÃƒÂ£o de cadastro para barracas em feiras livres.", link: "https://piracicaba-hml.solarbpm.softplan.com.br/form-dinamico-web/#/hml/answer/6a1eb5fde4b090bc98169e33/6a26d164e4b090bc98169ed7" },
          { icon: "Ã°Å¸â€œâ€¹", name: "PermissÃƒÂ£o de ComercializaÃƒÂ§ÃƒÂ£o", tag: "LicenÃƒÂ§a", desc: "AutorizaÃƒÂ§ÃƒÂ£o para comercializaÃƒÂ§ÃƒÂ£o em feiras municipais." }
        ]
      },
      {
        id: "agricultura_urbana",
        name: "Agricultura Urbana",
        icon: "Ã°Å¸Å’Â±",
        desc: "Apoio a hortas comunitÃƒÂ¡rias, pomares coletivos e seguranÃƒÂ§a alimentar.",
        services: [
          { icon: "Ã°Å¸Â¥â€”", name: "Hortas ComunitÃƒÂ¡rias", tag: "Ambiental", desc: "Cadastro e apoio a hortas comunitÃƒÂ¡rias." },
          { icon: "Ã°Å¸ÂÅ½", name: "Pomares Coletivos", tag: "Ambiental", desc: "Projetos de pomares coletivos em ÃƒÂ¡reas urbanas." }
        ]
      },
      {
        id: "logistica",
        name: "Transporte e LogÃƒÂ­stica",
        icon: "Ã°Å¸Å¡â€º",
        desc: "AutorizaÃƒÂ§ÃƒÂ£o e licenciamento para transporte de produtos agrÃƒÂ­colas.",
        services: [
          { icon: "Ã°Å¸Å¡â€º", name: "Transporte de Produtos In Natura", tag: "LogÃƒÂ­stica", desc: "Licenciamento para veÃƒÂ­culos de carga de produtos agrÃƒÂ­colas." },
          { icon: "Ã°Å¸â€™Â§", name: "Acesso ÃƒÂ  ÃƒÂgua para IrrigaÃƒÂ§ÃƒÂ£o", tag: "Infraestrutura", desc: "Programa de apoio a pequenos produtores rurais no abastecimento hÃƒÂ­drico." }
        ]
      }
    ]
  },
  {
    id: "animais",
    icon: "Ã°Å¸ÂÂ¾",
    color: "#b45309",
    colorLight: "#fef3c7",
    name: "Animais",
    desc: "Guarda responsÃƒÂ¡vel, adoÃƒÂ§ÃƒÂ£o, vacinas e bem-estar animal.",
    subcategories: [
      {
        id: "adocao",
        name: "AdoÃƒÂ§ÃƒÂ£o e Bem-Estar",
        icon: "Ã°Å¸Ââ€¢",
        desc: "Processo de adoÃƒÂ§ÃƒÂ£o e bem-estar animal.",
        services: [
          { icon: "Ã°Å¸Ââ€¢", name: "AdoÃƒÂ§ÃƒÂ£o de Animais", tag: "Bem-estar", desc: "Processo de adoÃƒÂ§ÃƒÂ£o de cÃƒÂ£es e gatos nos Centros de Controle de Zoonoses (CCZ) municipais." },
          { icon: "Ã°Å¸Å¡Â¨", name: "DenÃƒÂºncia de Maus-Tratos", tag: "ProteÃƒÂ§ÃƒÂ£o", desc: "Canal para denÃƒÂºncias de maus-tratos, abandono e exploraÃƒÂ§ÃƒÂ£o de animais domÃƒÂ©sticos e silvestres." }
        ]
      },
      {
        id: "saude_animal",
        name: "SaÃƒÂºde Animal",
        icon: "Ã°Å¸â€™â€°",
        desc: "VacinaÃƒÂ§ÃƒÂ£o, registro e controle sanitÃƒÂ¡rio.",
        services: [
          { icon: "ðŸš›", name: "Cata Cacareco", tag: "Coleta", desc: "SolicitaÃ§Ã£o de coleta de cacareco (movÃ©is velhos).", featured: true, link: "https://piracicaba-hml.solarbpm.softplan.com.br/form-dinamico-web/#/hml/answer/6a1eb5fde4b090bc98169e33/6a26d164e4b090bc98169ed7" },
          { icon: "Ã°Å¸ÂÂ·Ã¯Â¸Â", name: "Registro e IdentificaÃƒÂ§ÃƒÂ£o Animal", tag: "Cadastro", desc: "Chip de identificaÃƒÂ§ÃƒÂ£o e registro obrigatÃƒÂ³rio de animais domÃƒÂ©sticos na Prefeitura." }
        ]
      },
      {
        id: "controle_grande_porte",
        name: "Controle de Grande Porte",
        icon: "Ã°Å¸Ââ€š",
        desc: "Controle de animais de grande porte em situaÃƒÂ§ÃƒÂ£o de risco.",
        services: [
          { icon: "Ã°Å¸Ââ€š", name: "Controle de Animais de Grande Porte", tag: "FiscalizaÃƒÂ§ÃƒÂ£o", desc: "RemoÃƒÂ§ÃƒÂ£o e destinaÃƒÂ§ÃƒÂ£o de equinos e bovinos em situaÃƒÂ§ÃƒÂ£o de maus-tratos ou abandono." }
        ]
      }
    ]
  },
  {
    id: "animais_peconhentos",
    icon: "Ã°Å¸ÂÂ",
    color: "#7c3aed",
    colorLight: "#ede9fe",
    name: "Animais PeÃƒÂ§onhentos",
    desc: "Controle e manejo de animais peÃƒÂ§onhentos e sinantrÃƒÂ³picos.",
    services: [
      { icon: "Ã°Å¸â€¢Â·Ã¯Â¸Â", name: "Captura de Animais PeÃƒÂ§onhentos", tag: "UrgÃƒÂªncia", desc: "ServiÃƒÂ§o de remoÃƒÂ§ÃƒÂ£o de escorpiÃƒÂµes, aranhas, cobras e outros animais peÃƒÂ§onhentos em residÃƒÂªncias." },
      { icon: "Ã°Å¸ÂÂ¥", name: "Atendimento a Acidentados", tag: "SaÃƒÂºde", desc: "OrientaÃƒÂ§ÃƒÂ£o sobre unidades de saÃƒÂºde com soro antiofÃƒÂ­dico e antiaracnÃƒÂ­dico disponÃƒÂ­vel." },
      { icon: "Ã°Å¸â€œâ€¹", name: "EducaÃƒÂ§ÃƒÂ£o Preventiva", tag: "PrevenÃƒÂ§ÃƒÂ£o", desc: "Materiais e palestras sobre prevenÃƒÂ§ÃƒÂ£o de acidentes com animais peÃƒÂ§onhentos." }
    ]
  },
  {
    id: "assistencia_social",
    icon: "Ã°Å¸Â¤Â",
    color: "#0891b2",
    colorLight: "#e0f7fa",
    name: "AssistÃƒÂªncia Social",
    desc: "Apoio a famÃƒÂ­lias vulnerÃƒÂ¡veis, CRAS, CREAS e benefÃƒÂ­cios sociais.",
    services: [
      { icon: "Ã°Å¸ÂÂ ", name: "CRAS Ã¢â‚¬â€œ Centro de ReferÃƒÂªncia", tag: "ProteÃƒÂ§ÃƒÂ£o BÃƒÂ¡sica", desc: "Atendimento a famÃƒÂ­lias em situaÃƒÂ§ÃƒÂ£o de vulnerabilidade social para acesso a benefÃƒÂ­cios e serviÃƒÂ§os." },
      { icon: "Ã°Å¸â€ Ëœ", name: "CREAS Ã¢â‚¬â€œ ProteÃƒÂ§ÃƒÂ£o Especial", tag: "ProteÃƒÂ§ÃƒÂ£o Especial", desc: "Acompanhamento a pessoas em situaÃƒÂ§ÃƒÂ£o de violÃƒÂªncia, exploraÃƒÂ§ÃƒÂ£o e violaÃƒÂ§ÃƒÂ£o de direitos." },
      { icon: "Ã°Å¸â€™Â°", name: "BenefÃƒÂ­cio Eventual", tag: "BenefÃƒÂ­cio", desc: "AuxÃƒÂ­lio financeiro temporÃƒÂ¡rio para famÃƒÂ­lias em situaÃƒÂ§ÃƒÂ£o de emergÃƒÂªncia ou vulnerabilidade extrema." },
      { icon: "Ã°Å¸ÂÂ½Ã¯Â¸Â", name: "Restaurante Escola", tag: "AlimentaÃƒÂ§ÃƒÂ£o", desc: "RefeiÃƒÂ§ÃƒÂµes subsidiadas em restaurantes populares para trabalhadores e famÃƒÂ­lias de baixa renda." },
      { icon: "Ã°Å¸â€ºÂ¡Ã¯Â¸Â", name: "Rede de ProteÃƒÂ§ÃƒÂ£o ÃƒÂ  Mulher", tag: "ProteÃƒÂ§ÃƒÂ£o", desc: "Abrigos, atendimento psicossocial e jurÃƒÂ­dico para mulheres em situaÃƒÂ§ÃƒÂ£o de violÃƒÂªncia domÃƒÂ©stica." },
      { icon: "Ã°Å¸â€˜Â´", name: "ServiÃƒÂ§os ao Idoso", tag: "Idoso", desc: "Centro Dia, casa de repouso, acompanhamento e transporte para idosos em situaÃƒÂ§ÃƒÂ£o de risco." }
    ]
  },
  {
    id: "defesa_civil",
    icon: "Ã°Å¸Å¡Â¨",
    color: "#dc2626",
    colorLight: "#fee2e2",
    name: "Defesa Civil",
    desc: "PrevenÃƒÂ§ÃƒÂ£o e resposta a desastres naturais e emergÃƒÂªncias.",
    services: [
      { icon: "Ã°Å¸Å’Â§Ã¯Â¸Â", name: "Alertas de Chuva e Alagamento", tag: "EmergÃƒÂªncia", desc: "Sistema de alertas em tempo real sobre chuvas intensas, alagamentos e riscos geolÃƒÂ³gicos." },
      { icon: "Ã¢â€ºÂº", name: "Abrigos TemporÃƒÂ¡rios", tag: "AssistÃƒÂªncia", desc: "Cadastro, localizaÃƒÂ§ÃƒÂ£o e capacidade dos abrigos municipais ativados em situaÃƒÂ§ÃƒÂµes de desastre." },
      { icon: "Ã°Å¸ÂÅ¡Ã¯Â¸Â", name: "Vistoria de ImÃƒÂ³veis em Risco", tag: "PrevenÃƒÂ§ÃƒÂ£o", desc: "SolicitaÃƒÂ§ÃƒÂ£o de vistoria tÃƒÂ©cnica para imÃƒÂ³veis em encostas ou ÃƒÂ¡reas de risco geolÃƒÂ³gico." },
      { icon: "Ã°Å¸â€œÂ±", name: "Cadastro no Alerta SP", tag: "Tecnologia", desc: "InscriÃƒÂ§ÃƒÂ£o no sistema de SMS de alertas meteorolÃƒÂ³gicos da Defesa Civil de SÃƒÂ£o Paulo." }
    ]
  },
  {
    id: "educacao",
    icon: "Ã°Å¸â€œÅ¡",
    color: "#1d4ed8",
    colorLight: "#eff6ff",
    name: "EducaÃƒÂ§ÃƒÂ£o",
    desc: "MatrÃƒÂ­culas, creches, escolas municipais e programas educacionais.",
    services: [
      { icon: "Ã°Å¸Å½â€™", name: "MatrÃƒÂ­cula Escolar", tag: "Ensino Fundamental", desc: "Processo de matrÃƒÂ­cula nas escolas municipais para o ensino fundamental e mÃƒÂ©dio." },
      { icon: "Ã°Å¸â€˜Â¶", name: "Creches e CEIs", tag: "EducaÃƒÂ§ÃƒÂ£o Infantil", desc: "Vagas em Centros de EducaÃƒÂ§ÃƒÂ£o Infantil para crianÃƒÂ§as de 0 a 3 anos." },
      { icon: "Ã°Å¸Å’â„¢", name: "EducaÃƒÂ§ÃƒÂ£o de Jovens e Adultos (EJA)", tag: "EJA", desc: "Ensino gratuito para jovens e adultos que nÃƒÂ£o concluÃƒÂ­ram o ensino fundamental ou mÃƒÂ©dio." },
      { icon: "Ã¢â„¢Â¿", name: "EducaÃƒÂ§ÃƒÂ£o Especial e Inclusiva", tag: "InclusÃƒÂ£o", desc: "Salas de recursos, intÃƒÂ©rpretes de Libras e suporte pedagÃƒÂ³gico especializado." },
      { icon: "Ã°Å¸ÂÂ«", name: "Escola em Tempo Integral", tag: "PerÃƒÂ­odo Integral", desc: "Programas de contraturno com esporte, cultura e reforÃƒÂ§o escolar nas escolas municipais." },
      { icon: "Ã°Å¸â€œâ€“", name: "Bibliotecas Municipais", tag: "Cultura", desc: "Acervo, emprÃƒÂ©stimo, eventos e cursos gratuitos nas bibliotecas da rede municipal." }
    ]
  },
  {
    id: "esporte_lazer",
    icon: "Ã¢Å¡Â½",
    color: "#16a34a",
    colorLight: "#dcfce7",
    name: "Esporte e Lazer",
    desc: "Equipamentos esportivos, programas de atividade fÃƒÂ­sica e eventos.",
    services: [
      { icon: "Ã°Å¸ÂÅ¸Ã¯Â¸Â", name: "CEUs Ã¢â‚¬â€œ Centro Educacional Unificado", tag: "Complexo", desc: "Quadras, piscinas, teatro e espaÃƒÂ§os culturais nos CEUs da cidade." },
      { icon: "Ã°Å¸ÂÅ ", name: "Piscinas Municipais", tag: "NataÃƒÂ§ÃƒÂ£o", desc: "Acesso e horÃƒÂ¡rios das piscinas pÃƒÂºblicas com aulas de nataÃƒÂ§ÃƒÂ£o para todas as idades." },
      { icon: "Ã°Å¸Å¡Â´", name: "CicloFaixa e Ciclistas", tag: "Mobilidade", desc: "Mapa de ciclovias, ciclorrotas e eventos de ciclofaixa de lazer nos fins de semana." },
      { icon: "Ã°Å¸Å’Â³", name: "Parques e ÃƒÂreas Verdes", tag: "Lazer", desc: "CalendÃƒÂ¡rio de eventos, horÃƒÂ¡rios e programas esportivos nos parques municipais." }
    ]
  },
  {
    id: "financas",
    icon: "Ã°Å¸â€™Â°",
    color: "#0d9488",
    colorLight: "#ccfbf1",
    name: "FinanÃƒÂ§as PÃƒÂºblicas",
    desc: "IPTU, ISS, ITBI, nota fiscal e demais tributos municipais.",
    subcategories: [
      {
        id: "iptu",
        name: "IPTU",
        icon: "Ã°Å¸ÂÂ ",
        desc: "Imposto Predial e Territorial Urbano.",
        services: [
          { icon: "Ã°Å¸Â§Â¾", name: "EmissÃƒÂ£o de Boleto", tag: "Pagamento", desc: "Emitir 2Ã‚Âª via de boleto do IPTU.", link: "#", featured: true },
          { icon: "Ã°Å¸â€œâ€ž", name: "Segunda Via de Conta", tag: "Pagamento", desc: "Emitir segunda via de contas e boletos municipais.", featured: true },
          { icon: "Ã°Å¸â€œâ€¹", name: "Parcelamento", tag: "RenegociaÃƒÂ§ÃƒÂ£o", desc: "Solicitar parcelamento de IPTU em atraso." },
          { icon: "Ã°Å¸â€œâ€ž", name: "IsenÃƒÂ§ÃƒÂ£o", tag: "BenefÃƒÂ­cio", desc: "Solicitar isenÃƒÂ§ÃƒÂ£o de IPTU para casos especÃƒÂ­ficos." }
        ]
      },
      {
        id: "iss",
        name: "ISS e Nota Fiscal",
        icon: "Ã°Å¸Â§Â¾",
        desc: "Imposto Sobre ServiÃƒÂ§os e emissÃƒÂ£o de NF-e.",
        services: [
          { icon: "Ã°Å¸ÂÂ¢", name: "ISS Ã¢â‚¬â€œ Imposto Sobre ServiÃƒÂ§os", tag: "Empresas", desc: "Cadastro, declaraÃƒÂ§ÃƒÂ£o e recolhimento do ISS para prestadores de serviÃƒÂ§os no municÃƒÂ­pio." },
          { icon: "Ã°Å¸Â§Â¾", name: "Nota Fiscal EletrÃƒÂ´nica", tag: "Nota Fiscal", desc: "EmissÃƒÂ£o, consulta e crÃƒÂ©ditos da Nota Fiscal de ServiÃƒÂ§os EletrÃƒÂ´nica (NF-e).", featured: true }
        ]
      },
      {
        id: "imoveis",
        name: "TransaÃƒÂ§ÃƒÂ£o de ImÃƒÂ³veis",
        icon: "Ã°Å¸â€â€˜",
        desc: "ITBI e certidÃƒÂµes imobiliÃƒÂ¡rias.",
        services: [
          { icon: "Ã°Å¸â€â€˜", name: "ITBI Ã¢â‚¬â€œ TransmissÃƒÂ£o de ImÃƒÂ³veis", tag: "ImÃƒÂ³veis", desc: "CÃƒÂ¡lculo, recolhimento e certidÃƒÂ£o do ITBI em transaÃƒÂ§ÃƒÂµes imobiliÃƒÂ¡rias no municÃƒÂ­pio." },
          { icon: "Ã°Å¸â€œâ€ž", name: "CertidÃƒÂµes e DÃƒÂ©bitos", tag: "CertidÃƒÂ£o", desc: "EmissÃƒÂ£o de certidÃƒÂ£o negativa de dÃƒÂ©bitos tributÃƒÂ¡rios e nÃƒÂ£o tributÃƒÂ¡rios municipais." }
        ]
      },
      {
        id: "alvaras",
        name: "AlvarÃƒÂ¡s e LicenÃƒÂ§as",
        icon: "Ã°Å¸Ââ€”Ã¯Â¸Â",
        desc: "AlvarÃƒÂ¡ de funcionamento e fiscalizaÃƒÂ§ÃƒÂ£o.",
        services: [
          { icon: "Ã°Å¸Ââ€”Ã¯Â¸Â", name: "AlvarÃƒÂ¡ de Funcionamento", tag: "LicenÃƒÂ§a", desc: "SolicitaÃƒÂ§ÃƒÂ£o, renovaÃƒÂ§ÃƒÂ£o e consulta de alvarÃƒÂ¡s para estabelecimentos comerciais e de serviÃƒÂ§os.", featured: true },
          { icon: "Ã°Å¸Ââ€”Ã¯Â¸Â", name: "AlvarÃƒÂ¡ de Obras", tag: "Obras", desc: "SolicitaÃƒÂ§ÃƒÂ£o de alvarÃƒÂ¡ para obras residenciais e comerciais.", featured: true },
          { icon: "Ã°Å¸â€™Â³", name: "Auto de InfraÃƒÂ§ÃƒÂ£o", tag: "FiscalizaÃƒÂ§ÃƒÂ£o", desc: "Consulta, recurso e pagamento de autos de infraÃƒÂ§ÃƒÂ£o emitidos pela fiscalizaÃƒÂ§ÃƒÂ£o municipal." }
        ]
      }
    ]
  },
  {
    id: "fiscalizacao",
    icon: "Ã°Å¸â€Â",
    color: "#ea580c",
    colorLight: "#fff7ed",
    name: "FiscalizaÃƒÂ§ÃƒÂ£o",
    desc: "Obras irregulares, posturas, saÃƒÂºde e vigilÃƒÂ¢ncia sanitÃƒÂ¡ria.",
    services: [
      { icon: "Ã°Å¸â€œÂ¢", name: "Ouvidoria", tag: "Cidadania", desc: "Canal para denÃƒÂºncias, reclamaÃƒÂ§ÃƒÂµes, elogios e sugestÃƒÂµes dos cidadÃƒÂ£os.", featured: true },
      { icon: "Ã°Å¸ÂÅ¡Ã¯Â¸Â", name: "Obras Irregulares", tag: "Posturas", desc: "DenÃƒÂºncia de construÃƒÂ§ÃƒÂµes clandestinas, irregulares ou sem alvarÃƒÂ¡ de obras." },
      { icon: "Ã°Å¸Ââ€", name: "VigilÃƒÂ¢ncia SanitÃƒÂ¡ria", tag: "SaÃƒÂºde", desc: "InspeÃƒÂ§ÃƒÂ£o e licenciamento de estabelecimentos de alimentos, saÃƒÂºde e cosmÃƒÂ©ticos." },
      { icon: "Ã°Å¸Ââ‚¬", name: "Controle de Pragas Urbanas", tag: "SaÃƒÂºde PÃƒÂºblica", desc: "DenÃƒÂºncia e combate a focos de ratos, baratas e outras pragas urbanas em espaÃƒÂ§os pÃƒÂºblicos." },
      { icon: "Ã°Å¸â€œÂ¢", name: "PoluiÃƒÂ§ÃƒÂ£o Sonora", tag: "Posturas", desc: "DenÃƒÂºncia de perturbaÃƒÂ§ÃƒÂ£o de sossego, estabelecimentos barulhentos e obras em horÃƒÂ¡rios proibidos." },
      { icon: "Ã°Å¸Å¡Â§", name: "FiscalizaÃƒÂ§ÃƒÂ£o de Obras PÃƒÂºblicas", tag: "Obras", desc: "Acompanhamento e fiscalizaÃƒÂ§ÃƒÂ£o de contratos e obras do municÃƒÂ­pio pela Controladoria Geral." }
    ]
  },
  {
    id: "mobilidade",
    icon: "Ã°Å¸Å¡Å’",
    color: "#7c3aed",
    colorLight: "#ede9fe",
    name: "Mobilidade e Transporte",
    desc: "Ãƒâ€nibus, metrÃƒÂ´, tÃƒÂ¡xi, estacionamento e infraestrutura viÃƒÂ¡ria.",
    services: [
      { icon: "Ã°Å¸Å¡Å’", name: "Ãƒâ€nibus Municipais", tag: "Transporte", desc: "ItinerÃƒÂ¡rios, horÃƒÂ¡rios, planejamento de rotas e informaÃƒÂ§ÃƒÂµes sobre a frota de ÃƒÂ´nibus do municÃƒÂ­pio." },
      { icon: "Ã°Å¸â€™Â³", name: "Bilhete ÃƒÅ¡nico", tag: "Passe", desc: "SolicitaÃƒÂ§ÃƒÂ£o, recarga, bloqueio e segunda via do Bilhete ÃƒÅ¡nico de transporte pÃƒÂºblico." },
      { icon: "Ã°Å¸Å¡â€¢", name: "TÃƒÂ¡xi e Transporte por Aplicativo", tag: "TÃƒÂ¡xi", desc: "Cadastro, permissÃƒÂ£o e fiscalizaÃƒÂ§ÃƒÂ£o de tÃƒÂ¡xis municipais e motoristas de aplicativo." },
      { icon: "Ã°Å¸â€¦Â¿Ã¯Â¸Â", name: "Zona Azul Digital", tag: "Estacionamento", desc: "Compra de crÃƒÂ©ditos e consulta de vagas regulamentadas de estacionamento rotativo." },
      { icon: "Ã°Å¸â€ºÂ£Ã¯Â¸Â", name: "ManutenÃƒÂ§ÃƒÂ£o de Vias e Pavimento", tag: "Infraestrutura", desc: "SolicitaÃƒÂ§ÃƒÂ£o de tapa-buraco, recapeamento e sinalizaÃƒÂ§ÃƒÂ£o de ruas e avenidas." },
      { icon: "Ã°Å¸Å¡Â¦", name: "SemÃƒÂ¡foros e SinalizaÃƒÂ§ÃƒÂ£o", tag: "CET", desc: "Reporte de semÃƒÂ¡foros defeituosos, placas danificadas e problemas de sinalizaÃƒÂ§ÃƒÂ£o viÃƒÂ¡ria." },
      { icon: "Ã°Å¸Å¡Â¶", name: "CalÃƒÂ§adas e Acessibilidade", tag: "Acessibilidade", desc: "Programa de regularizaÃƒÂ§ÃƒÂ£o de calÃƒÂ§adas e rotas acessÃƒÂ­veis para pedestres e cadeirantes." },
      { icon: "Ã°Å¸Å¡Â²", name: "Bicicletas Compartilhadas", tag: "Mobilidade Ativa", desc: "Cadastro, planos e estaÃƒÂ§ÃƒÂµes do sistema de bicicletas compartilhadas de Piracicaba." }
    ]
  },
  {
    id: "habitacao",
    icon: "Ã°Å¸ÂËœÃ¯Â¸Â",
    color: "#b45309",
    colorLight: "#fef3c7",
    name: "HabitaÃƒÂ§ÃƒÂ£o",
    desc: "Programas habitacionais, regularizaÃƒÂ§ÃƒÂ£o fundiÃƒÂ¡ria e moradias.",
    services: [
      { icon: "Ã°Å¸ÂÂ ", name: "Programa Minha Casa Minha Vida", tag: "HabitaÃƒÂ§ÃƒÂ£o", desc: "InscriÃƒÂ§ÃƒÂ£o e consulta de processo nos programas habitacionais municipais e estaduais." },
      { icon: "Ã°Å¸â€œâ€¹", name: "Habite-se", tag: "DocumentaÃƒÂ§ÃƒÂ£o", desc: "EmissÃƒÂ£o de habite-se para conclusÃƒÂ£o de obras residenciais e comerciais.", featured: true },
      { icon: "Ã°Å¸â€œâ€¹", name: "RegularizaÃƒÂ§ÃƒÂ£o FundiÃƒÂ¡ria", tag: "RegularizaÃƒÂ§ÃƒÂ£o", desc: "Processo de regularizaÃƒÂ§ÃƒÂ£o de imÃƒÂ³veis em ÃƒÂ¡reas de ocupaÃƒÂ§ÃƒÂ£o e favelas urbanizadas." },
      { icon: "Ã°Å¸â€Â¨", name: "MutirÃƒÂ£o de Reforma", tag: "Reforma", desc: "Programa de apoio tÃƒÂ©cnico e material para reforma de moradias precÃƒÂ¡rias." },
      { icon: "Ã°Å¸â€œÅ ", name: "Cadastro Municipal de HabitaÃƒÂ§ÃƒÂ£o", tag: "Cadastro", desc: "InscriÃƒÂ§ÃƒÂ£o no cadastro para acesso a programas de moradia da Secretaria Municipal de HabitaÃƒÂ§ÃƒÂ£o." }
    ]
  },
  {
    id: "saude",
    icon: "Ã°Å¸ÂÂ¥",
    color: "#dc2626",
    colorLight: "#fee2e2",
    name: "SaÃƒÂºde",
    desc: "UBS, hospitais, vacinas, saÃƒÂºde mental e programas de saÃƒÂºde pÃƒÂºblica.",
    services: [
      { icon: "Ã°Å¸ÂÂ¥", name: "UBS Ã¢â‚¬â€œ Unidade BÃƒÂ¡sica de SaÃƒÂºde", tag: "AtenÃƒÂ§ÃƒÂ£o BÃƒÂ¡sica", desc: "LocalizaÃƒÂ§ÃƒÂ£o, agendamento e serviÃƒÂ§os das Unidades BÃƒÂ¡sicas de SaÃƒÂºde do municÃƒÂ­pio." },
      { icon: "Ã°Å¸â€œâ€¦", name: "Agendamento de SaÃƒÂºde", tag: "Agendamento", desc: "Agendamento de consultas e exames nas unidades de saÃƒÂºde do municÃƒÂ­pio.", featured: true },
      { icon: "Ã°Å¸â€™Å ", name: "FarmÃƒÂ¡cia Popular e Municipal", tag: "Medicamentos", desc: "Retirada de medicamentos gratuitos e de baixo custo nas farmÃƒÂ¡cias da rede municipal." },
      { icon: "Ã°Å¸Â§Â ", name: "CAPS Ã¢â‚¬â€œ SaÃƒÂºde Mental", tag: "SaÃƒÂºde Mental", desc: "Centros de AtenÃƒÂ§ÃƒÂ£o Psicossocial para tratamento de transtornos mentais e dependÃƒÂªncia quÃƒÂ­mica." },
      { icon: "Ã°Å¸Â¤Â°", name: "PrÃƒÂ©-Natal e SaÃƒÂºde da Mulher", tag: "SaÃƒÂºde da Mulher", desc: "Acompanhamento prÃƒÂ©-natal, planejamento reprodutivo e exames de rastreamento feminino." },
      { icon: "Ã°Å¸Â§â€™", name: "SaÃƒÂºde da CrianÃƒÂ§a e Adolescente", tag: "Pediatria", desc: "CalendÃƒÂ¡rio vacinal, consultas de puericultura e acompanhamento do desenvolvimento infantil." },
      { icon: "Ã°Å¸â€™â€°", name: "VacinaÃƒÂ§ÃƒÂ£o", tag: "PrevenÃƒÂ§ÃƒÂ£o", desc: "Pontos de vacinaÃƒÂ§ÃƒÂ£o, calendÃƒÂ¡rio vacinal e campanhas de imunizaÃƒÂ§ÃƒÂ£o da Prefeitura." },
      { icon: "Ã°Å¸Â¦Â·", name: "SaÃƒÂºde Bucal", tag: "Odontologia", desc: "Agendamento de consultas odontolÃƒÂ³gicas nas UBSs e CEOs (Centro de Especialidades)." },
      { icon: "Ã°Å¸ÂÆ’", name: "Academia da SaÃƒÂºde", tag: "PrevenÃƒÂ§ÃƒÂ£o", desc: "Atividades fÃƒÂ­sicas orientadas por educadores fÃƒÂ­sicos em polos ao ar livre." }
    ]
  },
  {
    id: "meio_ambiente",
    icon: "Ã°Å¸Å’Â³",
    color: "#15803d",
    colorLight: "#dcfce7",
    name: "Meio Ambiente",
    desc: "ArborizaÃƒÂ§ÃƒÂ£o, coleta seletiva, licenciamento ambiental e parques.",
    services: [
      { icon: "Ã°Å¸Å’Â²", name: "Poda e RemoÃƒÂ§ÃƒÂ£o de ÃƒÂrvores", tag: "ArborizaÃƒÂ§ÃƒÂ£o", desc: "SolicitaÃƒÂ§ÃƒÂ£o de poda emergencial, remoÃƒÂ§ÃƒÂ£o e plantio de ÃƒÂ¡rvores em vias pÃƒÂºblicas." },
      { icon: "Ã¢â„¢Â»Ã¯Â¸Â", name: "Coleta Seletiva e Reciclagem", tag: "Sustentabilidade", desc: "CalendÃƒÂ¡rio de coleta seletiva, pontos de entrega voluntÃƒÂ¡ria e ecopontos municipais.", featured: true },
      { icon: "Ã°Å¸ÂÂ­", name: "Licenciamento Ambiental", tag: "LicenÃƒÂ§a", desc: "LicenÃƒÂ§a ambiental para atividades potencialmente poluidoras no territÃƒÂ³rio municipal." },
      { icon: "Ã°Å¸â€™Â§", name: "CÃƒÂ³rregos e Saneamento", tag: "Saneamento", desc: "DenÃƒÂºncia de descarte irregular em cÃƒÂ³rregos e solicitaÃƒÂ§ÃƒÂ£o de limpeza e canalizaÃƒÂ§ÃƒÂ£o." },
      { icon: "Ã°Å¸Å’Â«Ã¯Â¸Â", name: "Qualidade do Ar", tag: "Monitoramento", desc: "ÃƒÂndices e boletins diÃƒÂ¡rios da qualidade do ar em Piracicaba pela CETESB." }
    ]
  },
  {
    id: "cultura",
    icon: "Ã°Å¸Å½Â­",
    color: "#9333ea",
    colorLight: "#f3e8ff",
    name: "Cultura e Turismo",
    desc: "Museus, teatros, patrimÃƒÂ´nio histÃƒÂ³rico e eventos culturais.",
    services: [
      { icon: "Ã°Å¸Å½Â­", name: "Teatros e Centros Culturais", tag: "Cultura", desc: "ProgramaÃƒÂ§ÃƒÂ£o, ingressos e espaÃƒÂ§os disponÃƒÂ­veis nos teatros e centros culturais municipais." },
      { icon: "Ã°Å¸Ââ€ºÃ¯Â¸Â", name: "Museus Municipais", tag: "PatrimÃƒÂ´nio", desc: "Acervo, visitas guiadas e agendamento escolar nos museus da Prefeitura de Piracicaba." },
      { icon: "Ã°Å¸â€œÂ¸", name: "PatrimÃƒÂ´nio HistÃƒÂ³rico", tag: "PreservaÃƒÂ§ÃƒÂ£o", desc: "Tombamento, inventÃƒÂ¡rio e autorizaÃƒÂ§ÃƒÂ£o para intervenÃƒÂ§ÃƒÂµes em bens histÃƒÂ³ricos municipais." },
      { icon: "Ã°Å¸Å½Âª", name: "Eventos e Festivais", tag: "Eventos", desc: "AutorizaÃƒÂ§ÃƒÂ£o para realizaÃƒÂ§ÃƒÂ£o de eventos culturais, shows e festivais em espaÃƒÂ§os pÃƒÂºblicos." }
    ]
  }
];

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  STATE
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
let activeId = null;
let searchQuery = "";
let showingCategory = false;
let expandedSubcategories = new Set();
let carouselIndex = 0;

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  FEATURED SERVICES
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
function getFeaturedServices() {
  const featured = [];
  categories.forEach(cat => {
    if (cat.subcategories && cat.subcategories.length > 0) {
      cat.subcategories.forEach(sub => {
        sub.services.forEach(svc => {
          if (svc.featured) {
            featured.push({
              ...svc,
              categoryName: cat.name,
              categoryId: cat.id,
              subcategoryName: sub.name,
              color: cat.color,
              colorLight: cat.colorLight
            });
          }
        });
      });
    } else if (cat.services && cat.services.length > 0) {
      cat.services.forEach(svc => {
        if (svc.featured) {
          featured.push({
            ...svc,
            categoryName: cat.name,
            categoryId: cat.id,
            color: cat.color,
            colorLight: cat.colorLight
          });
        }
      });
    }
  });
  return featured;
}

// Map featured services to Lucide icons
const featuredIconMap = {
  "EmissÃƒÂ£o de Boleto": "receipt",
  "Segunda Via de Conta": "file-text",
  "Nota Fiscal EletrÃƒÂ´nica": "file-check",
  "Agendamento de SaÃƒÂºde": "calendar",
  "AlvarÃƒÂ¡ de Funcionamento": "clipboard-check",
  "AlvarÃƒÂ¡ de Obras": "hammer",
  "Ouvidoria": "message-square",
  "Coleta Seletiva e Reciclagem": "recycle",
  "Cata Cacareco": "truck",
  "Habite-se": "home-check"
};

function getLucideIcon(serviceName) {
  return featuredIconMap[serviceName] || "circle";
}

function renderFeaturedCarousel() {
  const featuredSection = document.getElementById('featuredSection');
  if (!featuredSection) return;
  
  const featuredServices = getFeaturedServices();
  if (featuredServices.length === 0) {
    featuredSection.style.display = 'none';
    return;
  }
  
  // Divide into 2 groups of 5
  const group1 = featuredServices.slice(0, 5);
  const group2 = featuredServices.slice(5, 10);
  const groups = [group1, group2].filter(g => g.length > 0);
  
  featuredSection.innerHTML = `
    <div class="featured-header">
      <div class="featured-title">ServiÃƒÂ§os mais acessados</div>
    </div>
    <div class="carousel-container">
      <button class="carousel-nav" id="carouselPrev" ${carouselIndex === 0 ? 'disabled' : ''}>
        <i data-lucide="chevron-left"></i>
      </button>
      <div class="carousel-viewport">
        <div class="carousel-track" id="carouselTrack">
          ${groups.map((group, groupIndex) => `
            <div class="carousel-slide" data-group="${groupIndex}">
              ${group.map(service => `
                <div class="featured-card" data-service-name="${service.name}" data-category-id="${service.categoryId}">
                  <div class="featured-card-icon">
                    <i data-lucide="${getLucideIcon(service.name)}"></i>
                  </div>
                  <div class="featured-card-name">${service.name}</div>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>
      <button class="carousel-nav" id="carouselNext" ${carouselIndex >= groups.length - 1 ? 'disabled' : ''}>
        <i data-lucide="chevron-right"></i>
      </button>
    </div>
    <div class="carousel-dots" id="carouselDots">
      ${groups.map((_, index) => `
        <div class="carousel-dot ${index === carouselIndex ? 'active' : ''}" data-index="${index}"></div>
      `).join('')}
    </div>
  `;
  
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Setup carousel navigation
  setupCarouselNavigation(groups.length);
  
  // Setup card click handlers
  featuredSection.querySelectorAll('.featured-card').forEach(card => {
    card.addEventListener('click', () => {
      const serviceName = card.dataset.serviceName;
      const categoryId = card.dataset.categoryId;
      const service = featuredServices.find(s => s.name === serviceName);
      
      if (service && service.link) {
        window.open(service.link, '_blank');
      } else if (categoryId) {
        activeId = categoryId;
        showingCategory = true;
        expandedSubcategories.clear();
        render();
        window.scrollTo(0, 0);
      }
    });
  });
}

function setupCarouselNavigation(totalGroups) {
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  
  if (!prevBtn || !nextBtn || !track) return;
  
  const updateCarousel = () => {
    const isMobile = window.innerWidth <= 768;
    const slideWidth = isMobile ? 100 : 100; // percentage - each slide takes 100% of viewport
    track.style.transform = `translateX(-${carouselIndex * slideWidth}%)`;
    
    prevBtn.disabled = carouselIndex === 0;
    nextBtn.disabled = carouselIndex >= totalGroups - 1;
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === carouselIndex);
    });
  };
  
  prevBtn.addEventListener('click', () => {
    if (carouselIndex > 0) {
      carouselIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (carouselIndex < totalGroups - 1) {
      carouselIndex++;
      updateCarousel();
    }
  });
  
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      carouselIndex = parseInt(dot.dataset.index);
      updateCarousel();
    });
  });
  
  // Handle resize
  window.addEventListener('resize', updateCarousel);
}

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  HELPER: Get service examples for category
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
function getServiceExamples(cat, maxCount = 3) {
  let allServices = [];
  
  if (cat.subcategories && cat.subcategories.length > 0) {
    cat.subcategories.forEach(sub => {
      sub.services.forEach(svc => {
        allServices.push(svc.name);
      });
    });
  } else if (cat.services && cat.services.length > 0) {
    cat.services.forEach(svc => {
      allServices.push(svc.name);
    });
  }
  
  return allServices.slice(0, maxCount);
}

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  RENDER CATEGORY MENU (MENU PRINCIPAL)
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
function renderCategoryMenu(main) {
  main.innerHTML = `
    <div class="section-header">
      <div class="section-icon-big" style="background:var(--tag-bg); color:var(--accent)">
        Ã°Å¸Ââ€ºÃ¯Â¸Â
      </div>
      <div>
        <div class="section-title">Categorias de ServiÃƒÂ§os</div>
        <div class="section-desc">Explore todos os serviÃƒÂ§os da Prefeitura Municipal de Piracicaba por categoria.</div>
      </div>
    </div>
    <div class="search-wrap">
      <span class="search-icon">Ã°Å¸â€Â</span>
      <input type="text" id="searchInput" placeholder="Buscar serviÃƒÂ§os, assuntos ou categoriasÃ¢â‚¬Â¦" value="${searchQuery}" autocomplete="off">
      <span class="search-count" id="searchCount"></span>
      <div class="autocomplete-dropdown" id="autocompleteDropdown"></div>
    </div>
    <div class="featured-section" id="featuredSection"></div>
    <div class="category-grid" id="categoryGrid"></div>
  `;

  setupSearchInput();
  renderFeaturedCarousel();

  const grid = document.getElementById('categoryGrid');
  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.style.position = 'relative';
    
    // Calculate total services count (including subcategories)
    let serviceCount = 0;
    if (cat.subcategories && cat.subcategories.length > 0) {
      cat.subcategories.forEach(sub => {
        serviceCount += sub.services.length;
      });
    } else if (cat.services && cat.services.length > 0) {
      serviceCount = cat.services.length;
    }
    
    // Get 2-3 service examples
    const serviceExamples = getServiceExamples(cat, 3);
    const examplesText = serviceExamples.join(' Ã‚Â· ');
    
    card.innerHTML = `
      <div class="category-card-header">
        <div class="category-icon" style="background:${cat.colorLight}; color:${cat.color}">
          ${cat.icon}
        </div>
        <div class="category-name">${cat.name}</div>
      </div>
      <div class="category-services">
        <span class="service-examples">${examplesText}</span>
        <span class="service-count">(${serviceCount} serviÃƒÂ§o${serviceCount !== 1 ? 's' : ''})</span>
      </div>
      <span class="category-arrow">Ã¢â€ â€™</span>
    `;
    card.addEventListener('click', () => {
      activeId = cat.id;
      showingCategory = true;
      expandedSubcategories.clear();
      render();
      window.scrollTo(0, 0);
    });
    grid.appendChild(card);
  });
}

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  BREADCRUMB
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
function updateBreadcrumb(categoryName = null) {
  const breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;
  
  if (categoryName) {
    breadcrumb.innerHTML = `
      <span class="breadcrumb-item" data-level="home" onclick="goBack()">InÃƒÂ­cio</span>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-item" data-level="categories" onclick="goBack()">Categorias de ServiÃƒÂ§os</span>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-item active">${categoryName}</span>
    `;
  } else {
    breadcrumb.innerHTML = `
      <span class="breadcrumb-item active" data-level="home">InÃƒÂ­cio</span>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-item active">Categorias de ServiÃƒÂ§os</span>
    `;
  }
}

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  RENDER MAIN
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
function renderMain() {
  const main = document.getElementById('main');

  if (searchQuery.trim().length > 0) {
    renderSearch(main);
    updateBreadcrumb();
  } else if (showingCategory && activeId) {
    const cat = categories.find(c => c.id === activeId);
    renderCategory(main);
    updateBreadcrumb(cat ? cat.name : null);
  } else {
    renderCategoryMenu(main);
    updateBreadcrumb();
  }
}

function renderCategory(main) {
  const cat = categories.find(c => c.id === activeId);
  if (!cat) return;

  main.innerHTML = `
    <button class="back-btn" onclick="goBack()">
      Ã¢â€ Â Voltar para categorias
    </button>
    <div class="section-header">
      <div class="section-icon-big" style="background:${cat.colorLight}; color:${cat.color}">
        ${cat.icon}
      </div>
      <div>
        <div class="section-title">${cat.name}</div>
        <div class="section-desc">${cat.desc}</div>
      </div>
    </div>
    <div class="cards-grid" id="cardsGrid"></div>
  `;

  const grid = document.getElementById('cardsGrid');

  // Check if category has subcategories
  if (cat.subcategories && cat.subcategories.length > 0) {
    // Render subcategories
    cat.subcategories.forEach(sub => {
      const subCard = document.createElement('div');
      subCard.className = 'subcategory-card';
      subCard.style.background = cat.colorLight;
      const isExpanded = expandedSubcategories.has(sub.id);
      subCard.innerHTML = `
        <div class="subcategory-header" style="color:${cat.color}">
          <div class="subcategory-icon">${sub.icon}</div>
          <div class="subcategory-info">
            <div class="subcategory-name">${sub.name}</div>
            <div class="subcategory-desc">${sub.desc}</div>
          </div>
          <div class="subcategory-toggle">${isExpanded ? 'Ã¢â€“Â¼' : 'Ã¢â€“Â¶'}</div>
        </div>
        <div class="subcategory-services ${isExpanded ? 'expanded' : ''}">
          <div class="services-list"></div>
        </div>
      `;

      const header = subCard.querySelector('.subcategory-header');
      header.addEventListener('click', () => {
        if (expandedSubcategories.has(sub.id)) {
          expandedSubcategories.delete(sub.id);
        } else {
          expandedSubcategories.add(sub.id);
        }
        render();
      });

      const servicesList = subCard.querySelector('.services-list');
      sub.services.forEach(svc => {
        const svcCard = document.createElement('div');
        svcCard.className = 'service-item';
        svcCard.innerHTML = `
          <div class="service-icon">${svc.icon}</div>
          <div class="service-info">
            <div class="service-name">${svc.name}</div>
            <div class="service-desc">${svc.desc}</div>
          </div>
          ${svc.link ? '<div class="service-link-icon">Ã¢â€ â€™</div>' : ''}
        `;
        if (svc.link) {
          svcCard.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(svc.name, svc.link);
          });
          svcCard.style.cursor = 'pointer';
        }
        servicesList.appendChild(svcCard);
      });

      grid.appendChild(subCard);
    });
  } else if (cat.services && cat.services.length > 0) {
    // Render direct services (legacy support)
    cat.services.forEach(svc => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-icon" style="background:${cat.colorLight}; color:${cat.color}">${svc.icon}</div>
        <div class="card-name">${svc.name}</div>
        <div class="card-desc">${svc.desc}</div>
        <span class="card-tag" style="background:${cat.colorLight};color:${cat.color}">${svc.tag}</span>
        <span class="card-arrow">Ã¢â€ â€™</span>
      `;
      card.addEventListener('click', () => {
        if (svc.link) {
          openModal(svc.name, svc.link);
        }
      });
      grid.appendChild(card);
    });
  }
}

function renderSearch(main) {
  const q = searchQuery.toLowerCase();
  const results = [];

  categories.forEach(cat => {
    // Check if category has subcategories
    if (cat.subcategories && cat.subcategories.length > 0) {
      cat.subcategories.forEach(sub => {
        sub.services.forEach(svc => {
          const inName = svc.name.toLowerCase().includes(q);
          const inDesc = svc.desc.toLowerCase().includes(q);
          const inCat = cat.name.toLowerCase().includes(q);
          const inSub = sub.name.toLowerCase().includes(q);
          const inTag = svc.tag ? svc.tag.toLowerCase().includes(q) : false;
          if (inName || inDesc || inCat || inSub || inTag) {
            results.push({ cat, sub, svc });
          }
        });
      });
    } else if (cat.services && cat.services.length > 0) {
      // Legacy support for direct services
      cat.services.forEach(svc => {
        const inName = svc.name.toLowerCase().includes(q);
        const inDesc = svc.desc.toLowerCase().includes(q);
        const inCat  = cat.name.toLowerCase().includes(q);
        const inTag  = svc.tag ? svc.tag.toLowerCase().includes(q) : false;
        if (inName || inDesc || inCat || inTag) {
          results.push({ cat, svc });
        }
      });
    }
  });

  const countEl = document.getElementById('searchCount');
  countEl.textContent = results.length + ' resultado' + (results.length !== 1 ? 's' : '');
  countEl.style.display = results.length > 0 ? 'block' : 'none';

  if (results.length === 0) {
    main.innerHTML = `
      <div class="empty-state">
        <div class="emoji">Ã°Å¸â€Å½</div>
        <h3>Nenhum serviÃƒÂ§o encontrado</h3>
        <p>Tente buscar por "IPTU", "vacina", "ÃƒÂ´nibus" ou "matrÃƒÂ­cula".</p>
      </div>`;
    return;
  }

  function hl(text) {
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<span class="highlight">$1</span>');
  }

  main.innerHTML = `
    <div class="search-results-label">Resultados para "<em>${searchQuery}</em>"</div>
    <div class="search-results-sub">${results.length} serviÃƒÂ§o${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}</div>
    <div class="cards-grid" id="cardsGrid"></div>
  `;

  const grid = document.getElementById('cardsGrid');
  results.forEach(({ cat, sub, svc }) => {
    const card = document.createElement('div');
    card.className = 'card';
    const breadcrumb = sub ? `${cat.name} > ${sub.name}` : cat.name;
    card.innerHTML = `
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:2px">
        <div class="card-icon" style="background:${cat.colorLight};color:${cat.color};width:36px;height:36px;border-radius:10px;font-size:18px">${svc.icon}</div>
        <span style="font-size:0.7rem;color:${cat.color};font-weight:600">${cat.icon} ${breadcrumb}</span>
      </div>
      <div class="card-name">${hl(svc.name)}</div>
      <div class="card-desc">${hl(svc.desc)}</div>
      ${svc.tag ? `<span class="card-tag" style="background:${cat.colorLight};color:${cat.color}">${svc.tag}</span>` : ''}
      <span class="card-arrow">Ã¢â€ â€™</span>
    `;
    card.addEventListener('click', () => {
      if (svc.link) {
        openModal(svc.name, svc.link);
      } else {
        activeId = cat.id;
        showingCategory = true;
        searchQuery = "";
        document.getElementById('searchInput').value = "";
        document.getElementById('searchCount').style.display = 'none';
        render();
      }
    });
    grid.appendChild(card);
  });
}



// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  GO BACK
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
function goBack() {
  showingCategory = false;
  activeId = null;
  expandedSubcategories.clear();
  render();
  window.scrollTo(0, 0);
}

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  MODAL
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
function openModal(title, url) {
  const w = 900, h = 700;
  const left = Math.round((screen.width - w) / 2);
  const top = Math.round((screen.height - h) / 2);
  window.open(
    url,
    '_blank',
    `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
  );
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.getElementById('modalIframe').src = '';
  document.body.style.overflow = '';
}

document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target.id === 'modalOverlay') {
    closeModal();
  }
});

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  MAIN RENDER
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
function render() {
  renderMain();
}

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  SEARCH HANDLER
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
let searchTimer;
function setupSearchInput() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  searchInput.removeEventListener('input', handleSearchInput);
  searchInput.addEventListener('input', handleSearchInput);
  searchInput.addEventListener('focus', () => showAutocomplete());
  searchInput.addEventListener('blur', () => {
    setTimeout(() => hideAutocomplete(), 200);
  });
  
  // Close dropdown on Escape key, submit on Enter
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideAutocomplete();
    } else if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  });
}

function handleSearchInput(e) {
  clearTimeout(searchTimer);
  const value = e.target.value;
  
  // Show autocomplete as user types (don't trigger full search)
  if (value.length >= 2) {
    showAutocomplete();
  } else {
    hideAutocomplete();
  }
}

function handleSearchSubmit(e) {
  if (e) e.preventDefault();
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  searchQuery = searchInput.value;
  hideAutocomplete();
  render();
}

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  AUTOCOMPLETE
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
function getSearchableItems() {
  const items = [];
  
  categories.forEach(cat => {
    // Add category as a searchable item
    items.push({
      type: 'category',
      id: cat.id,
      name: cat.name,
      desc: cat.desc,
      icon: cat.icon,
      color: cat.color,
      colorLight: cat.colorLight,
      category: cat.name
    });
    
    // Add services from subcategories
    if (cat.subcategories && cat.subcategories.length > 0) {
      cat.subcategories.forEach(sub => {
        sub.services.forEach(svc => {
          items.push({
            type: 'service',
            id: svc.name,
            name: svc.name,
            desc: svc.desc,
            icon: svc.icon,
            tag: svc.tag,
            link: svc.link,
            category: cat.name,
            subcategory: sub.name,
            catId: cat.id,
            color: cat.color,
            colorLight: cat.colorLight
          });
        });
      });
    } else if (cat.services && cat.services.length > 0) {
      // Legacy support for direct services
      cat.services.forEach(svc => {
        items.push({
          type: 'service',
          id: svc.name,
          name: svc.name,
          desc: svc.desc,
          icon: svc.icon,
          tag: svc.tag,
          link: svc.link,
          category: cat.name,
          catId: cat.id,
          color: cat.color,
          colorLight: cat.colorLight
        });
      });
    }
  });
  
  return items;
}

function filterAutocompleteItems(query) {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];
  
  const items = getSearchableItems();
  const filtered = items.filter(item => {
    const inName = item.name.toLowerCase().includes(q);
    const inDesc = item.desc.toLowerCase().includes(q);
    const inCat = item.category.toLowerCase().includes(q);
    const inTag = item.tag ? item.tag.toLowerCase().includes(q) : false;
    const inSub = item.subcategory ? item.subcategory.toLowerCase().includes(q) : false;
    return inName || inDesc || inCat || inTag || inSub;
  });
  
  // Limit to 8 results
  return filtered.slice(0, 8);
}

function showAutocomplete() {
  const dropdown = document.getElementById('autocompleteDropdown');
  const searchInput = document.getElementById('searchInput');
  if (!dropdown || !searchInput) return;
  
  const query = searchInput.value;
  const items = filterAutocompleteItems(query);
  
  if (items.length === 0) {
    dropdown.innerHTML = '<div class="autocomplete-no-results">Nenhum resultado encontrado</div>';
  } else {
    dropdown.innerHTML = items.map(item => {
      const subcategoryText = item.subcategory ? ` > ${item.subcategory}` : '';
      return `
        <div class="autocomplete-item" data-type="${item.type}" data-id="${item.id}" data-cat-id="${item.catId || ''}">
          <div class="autocomplete-item-category">${item.icon} ${item.category}${subcategoryText}</div>
          <div class="autocomplete-item-name">${item.name}</div>
          <div class="autocomplete-item-desc">${item.desc}</div>
        </div>
      `;
    }).join('');
    
    // Add click handlers
    dropdown.querySelectorAll('.autocomplete-item').forEach(itemEl => {
      itemEl.addEventListener('click', () => {
        const type = itemEl.dataset.type;
        const id = itemEl.dataset.id;
        const catId = itemEl.dataset.catId;
        
        if (type === 'category') {
          activeId = catId;
          showingCategory = true;
          expandedSubcategories.clear();
          searchQuery = "";
          searchInput.value = "";
        } else if (type === 'service') {
          const allItems = getSearchableItems();
          const selectedItem = allItems.find(i => i.id === id);
          if (selectedItem && selectedItem.link) {
            openModal(selectedItem.name, selectedItem.link);
            hideAutocomplete();
            return;
          } else if (catId) {
            activeId = catId;
            showingCategory = true;
            searchQuery = "";
            searchInput.value = "";
          }
        }
        
        hideAutocomplete();
        render();
        window.scrollTo(0, 0);
      });
    });
  }
  
  dropdown.classList.add('active');
}

function hideAutocomplete() {
  const dropdown = document.getElementById('autocompleteDropdown');
  if (dropdown) {
    dropdown.classList.remove('active');
  }
}

// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
//  BOOT
// Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
render();
