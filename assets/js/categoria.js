// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let activeId = null;

// ══════════════════════════════════════════════
//  BREADCRUMB
// ══════════════════════════════════════════════
function updateBreadcrumb(categoryName = null) {
  const breadcrumb = document.getElementById('breadcrumb');
  const breadcrumbCategory = document.getElementById('breadcrumbCategory');
  if (!breadcrumb) return;
  
  if (categoryName) {
    breadcrumbCategory.textContent = categoryName;
  }
}

function goBack() {
  window.location.href = buildInternalUrl('index.html');
}

// ══════════════════════════════════════════════
//  RENDER CATEGORY
// ══════════════════════════════════════════════
function renderCategory(main) {
  const cat = categories.find(c => c.id === activeId);
  if (!cat) {
    main.innerHTML = '<div class="section-header"><div class="section-title">Categoria não encontrada</div></div>';
    return;
  }

  // Calculate total services count
  let totalServices = 0;
  if (cat.subcategories && cat.subcategories.length > 0) {
    cat.subcategories.forEach(sub => {
      totalServices += sub.services.length;
    });
  }
  if (cat.services && cat.services.length > 0) {
    totalServices += cat.services.length;
  }

  main.style.setProperty('--category-bg', cat.colorLight);
  main.style.setProperty('--category-color', cat.color);

  main.innerHTML = `
    <div class="section-header">
      <div class="section-icon-big">
        <iconify-icon icon="${cat.icon}"></iconify-icon>
      </div>
      <div>
        <div class="section-title">${cat.name}</div>
        <div class="section-desc">${cat.desc}</div>
        <div class="section-services-count">${totalServices} serviço${totalServices !== 1 ? 's' : ''} disponíve${totalServices !== 1 ? 'is' : 'l'}</div>
      </div>
    </div>
    <div class="cards-grid" id="cardsGrid"></div>
  `;

  const grid = document.getElementById('cardsGrid');

  // Check if category has subcategories
  if (cat.subcategories && cat.subcategories.length > 0) {
    // Render subcategories as clickable cards (no accordion)
    cat.subcategories.forEach(sub => {
      const subCard = document.createElement('div');
      subCard.className = 'subcategory-card';
      subCard.style.setProperty('--category-bg', cat.colorLight);
      subCard.style.setProperty('--category-color', cat.color);
      subCard.style.cursor = 'pointer';
      
      const serviceCount = sub.services ? sub.services.length : 0;
      
      subCard.innerHTML = `
        <div class="subcategory-badge">${serviceCount} Serviço${serviceCount !== 1 ? 's' : ''}</div>
        <div class="subcategory-header">
          <div class="subcategory-icon">
            <iconify-icon icon="${sub.icon}"></iconify-icon>
          </div>
          <div class="subcategory-info">
            <div class="subcategory-name">${sub.name}</div>
            <div class="subcategory-desc">${sub.desc}</div>
          </div>
          <div class="subcategory-toggle" style="transform: rotate(0deg)">
            <iconify-icon icon="maki:arrow"></iconify-icon>
          </div>
        </div>
      `;

      makeKeyboardActivatable(subCard);
      subCard.addEventListener('click', () => {
        window.location.href = buildInternalUrl(`subcategoria.html?id=${sub.id}`);
      });

      grid.appendChild(subCard);
    });
  }

  if (cat.services && cat.services.length > 0) {
    // Render standalone services (avulsos) alongside any subcategory cards
    cat.services.forEach(svc => {
      grid.appendChild(createServiceCard(svc));
    });
  }
}

// ══════════════════════════════════════════════
//  INIT (modal + dropdown de protocolo + breadcrumb)
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  setupModalHandlers();
  setupProtocolDropdown();

  // Setup breadcrumb back button
  const backBtn = document.querySelector('.breadcrumb-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', goBack);
  }

  // Setup breadcrumb home item
  const breadcrumbHome = document.querySelector('.breadcrumb-item[data-level="home"]');
  if (breadcrumbHome) {
    breadcrumbHome.addEventListener('click', goBack);
  }
});

// ══════════════════════════════════════════════
//  RENDER
// ══════════════════════════════════════════════
function render() {
  const main = document.getElementById('main');
  if (main) {
    renderCategory(main);
  }
}

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Get category ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('id');
  
  if (categoryId) {
    activeId = categoryId;
    const cat = categories.find(c => c.id === activeId);
    updateBreadcrumb(cat ? cat.name : null);
    render();
  } else {
    // If no ID, redirect to index
    window.location.href = buildInternalUrl('index.html');
  }
});
