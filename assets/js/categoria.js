// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let activeId = null;
let expandedSubcategories = new Set();

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
        <i data-lucide="${cat.icon}"></i>
      </div>
      <div>
        <div class="section-title">${cat.name}</div>
        <div class="section-desc">${cat.desc}</div>
        <div class="section-services-count">${totalServices} serviço${totalServices !== 1 ? 's' : ''} disponíve${totalServices !== 1 ? 'is' : 'l'}</div>
      </div>
    </div>
    <div class="cards-grid" id="cardsGrid"></div>
    <div class="guidance-text" id="guidanceText">Selecione uma subcategoria acima para ver os serviços disponíveis.</div>
  `;

  const grid = document.getElementById('cardsGrid');

  // Initialize guidance text visibility
  updateGuidanceText();

  // Check if category has subcategories
  if (cat.subcategories && cat.subcategories.length > 0) {
    // Render subcategories
    cat.subcategories.forEach(sub => {
      const subCard = document.createElement('div');
      subCard.className = 'subcategory-card';
      subCard.style.setProperty('--category-bg', cat.colorLight);
      subCard.style.setProperty('--category-color', cat.color);
      const isExpanded = expandedSubcategories.has(sub.id);
      subCard.innerHTML = `
        <div class="subcategory-badge">${sub.services.length} Serviços</div>
        <div class="subcategory-header">
          <div class="subcategory-icon">
            <i data-lucide="${sub.icon}"></i>
          </div>
          <div class="subcategory-info">
            <div class="subcategory-name">${sub.name}</div>
            <div class="subcategory-desc">${sub.desc}</div>
          </div>
          <div class="subcategory-toggle" style="transform: ${isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'}">
            <i data-lucide="chevron-right"></i>
          </div>
        </div>
        <div class="subcategory-services ${isExpanded ? 'expanded' : ''}">
          <div class="services-list"></div>
        </div>
      `;

      const header = subCard.querySelector('.subcategory-header');
      header.addEventListener('click', (e) => {
        e.stopPropagation();

        const servicesContainer = subCard.querySelector('.subcategory-services');
        const toggleIcon = subCard.querySelector('.subcategory-toggle');

        if (servicesContainer.classList.contains('expanded')) {
          servicesContainer.classList.remove('expanded');
          toggleIcon.style.transform = 'rotate(0deg)';
          expandedSubcategories.delete(sub.id);
        } else {
          servicesContainer.classList.add('expanded');
          toggleIcon.style.transform = 'rotate(90deg)';
          expandedSubcategories.add(sub.id);
        }

        // Update guidance text visibility
        updateGuidanceText();
      });

      // Initialize Lucide icons for this subcategory
      lucide.createIcons({ root: subCard });

      const servicesList = subCard.querySelector('.services-list');
      sub.services.forEach(svc => {
        const svcCard = document.createElement('div');
        svcCard.className = 'service-item';
        svcCard.innerHTML = `
          <div class="service-icon">
            <i data-lucide="${svc.icon}"></i>
          </div>
          <div class="service-info">
            <div class="service-name">${svc.name}</div>
            <div class="service-desc">${svc.desc}</div>
          </div>
          <div class="service-tag">${svc.tag}</div>
        `;
        svcCard.addEventListener('click', () => {
          if (svc.link) {
            window.open(svc.link, '_blank');
          }
        });
        servicesList.appendChild(svcCard);
      });

      grid.appendChild(subCard);
    });
  } else if (cat.services && cat.services.length > 0) {
    // Render services directly (no subcategories)
    cat.services.forEach(svc => {
      const svcCard = document.createElement('div');
      svcCard.className = 'card';
      svcCard.innerHTML = `
        <div class="card-icon" style="background: var(--tag-bg); color: var(--accent);">
          <i data-lucide="${svc.icon}"></i>
        </div>
        <div class="card-name">${svc.name}</div>
        <div class="card-desc">${svc.desc}</div>
        <div class="card-tag">${svc.tag}</div>
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
//  GUIDANCE TEXT
// ══════════════════════════════════════════════
function updateGuidanceText() {
  const guidanceText = document.getElementById('guidanceText');
  if (!guidanceText) return;

  if (expandedSubcategories.size > 0) {
    guidanceText.classList.add('hidden');
  } else {
    guidanceText.classList.remove('hidden');
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
    // Initialize Lucide icons after rendering
    lucide.createIcons();
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
