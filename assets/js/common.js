// ══════════════════════════════════════════════
//  ACESSIBILIDADE: elementos clicáveis via teclado
// ══════════════════════════════════════════════
// Torna um elemento clicável (div) acessível por teclado: focável via
// Tab e ativável com Enter/Espaço, igual a um botão nativo.
function makeKeyboardActivatable(el) {
  el.setAttribute('tabindex', '0');
  el.setAttribute('role', 'button');
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      el.click();
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

function setupModalHandlers() {
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  const modalCloseBtn = document.querySelector('.modal-close');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
}

// ══════════════════════════════════════════════
//  DROPDOWN DE PROTOCOLO (cabeçalho)
// ══════════════════════════════════════════════
function setupProtocolDropdown() {
  const protocolDropdown = document.querySelector('.protocol-dropdown');
  const protocolToggle = document.querySelector('.protocol-dropdown-toggle');
  if (!protocolDropdown || !protocolToggle) return;

  protocolToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = protocolDropdown.classList.toggle('open');
    protocolToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.addEventListener('click', (e) => {
    if (!protocolDropdown.contains(e.target)) {
      protocolDropdown.classList.remove('open');
      protocolToggle.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      protocolDropdown.classList.remove('open');
      protocolToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ══════════════════════════════════════════════
//  CARD DE SERVIÇO (usado em categoria.js e subcategoria.js)
// ══════════════════════════════════════════════
function createServiceCard(svc, { showArrow = true } = {}) {
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
    ${showArrow ? `<div class="card-arrow">
      <iconify-icon icon="maki:arrow"></iconify-icon>
    </div>` : ''}
  `;
  makeKeyboardActivatable(svcCard);
  svcCard.addEventListener('click', () => {
    const link = getServiceLink(svc);
    if (link) {
      window.open(link, '_blank');
    }
  });
  return svcCard;
}
