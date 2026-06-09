// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let searchQuery = "";
let carouselIndex = 0;

// ══════════════════════════════════════════════
//  FEATURED SERVICES
// ══════════════════════════════════════════════
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
  "Emissão de Boleto": "receipt",
  "Segunda Via de Conta": "file-text",
  "Nota Fiscal Eletrônica": "file-check",
  "Agendamento de Saúde": "calendar",
  "Alvará de Funcionamento": "clipboard-check",
  "Alvará de Obras": "hammer",
  "Ouvidoria": "message-square",
  "Coleta Seletiva e Reciclagem": "recycle",
  "Cata Cacareco": "truck",
  "Habite-se": "clipboard-check"
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
  
  // Get cards per slide based on screen size
  const getCardsPerSlide = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };
  
  // Divide into groups based on screen size
  const groups = [];
  const cardsPerSlide = getCardsPerSlide();
  for (let i = 0; i < featuredServices.length; i += cardsPerSlide) {
    groups.push(featuredServices.slice(i, i + cardsPerSlide));
  }
  
  featuredSection.innerHTML = `
    <div class="featured-header">
      <div class="featured-title">Serviços mais acessados</div>
    </div>
    <div class="carousel-container">
      <button class="carousel-nav" id="carouselPrev" ${carouselIndex === 0 ? 'disabled' : ''}>
        <i data-lucide="chevron-left"></i>
      </button>
      <div class="carousel-viewport" id="carouselViewport">
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
        window.location.href = `categoria.html#${categoryId}`;
      }
    });
  });
}

function setupCarouselNavigation(totalGroups) {
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const viewport = document.getElementById('carouselViewport');
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  
  if (!prevBtn || !nextBtn || !viewport || !track) return;
  
  const slides = track.querySelectorAll('.carousel-slide');
  const isDesktop = window.innerWidth > 1024;
  
  const updateCarousel = (index) => {
    carouselIndex = index;
    
    if (isDesktop) {
      // Desktop: use transform-based sliding
      track.style.transform = `translateX(-${carouselIndex * 100}%)`;
    } else {
      // Mobile/Tablet: use scroll-snap
      const slide = slides[carouselIndex];
      if (slide) {
        slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
    
    prevBtn.disabled = carouselIndex === 0;
    nextBtn.disabled = carouselIndex >= totalGroups - 1;
    
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === carouselIndex);
    });
  };
  
  prevBtn.addEventListener('click', () => {
    if (carouselIndex > 0) {
      updateCarousel(carouselIndex - 1);
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (carouselIndex < totalGroups - 1) {
      updateCarousel(carouselIndex + 1);
    }
  });
  
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      updateCarousel(index);
    });
  });
  
  // Touch swipe detection for dot updates (mobile/tablet only)
  if (!isDesktop) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && carouselIndex < totalGroups - 1) {
          // Swipe left - next
          updateCarousel(carouselIndex + 1);
        } else if (diff < 0 && carouselIndex > 0) {
          // Swipe right - previous
          updateCarousel(carouselIndex - 1);
        }
      }
    };
    
    // Update dots on scroll (for scroll-snap)
    let scrollTimeout;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const trackCenter = track.scrollLeft + track.offsetWidth / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        slides.forEach((slide, index) => {
          const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
          const distance = Math.abs(trackCenter - slideCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        
        if (closestIndex !== carouselIndex) {
          carouselIndex = closestIndex;
          dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === carouselIndex);
          });
          prevBtn.disabled = carouselIndex === 0;
          nextBtn.disabled = carouselIndex >= totalGroups - 1;
        }
      }, 100);
    }, { passive: true });
  }
  
  // Handle resize - re-render carousel with new grouping
  window.addEventListener('resize', () => {
    const featuredSection = document.getElementById('featuredSection');
    if (featuredSection) {
      renderFeaturedCarousel();
    }
  });
}

// ══════════════════════════════════════════════
//  HELPER: Get service examples for category
// ══════════════════════════════════════════════
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

