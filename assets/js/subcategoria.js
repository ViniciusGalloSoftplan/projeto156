// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let category = null;
let subcategory = null;
let parentSub = null; // For nested subcategories

// ══════════════════════════════════════════════
//  HELPER: Find subcategory across all categories
// ══════════════════════════════════════════════
function findSubcategory(targetId) {
  for (const cat of categories) {
    if (!cat.subcategories) continue;
    
    // Check direct subcategories
    for (const sub of cat.subcategories) {
      if (sub.id === targetId) {
        return { category: cat, subcategory: sub, parentSub: null };
      }
      
      // Check nested subcategories (2 levels deep)
      if (sub.subcategories && sub.subcategories.length > 0) {
        for (const subSub of sub.subcategories) {
          if (subSub.id === targetId) {
            return { category: cat, subcategory: subSub, parentSub: sub };
          }
          
          // Check deeply nested subcategories (3+ levels)
          if (subSub.subcategories && subSub.subcategories.length > 0) {
            for (const subSubSub of subSub.subcategories) {
              if (subSubSub.id === targetId) {
                return { category: cat, subcategory: subSubSub, parentSub: subSub };
              }
            }
          }
        }
      }
    }
  }
  return null;
}

// ══════════════════════════════════════════════
//  BREADCRUMB
// ══════════════════════════════════════════════
function updateBreadcrumb() {
  const breadcrumbCategory = document.getElementById('breadcrumbCategory');
  const breadcrumbSubcategory = document.getElementById('breadcrumbSubcategory');
  const backBtn = document.getElementById('backBtn');
  const breadcrumbContent = document.getElementById('breadcrumb');
  
  if (!breadcrumbCategory || !breadcrumbSubcategory || !backBtn || !breadcrumbContent) return;
  
  breadcrumbCategory.textContent = category ? category.name : 'Categoria';
  breadcrumbSubcategory.textContent = subcategory ? subcategory.name : 'Subcategoria';
  
  backBtn.onclick = () => {
    if (parentSub) {
      // If nested, go back to parent subcategory
      window.location.href = `subcategoria.html#${parentSub.id}`;
    } else {
      // If direct, go back to category
      window.location.href = `categoria.html#${category.id}`;
    }
  };
  
  // Rebuild breadcrumb HTML based on nesting level
  let breadcrumbHTML = `
    <button class="breadcrumb-back-btn" id="backBtn">
      <iconify-icon icon="ph:arrow-left"></iconify-icon>
      <span>Voltar</span>
    </button>
    <span class="breadcrumb-separator">|</span>
    <span class="breadcrumb-item" data-level="home">Início</span>
    <span class="breadcrumb-separator">></span>
  `;
  
  if (parentSub) {
    // 4 levels: Início > Category > ParentSub > Subcategory
    breadcrumbHTML += `
      <span class="breadcrumb-item" data-level="category">${category.name}</span>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-item" data-level="parentSub">${parentSub.name}</span>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-item active">${subcategory.name}</span>
    `;
  } else {
    // 3 levels: Início > Category > Subcategory
    breadcrumbHTML += `
      <span class="breadcrumb-item" data-level="category">${category.name}</span>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-item active">${subcategory.name}</span>
    `;
  }
  
  breadcrumbContent.innerHTML = breadcrumbHTML;
  
  // Re-attach back button event
  const newBackBtn = document.getElementById('backBtn');
  if (newBackBtn) {
    newBackBtn.onclick = () => {
      if (parentSub) {
        window.location.href = `subcategoria.html#${parentSub.id}`;
      } else {
        window.location.href = `categoria.html#${category.id}`;
      }
    };
  }
  
  // Setup breadcrumb navigation
  document.querySelectorAll('.breadcrumb-item[data-level="home"]').forEach(item => {
    item.onclick = () => {
      window.location.href = 'index.html';
    };
  });
  
  document.querySelectorAll('.breadcrumb-item[data-level="category"]').forEach(item => {
    item.onclick = () => {
      window.location.href = `categoria.html#${category.id}`;
    };
  });
  
  document.querySelectorAll('.breadcrumb-item[data-level="parentSub"]').forEach(item => {
    item.onclick = () => {
      window.location.href = `subcategoria.html#${parentSub.id}`;
    };
  });
}

