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
  
  function processSubcategory(sub, cat, parentName = '') {
    if (sub.services && sub.services.length > 0) {
      sub.services.forEach(svc => {
        if (svc.featured) {
          featured.push({
            ...svc,
            categoryName: cat.name,
            categoryId: cat.id,
            subcategoryName: parentName ? `${parentName} → ${sub.name}` : sub.name,
            color: cat.color,
            colorLight: cat.colorLight
          });
        }
      });
    }
    if (sub.subcategories && sub.subcategories.length > 0) {
      sub.subcategories.forEach(nestedSub => {
        processSubcategory(nestedSub, cat, parentName ? `${parentName} → ${sub.name}` : sub.name);
      });
    }
  }
  
  categories.forEach(cat => {
    if (cat.subcategories && cat.subcategories.length > 0) {
      cat.subcategories.forEach(sub => {
        processSubcategory(sub, cat);
      });
    }
    if (cat.services && cat.services.length > 0) {
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
  
  // Sort by order property if it exists, otherwise keep original order
  featured.sort((a, b) => {
    const orderA = a.order !== undefined ? a.order : 999;
    const orderB = b.order !== undefined ? b.order : 999;
    return orderA - orderB;
  });
  
  return featured;
}

function renderFeaturedCarousel() {
  const featuredSection = document.getElementById('featuredSection');
  if (!featuredSection) return;
  
  const featuredServices = getFeaturedServices();
  if (featuredServices.length === 0) {
    featuredSection.style.display = 'none';
    return;
  }
  
  // Reset carousel index to ensure dots match correctly
  carouselIndex = 0;
  
  // Get cards per slide based on screen size
  const getCardsPerSlide = () => {
    if (window.innerWidth <= 640) return 1;
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
      <button class="carousel-nav" id="carouselPrev" ${carouselIndex === 0 ? 'disabled' : ''} aria-label="Anterior">
        <iconify-icon icon="ph:caret-left" aria-hidden="true"></iconify-icon>
      </button>
      <div class="carousel-viewport" id="carouselViewport">
        <div class="carousel-track" id="carouselTrack">
          ${groups.map((group, groupIndex) => `
            <div class="carousel-slide" data-group="${groupIndex}">
              ${group.map(service => `
                <div class="featured-card" data-service-name="${service.name}" data-category-id="${service.categoryId}">
                  <div class="featured-card-icon" aria-hidden="true">
                    <iconify-icon icon="${service.icon}"></iconify-icon>
                  </div>
                  <div class="featured-card-name">${service.name}</div>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>
      <button class="carousel-nav" id="carouselNext" ${carouselIndex >= groups.length - 1 ? 'disabled' : ''} aria-label="Próximo">
        <iconify-icon icon="ph:caret-right" aria-hidden="true"></iconify-icon>
      </button>
    </div>
    <div class="carousel-dots" id="carouselDots">
      ${groups.map((_, index) => `
        <div class="carousel-dot ${index === carouselIndex ? 'active' : ''}" data-index="${index}"></div>
      `).join('')}
    </div>
  `;
  
  // Setup carousel navigation
  setupCarouselNavigation(groups.length);
  
  // Setup card click handlers
  featuredSection.querySelectorAll('.featured-card').forEach(card => {
    makeKeyboardActivatable(card);
    card.addEventListener('click', () => {
      const serviceName = card.dataset.serviceName;
      const categoryId = card.dataset.categoryId;
      const service = featuredServices.find(s => s.name === serviceName);
      
      const link = getServiceLink(service);
      if (link) {
        window.open(link, '_blank');
      } else if (categoryId) {
        window.location.href = buildInternalUrl(`categoria.html?id=${categoryId}`);
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
      if (sub.services && sub.services.length > 0) {
        sub.services.forEach(svc => {
          allServices.push(svc.name);
        });
      }
    });
  }
  if (cat.services && cat.services.length > 0) {
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
  // Setup online option click handler
  const onlineOption = main.querySelector('.online-option');
  if (onlineOption) {
    onlineOption.addEventListener('click', () => {
      const categoryGrid = document.getElementById('categoryGrid');
      if (categoryGrid) {
        categoryGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

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
        if (sub.services && sub.services.length > 0) {
          serviceCount += sub.services.length;
        }
      });
    }
    if (cat.services && cat.services.length > 0) {
      serviceCount += cat.services.length;
    }
    
    // Get 2-3 service examples
    const serviceExamples = getServiceExamples(cat, 3);
    const examplesText = serviceExamples.join(' · ');
    
    card.innerHTML = `
      <div class="category-card-header">
        <div class="category-icon" style="background:#dbeafe; color:#2563eb" aria-hidden="true">
          <iconify-icon icon="${cat.icon}"></iconify-icon>
        </div>
        <div class="category-info">
          <div class="category-name">${cat.name}</div>
          <div class="category-desc">${cat.desc}</div>
        </div>
      </div>
      <div class="category-tag">${serviceCount} serviço${serviceCount !== 1 ? 's' : ''}</div>
      <div class="card-arrow" aria-hidden="true">
        <iconify-icon icon="maki:arrow"></iconify-icon>
      </div>
    `;
    makeKeyboardActivatable(card);
    card.addEventListener('click', () => {
      window.location.href = buildInternalUrl(`categoria.html?id=${cat.id}`);
    });
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════
//  SEARCH
// ══════════════════════════════════════════════
function setupSearchInput() {
  const searchInput = document.getElementById('searchInput');
  const autocompleteDropdown = document.getElementById('autocompleteDropdown');
  const searchCount = document.getElementById('searchCount');
  const searchBarTop = document.querySelector('.search-bar-top');
  const searchToggle = document.querySelector('.search-toggle');
  const closeButton = document.querySelector('.search-close-btn');
  
  if (!searchInput) return;

  const openSearchFullScreen = () => {
    if (searchBarTop) {
      searchBarTop.classList.add('expanded');
      searchToggle?.setAttribute('aria-expanded', 'true');
      searchInput.focus();
    }
  };

  const closeSearchFullScreen = () => {
    if (searchBarTop) {
      searchBarTop.classList.remove('expanded');
      searchToggle?.setAttribute('aria-expanded', 'false');
      searchToggle?.focus();
    }
  };

  const resetSearchState = () => {
    searchInput.value = '';
    searchQuery = '';
    searchCount.textContent = '';
    autocompleteDropdown.style.display = 'none';
    autocompleteDropdown.innerHTML = '';
  };

  if (searchToggle) {
    searchToggle.addEventListener('click', openSearchFullScreen);
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      resetSearchState();
      closeSearchFullScreen();
    });
  }

  document.addEventListener('click', (e) => {
    if (!searchBarTop?.classList.contains('expanded')) return;
    if (searchBarTop.contains(e.target)) return;
    if (!searchQuery) {
      closeSearchFullScreen();
    }
  });

  searchInput.addEventListener('focus', () => {
    if (searchBarTop && !searchBarTop.classList.contains('expanded')) {
      searchBarTop.classList.add('expanded');
      searchToggle?.setAttribute('aria-expanded', 'true');
    }
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      if (searchBarTop?.classList.contains('expanded') && !searchQuery && !searchBarTop.contains(document.activeElement)) {
        closeSearchFullScreen();
      }
    }, 0);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchBarTop?.classList.contains('expanded') && !searchQuery) {
      closeSearchFullScreen();
    }
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchQuery = query;
    
    if (query.length === 0) {
      autocompleteDropdown.style.display = 'none';
      autocompleteDropdown.innerHTML = '';
      searchCount.textContent = '';
      return;
    }

    // Search for matching services
    const results = [];
    categories.forEach(cat => {
      if (cat.subcategories && cat.subcategories.length > 0) {
        cat.subcategories.forEach(sub => {
          if (sub.services && sub.services.length > 0) {
            sub.services.forEach(svc => {
              const matchesKeywords = svc.keywords && svc.keywords.some(kw => kw.toLowerCase().includes(query));
              if (svc.name.toLowerCase().includes(query) || 
                  svc.desc.toLowerCase().includes(query) ||
                  svc.tag?.toLowerCase().includes(query) ||
                  matchesKeywords) {
                results.push({
                  ...svc,
                  categoryName: cat.name,
                  categoryId: cat.id,
                  subcategoryName: sub.name
                });
              }
            });
          }
        });
      }
      if (cat.services && cat.services.length > 0) {
        cat.services.forEach(svc => {
          const matchesKeywords = svc.keywords && svc.keywords.some(kw => kw.toLowerCase().includes(query));
          if (svc.name.toLowerCase().includes(query) ||
              svc.desc.toLowerCase().includes(query) ||
              svc.tag?.toLowerCase().includes(query) ||
              matchesKeywords) {
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
        <div class="autocomplete-item" data-category-id="${result.categoryId}" data-service-link="${getServiceLink(result) || ''}">
          <div class="autocomplete-item-icon">
            <iconify-icon icon="${result.icon}"></iconify-icon>
          </div>
          <div class="autocomplete-item-content">
            <div class="autocomplete-item-name">${result.name}</div>
            <div class="autocomplete-item-desc">${result.categoryName}</div>
          </div>
        </div>
      `).join('');
      autocompleteDropdown.style.display = 'block';

      autocompleteDropdown.querySelectorAll('.autocomplete-item').forEach(item => {
        makeKeyboardActivatable(item);
        item.addEventListener('click', () => {
          const categoryId = item.dataset.categoryId;
          const serviceLink = item.dataset.serviceLink;

          if (serviceLink) {
            window.open(serviceLink, '_blank', 'noopener,noreferrer');
          } else {
            window.location.href = buildInternalUrl(`categoria.html?id=${categoryId}`);
          }
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
      autocompleteDropdown.innerHTML = '';
    }
  });
}

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  if (main) {
    renderCategoryMenu(main);
  }

  setupModalHandlers();
  setupProtocolDropdown();
});
