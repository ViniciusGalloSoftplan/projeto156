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
  window.location.href = 'index.html';
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
  } else if (cat.services && cat.services.length > 0) {
    totalServices = cat.services.length;
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

      subCard.addEventListener('click', () => {
        window.location.href = `subcategoria.html#${sub.id}`;
      });

      grid.appendChild(subCard);
    });
  } else if (cat.services && cat.services.length > 0) {
    // Render services directly (no subcategories)
    cat.services.forEach(svc => {
      const svcCard = document.createElement('div');
      svcCard.className = 'card';
      svcCard.innerHTML = `
        <div class="card-header">
          <div class="card-icon" style="background: var(--tag-bg); color: var(--accent);">
            <iconify-icon icon="${svc.icon}"></iconify-icon>
          </div>
          <div class="card-info">
            <div class="card-name">${svc.name}</div>
            <div class="card-desc">${svc.desc}</div>
          </div>
        </div>
        <div class="card-tag">${svc.tag}</div>
        <div class="card-arrow">
          <iconify-icon icon="maki:arrow"></iconify-icon>
        </div>
      `;
      svcCard.addEventListener('click', () => {
        if (svc.link) {
          window.open(svc.link, '_blank');
        }
      });
      grid.appendChild(svcCard);
    });
  }
}

// ══════════════════════════════════════════════
//  MODAL
// ══════════════════════════════════════════════
function openModal(title, url) {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalIframe = document.getElementById('modalIframe');
  
  if (!modalOverlay || !modalTitle || !modalIframe) return;
  
  modalTitle.textContent = title;
  modalIframe.src = url;
  modalOverlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalIframe = document.getElementById('modalIframe');
  
  if (!modalOverlay || !modalIframe) return;
  
  modalOverlay.style.display = 'none';
  modalIframe.src = '';
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
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
  // Get category ID from hash
  activeId = window.location.hash.substring(1);
  
  if (activeId) {
    const cat = categories.find(c => c.id === activeId);
    updateBreadcrumb(cat ? cat.name : null);
    render();
  } else {
    // If no ID, redirect to index
    window.location.href = 'index.html';
  }
});
