// Reordena as categorias conforme a lista `categoryOrder` definida acima.
// Categorias com ID ausente na lista vão para o final, na ordem original.
categories.sort((a, b) => {
  let orderA = categoryOrder.indexOf(a.id);
  let orderB = categoryOrder.indexOf(b.id);
  if (orderA === -1) orderA = categoryOrder.length;
  if (orderB === -1) orderB = categoryOrder.length;
  return orderA - orderB;
});

// Marca como featured e define a ordem de cada serviço cujo ID
// (extraído do link) esteja na lista `featuredOrder` acima.
// Serviços fora da lista simplesmente não aparecem no carrossel.
(function applyFeaturedOrder() {
  function walk(node) {
    if (node.services) {
      node.services.forEach(svc => {
        const match = svc.link && svc.link.match(/servico-info\/(\d+)/);
        const id = match ? Number(match[1]) : null;
        const idx = id !== null ? featuredOrder.indexOf(id) : -1;
        if (idx !== -1) {
          svc.featured = true;
          svc.order = idx;
        }
      });
    }
    if (node.subcategories) {
      node.subcategories.forEach(walk);
    }
  }
  categories.forEach(walk);
})();