// ══════════════════════════════════════════════
//  RENDER SUBCATEGORY
// ══════════════════════════════════════════════
function renderSubcategory(main) {
  if (!category || !subcategory) {
    main.innerHTML = `
      <div class="section-header">
        <div class="section-icon-big" style="background:var(--tag-bg); color:var(--accent)">
          <iconify-icon icon="ph:warning-circle"></iconify-icon>
        </div>
        <div>
          <div class="section-title">Subcategoria não encontrada</div>
          <div class="section-desc">A subcategoria solicitada não existe ou o link está incorreto.</div>
        </div>
      </div>
      <div class="cards-grid">
        <div class="card" style="cursor:pointer" onclick="window.location.href='index.html'">
          <div class="card-icon" style="background:var(--tag-bg); color:var(--accent)">
            <iconify-icon icon="ph:house"></iconify-icon>
          </div>
          <div class="card-name">Voltar para o Início</div>
          <div class="card-desc">Ir para a página inicial</div>
        </div>
      </div>
    `;
    return;
  }

  // Set CSS variables for colors
  main.style.setProperty('--category-bg', category.colorLight);
  main.style.setProperty('--category-color', category.color);

  // Check if subcategory has nested subcategories or direct services
  const hasNestedSubcategories = subcategory.subcategories && subcategory.subcategories.length > 0;
  const hasServices = subcategory.services && subcategory.services.length > 0;

  main.innerHTML = `
    <div class="section-header">
      <div class="section-icon-big">
        <iconify-icon icon="${subcategory.icon}"></iconify-icon>
      </div>
      <div>
        <div class="section-title">${subcategory.name}</div>
        <div class="section-desc">${subcategory.desc}</div>
        ${hasServices ? `<div class="section-services-count">${subcategory.services.length} serviço${subcategory.services.length !== 1 ? 's' : ''} disponíve${subcategory.services.length !== 1 ? 'is' : 'l'}</div>` : ''}
      </div>
    </div>
    <div class="cards-grid" id="cardsGrid"></div>
  `;

  const grid = document.getElementById('cardsGrid');

  if (hasNestedSubcategories) {
    // Render nested subcategories as clickable cards
    subcategory.subcategories.forEach(nestedSub => {
      const subCard = document.createElement('div');
      subCard.className = 'subcategory-card';
      subCard.style.setProperty('--category-bg', category.colorLight);
      subCard.style.setProperty('--category-color', category.color);
      subCard.style.cursor = 'pointer';
      
      const nestedServiceCount = nestedSub.services ? nestedSub.services.length : 0;
      
      subCard.innerHTML = `
        <div class="subcategory-badge">${nestedServiceCount} Serviço${nestedServiceCount !== 1 ? 's' : ''}</div>
        <div class="subcategory-header">
          <div class="subcategory-icon">
            <iconify-icon icon="${nestedSub.icon}"></iconify-icon>
          </div>
          <div class="subcategory-info">
            <div class="subcategory-name">${nestedSub.name}</div>
            <div class="subcategory-desc">${nestedSub.desc}</div>
          </div>
          <div class="subcategory-toggle" style="transform: rotate(0deg)">
            <iconify-icon icon="ph:caret-right"></iconify-icon>
          </div>
        </div>
      `;
      
      subCard.addEventListener('click', () => {
        window.location.href = `subcategoria.html#${nestedSub.id}`;
      });
      
      grid.appendChild(subCard);
    });
  } else if (hasServices) {
    // Render services directly
    subcategory.services.forEach(svc => {
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
      `;
      svcCard.addEventListener('click', () => {
        if (svc.link) {
          window.open(svc.link, '_blank');
        }
      });
      grid.appendChild(svcCard);
    });
  } else {
    // No services or nested subcategories
    grid.innerHTML = `
      <div class="section-header">
        <div class="section-desc">Nenhum serviço disponível nesta subcategoria.</div>
      </div>
    `;
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
//  INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Parse hash from URL (only subcategoryId)
  const subcategoryId = window.location.hash.substring(1);
  
  if (subcategoryId) {
    // Find subcategory across all categories
    const result = findSubcategory(subcategoryId);
    
    if (result) {
      category = result.category;
      subcategory = result.subcategory;
      parentSub = result.parentSub;
      
      updateBreadcrumb();
      render();
    } else {
      // Subcategory not found
      const main = document.getElementById('main');
      if (main) {
        main.innerHTML = `
          <div class="section-header">
            <div class="section-icon-big" style="background:var(--tag-bg); color:var(--accent)">
              <iconify-icon icon="ph:warning-circle"></iconify-icon>
            </div>
            <div>
              <div class="section-title">Subcategoria não encontrada</div>
              <div class="section-desc">A subcategoria solicitada não existe.</div>
            </div>
          </div>
          <div class="cards-grid">
            <div class="card" style="cursor:pointer" onclick="window.location.href='index.html'">
              <div class="card-icon" style="background:var(--tag-bg); color:var(--accent)">
                <iconify-icon icon="ph:house"></iconify-icon>
              </div>
              <div class="card-name">Voltar para o Início</div>
              <div class="card-desc">Ir para a página inicial</div>
            </div>
          </div>
        `;
      }
    }
  } else {
    // No hash provided
    const main = document.getElementById('main');
    if (main) {
      main.innerHTML = `
        <div class="section-header">
          <div class="section-icon-big" style="background:var(--tag-bg); color:var(--accent)">
            <iconify-icon icon="ph:warning-circle"></iconify-icon>
          </div>
          <div>
            <div class="section-title">Link inválido</div>
            <div class="section-desc">Nenhuma subcategoria especificada.</div>
          </div>
        </div>
        <div class="cards-grid">
          <div class="card" style="cursor:pointer" onclick="window.location.href='index.html'">
            <div class="card-icon" style="background:var(--tag-bg); color:var(--accent)">
              <iconify-icon icon="ph:house"></iconify-icon>
            </div>
            <div class="card-name">Voltar para o Início</div>
            <div class="card-desc">Ir para a página inicial</div>
          </div>
        </div>
      `;
    }
  }
});

// ══════════════════════════════════════════════
//  RENDER
// ══════════════════════════════════════════════
function render() {
  const main = document.getElementById('main');
  if (main) {
    renderSubcategory(main);
  }
}