// ══════════════════════════════════════════════
//  RENDER CATEGORY MENU (MENU PRINCIPAL)
// ══════════════════════════════════════════════
function renderCategoryMenu(main) {
  main.innerHTML = `
    <div class="section-header">
      <div class="section-icon-big" style="background:var(--tag-bg); color:var(--accent)">
        <i data-lucide="building-2"></i>
      </div>
      <div>
        <div class="section-title">Categorias de Serviços</div>
        <div class="section-desc">Explore todos os serviços da Prefeitura Municipal de Piracicaba por categoria.</div>
      </div>
    </div>
    <div class="search-wrap">
      <span class="search-icon"><i data-lucide="search"></i></span>
      <input type="text" id="searchInput" placeholder="Buscar serviços, assuntos ou categorias…" value="${searchQuery}" autocomplete="off">
      <span class="search-count" id="searchCount"></span>
      <div class="autocomplete-dropdown" id="autocompleteDropdown"></div>
    </div>
    <div class="featured-section" id="featuredSection"></div>
    <div class="category-grid" id="categoryGrid"></div>
  `;

  setupSearchInput();
  renderFeaturedCarousel();

  // Initialize Lucide icons for section header
  lucide.createIcons();

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
    const examplesText = serviceExamples.join(' · ');
    
    card.innerHTML = `
      <div class="category-card-header">
        <div class="category-icon" style="background:${cat.colorLight}; color:${cat.color}">
          <i data-lucide="${cat.icon}"></i>
        </div>
        <div class="category-name">${cat.name}</div>
      </div>
      <div class="category-services">
        <span class="service-examples">${examplesText}</span>
        <span class="service-count">(${serviceCount} serviço${serviceCount !== 1 ? 's' : ''})</span>
      </div>
      <span class="category-arrow">→</span>
    `;
    card.addEventListener('click', () => {
      window.location.href = `categoria.html#${cat.id}`;
    });
    grid.appendChild(card);
  });

  // Initialize Lucide icons after rendering
  lucide.createIcons();
}

// ══════════════════════════════════════════════
//  SEARCH
// ══════════════════════════════════════════════
function setupSearchInput() {
  const searchInput = document.getElementById('searchInput');
  const autocompleteDropdown = document.getElementById('autocompleteDropdown');
  const searchCount = document.getElementById('searchCount');
  
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchQuery = query;
    
    if (query.length === 0) {
      autocompleteDropdown.style.display = 'none';
      searchCount.textContent = '';
      renderCategoryMenu(document.getElementById('main'));
      return;
    }

    // Search for matching services
    const results = [];
    categories.forEach(cat => {
      if (cat.subcategories && cat.subcategories.length > 0) {
        cat.subcategories.forEach(sub => {
          sub.services.forEach(svc => {
            if (svc.name.toLowerCase().includes(query) || 
                svc.desc.toLowerCase().includes(query) ||
                svc.tag?.toLowerCase().includes(query)) {
              results.push({
                ...svc,
                categoryName: cat.name,
                categoryId: cat.id,
                subcategoryName: sub.name
              });
            }
          });
        });
      } else if (cat.services && cat.services.length > 0) {
        cat.services.forEach(svc => {
          if (svc.name.toLowerCase().includes(query) || 
              svc.desc.toLowerCase().includes(query) ||
              svc.tag?.toLowerCase().includes(query)) {
            results.push({
              ...svc,
              categoryName: cat.name,
              categoryId: cat.id
            });
          }
        });
      }
    });

    searchCount.textContent = `${results.length} resultado${results.length !== 1 ? 's' : ''}`;

    if (results.length > 0) {
      autocompleteDropdown.innerHTML = results.slice(0, 10).map(result => `
        <div class="autocomplete-item" data-category-id="${result.categoryId}">
          <div class="autocomplete-item-icon">
            <i data-lucide="${result.icon}"></i>
          </div>
          <div class="autocomplete-item-content">
            <div class="autocomplete-item-name">${result.name}</div>
            <div class="autocomplete-item-desc">${result.categoryName}</div>
          </div>
        </div>
      `).join('');
      autocompleteDropdown.style.display = 'block';

      // Initialize Lucide icons for autocomplete
      lucide.createIcons({ root: autocompleteDropdown });

      autocompleteDropdown.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', () => {
          const categoryId = item.dataset.categoryId;
          window.location.href = `categoria.html#${categoryId}`;
        });
      });
    } else {
      autocompleteDropdown.innerHTML = '<div class="autocomplete-no-results">Nenhum resultado encontrado</div>';
      autocompleteDropdown.style.display = 'block';
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !autocompleteDropdown.contains(e.target)) {
      autocompleteDropdown.style.display = 'none';
    }
  });
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
  const main = document.getElementById('main');
  if (main) {
    renderCategoryMenu(main);
  }
});
