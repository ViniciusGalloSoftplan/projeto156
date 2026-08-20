const APP_CONTEXT_STORAGE_KEY = "servico156_appContext";

function detectAppContext() {
  try {

    const params = new URLSearchParams(window.location.search);
    const ctxParam = (params.get("ctx") || "").toLowerCase();
    if (ctxParam === "interno" || ctxParam === "externo") {
      return ctxParam;
    }

    // Sem o parâmetro (ex: navegação interna já dentro do catálogo), tenta o
    // referrer como sinal secundário.
    const referrer = document.referrer || "";
    if (referrer) {
      const refUrl = new URL(referrer);
      const refHost = refUrl.hostname.toLowerCase();
      const refPath = refUrl.pathname.toLowerCase();
      if (refPath.includes("/portal") || refHost.includes("piracicaba.sp.gov.br")) {
        return "interno";
      }
    }

    const host = window.location.hostname.toLowerCase();
    if (host.endsWith("pmp.sp.gov.br")) {
      return "externo";
    }
  } catch (e) {
  }
  return "externo";
}

function getAppContext() {
  try {
    const cached = sessionStorage.getItem(APP_CONTEXT_STORAGE_KEY);
    if (cached === "interno" || cached === "externo") {
      return cached;
    }
  } catch (e) {}

  const context = detectAppContext();

  try {
    sessionStorage.setItem(APP_CONTEXT_STORAGE_KEY, context);
  } catch (e) {}

  return context;
}

function buildInternalUrl(path) {
  if (getAppContext() !== "interno") return path;
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}ctx=interno`;
}

const INTERNO_BASE_URL = "https://sempapel.piracicaba.sp.gov.br";

function getServiceLink(service) {
  if (!service) return null;
  if (getAppContext() === "interno" && service.linkInterno) {
    const internal = service.linkInterno;
    return internal.startsWith("/") ? `${INTERNO_BASE_URL}${internal}` : internal;
  }
  return service.link || null;
}

// ══════════════════════════════════════════════
//  ORDEM DE EXIBIÇÃO DAS CATEGORIA
// ══════════════════════════════════════════════
// A ordem das categorias na página inicial segue a ordem dos IDs
const categoryOrder = [
  "transito",             // Trânsito
  "animais",              // Animais
  "saude",                // Saúde Pública
  "ruas_bairros",         // Ruas e Bairros
  "educacao",             // Educação
  "transporte_publico",   // Transporte Público
  "agricultura",         // Agricultura e Zona Rural
  "financas",             // Finanças Públicas
  "limpeza_publica",      // Limpeza Pública
  "eventos",              // Eventos
  "atendimento_social",   // Atendimento Social
  "fiscalizacao",         // Fiscalização
  "discriminacao",        // Discriminação
  "ouvidoria",            // Sugestões e Reclamações
  "esporte_lazer",        // Esporte e Lazer
  "seguranca_justica",    // Segurança e Justiça
];

// ══════════════════════════════════════════════
//  SERVIÇOS EM DESTAQUE
// ══════════════════════════════════════════════
// A ordem dos serviços em destaque na página inicial segue a ordem dos IDs
// Os ID's são os mesmo dos formulários
const featuredOrder = [
  635, // Cata-Cacareco
  646, // Poda de Árvore
  678, // Buraco em Asfalto
  670, // Corte de Mato em Áreas Verdes
  701, // Fiscalização de Corte de Mato em Terreno Particular
  506, // Posse Responsável de Animais
  585, // Impostos e Taxas
  628, // Reclamação de Coleta de Lixo Domiciliar
  645, // Sinalização de Trânsito (Placa de Trânsito)
  676, // Fiscalização de Trânsito (Solicitação de Fiscalização)
];

const categories = [];
