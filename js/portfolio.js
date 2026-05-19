import { artists } from './data/artists.js';
import { bindLightboxTriggers } from './lightbox.js';

export function initPortfolio() {
  buildCarousel();
  buildModal();
}

// ─── State ───────────────────────────────────────────────────────────────────
let activeIndex = 0;
let isAnimating = false;

function getBreakpoint() {
  const w = window.innerWidth;
  if (w < 640)  return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

let currentBreakpoint = getBreakpoint();

window.addEventListener('resize', () => {
  const bp = getBreakpoint();
  if (bp !== currentBreakpoint) {
    currentBreakpoint = bp;
    applyRoles();
  }
}, { passive: true });

// ─── DOM refs ─────────────────────────────────────────────────────────────────
let cards = [];
let ghostText, carouselName, carouselDiscipline, carouselCta;

// ─── Build carousel ───────────────────────────────────────────────────────────
function buildCarousel() {
  const stage = document.getElementById('carouselStage');
  ghostText          = document.getElementById('carouselGhostText');
  carouselName       = document.getElementById('carouselName');
  carouselDiscipline = document.getElementById('carouselDiscipline');
  carouselCta        = document.getElementById('carouselCta');

  if (!stage) return;

  // Preload all images
  artists.forEach(a => { const img = new Image(); img.src = a.cover; });

  // Create one card per artist
  artists.forEach((artist, i) => {
    const card = document.createElement('div');
    card.className = 'carousel-card';
    card.dataset.index = String(i);
    card.innerHTML = `
      <img src="${artist.cover}" alt="${artist.name}" draggable="false" />
      <div class="carousel-card-label">
        <span class="carousel-card-dot"></span>
        <span class="carousel-card-name">${artist.name}</span>
      </div>
    `;

    // Only the center card opens the modal
    card.addEventListener('click', () => {
      if (parseInt(card.dataset.index) === activeIndex && !isAnimating) {
        openModal(artist);
      }
    });

    stage.appendChild(card);
    cards.push(card);
  });

  // Arrow buttons
  document.getElementById('carouselPrev')?.addEventListener('click', () => navigate('prev'));
  document.getElementById('carouselNext')?.addEventListener('click', () => navigate('next'));

  // "View work" CTA also opens modal
  carouselCta?.addEventListener('click', e => {
    e.preventDefault();
    if (!isAnimating) openModal(artists[activeIndex]);
  });

  // Keyboard arrows
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  navigate('prev');
    if (e.key === 'ArrowRight') navigate('next');
  });

  updateUI(false);
  applyRoles();
}

// ─── Navigate ─────────────────────────────────────────────────────────────────
function navigate(direction) {
  if (isAnimating) return;
  isAnimating = true;

  // Fade ghost text out briefly
  if (ghostText) ghostText.style.opacity = '0';
  if (carouselName) carouselName.style.opacity = '0';
  if (carouselDiscipline) carouselDiscipline.style.opacity = '0';

  const n = artists.length;
  activeIndex = direction === 'next'
    ? (activeIndex + 1) % n
    : (activeIndex + n - 1) % n;

  applyRoles();

  // Fade text back in after brief pause
  setTimeout(() => {
    updateUI(true);
  }, 220);

  setTimeout(() => {
    isAnimating = false;
  }, 650);
}

// ─── Roles ────────────────────────────────────────────────────────────────────
// 6 artists mapped to: center, right1, right2, back, left2, left1
const ROLE_ORDER = ['center', 'right1', 'right2', 'back', 'left2', 'left1'];

function applyRoles() {
  const n = artists.length;
  cards.forEach((card, i) => {
    const offset = (i - activeIndex + n) % n;
    const role = ROLE_ORDER[offset];
    card.dataset.role = role;
    Object.assign(card.style, getStyle(role));
  });
}

// ─── Per-role styles ─────────────────────────────────────────────────────────
const TRANSITION = [
  'transform 650ms cubic-bezier(0.4,0,0.2,1)',
  'filter 650ms cubic-bezier(0.4,0,0.2,1)',
  'opacity 650ms cubic-bezier(0.4,0,0.2,1)',
  'left 650ms cubic-bezier(0.4,0,0.2,1)',
  'height 650ms cubic-bezier(0.4,0,0.2,1)',
  'bottom 650ms cubic-bezier(0.4,0,0.2,1)',
].join(', ');

const DESKTOP = {
  center: { left:'50%', height:'78%', bottom:'0',   transform:'translateX(-50%)', filter:'none',      opacity:'1',    zIndex:'20' },
  left1:  { left:'30%', height:'44%', bottom:'6%',  transform:'translateX(-50%)', filter:'blur(2px)', opacity:'0.8',  zIndex:'10' },
  right1: { left:'70%', height:'44%', bottom:'6%',  transform:'translateX(-50%)', filter:'blur(2px)', opacity:'0.8',  zIndex:'10' },
  left2:  { left:'14%', height:'26%', bottom:'10%', transform:'translateX(-50%)', filter:'blur(4px)', opacity:'0.45', zIndex:'5'  },
  right2: { left:'86%', height:'26%', bottom:'10%', transform:'translateX(-50%)', filter:'blur(4px)', opacity:'0.45', zIndex:'5'  },
  back:   { left:'50%', height:'14%', bottom:'14%', transform:'translateX(-50%)', filter:'blur(6px)', opacity:'0',    zIndex:'1'  },
};

const TABLET = {
  center: { left:'50%', height:'70%', bottom:'0',   transform:'translateX(-50%)', filter:'none',      opacity:'1',    zIndex:'20' },
  left1:  { left:'24%', height:'38%', bottom:'8%',  transform:'translateX(-50%)', filter:'blur(2px)', opacity:'0.75', zIndex:'10' },
  right1: { left:'76%', height:'38%', bottom:'8%',  transform:'translateX(-50%)', filter:'blur(2px)', opacity:'0.75', zIndex:'10' },
  left2:  { left:'8%',  height:'22%', bottom:'12%', transform:'translateX(-50%)', filter:'blur(4px)', opacity:'0.35', zIndex:'5'  },
  right2: { left:'92%', height:'22%', bottom:'12%', transform:'translateX(-50%)', filter:'blur(4px)', opacity:'0.35', zIndex:'5'  },
  back:   { left:'50%', height:'12%', bottom:'14%', transform:'translateX(-50%)', filter:'blur(6px)', opacity:'0',    zIndex:'1'  },
};

const MOBILE = {
  center: { left:'50%', height:'55%', bottom:'8%',  transform:'translateX(-50%)', filter:'none',      opacity:'1',    zIndex:'20' },
  left1:  { left:'18%', height:'24%', bottom:'16%', transform:'translateX(-50%)', filter:'blur(2px)', opacity:'0.75', zIndex:'10' },
  right1: { left:'82%', height:'24%', bottom:'16%', transform:'translateX(-50%)', filter:'blur(2px)', opacity:'0.75', zIndex:'10' },
  left2:  { left:'-4%', height:'13%', bottom:'20%', transform:'translateX(-50%)', filter:'blur(4px)', opacity:'0.3',  zIndex:'5'  },
  right2: { left:'104%',height:'13%', bottom:'20%', transform:'translateX(-50%)', filter:'blur(4px)', opacity:'0.3',  zIndex:'5'  },
  back:   { left:'50%', height:'8%',  bottom:'24%', transform:'translateX(-50%)', filter:'blur(6px)', opacity:'0',    zIndex:'1'  },
};

function getStyle(role) {
  const maps = { desktop: DESKTOP, tablet: TABLET, mobile: MOBILE };
  const map = maps[currentBreakpoint] || DESKTOP;
  return { ...map[role] || map.back, transition: TRANSITION, position: 'absolute', aspectRatio: '1/1' };
}

// ─── Update text UI ───────────────────────────────────────────────────────────
function updateUI(animate) {
  const artist = artists[activeIndex];

  if (ghostText) {
    ghostText.textContent = artist.name;
    ghostText.style.opacity = '0.055';
  }
  if (carouselName) {
    carouselName.textContent = artist.name;
    if (animate) carouselName.style.opacity = '1';
  }
  if (carouselDiscipline) {
    carouselDiscipline.textContent = artist.discipline;
    if (animate) carouselDiscipline.style.opacity = '1';
  }
}

// ─── Modal ────────────────────────────────────────────────────────────────────
let modalBackdrop, modalArtistName, modalArtistDiscipline, modalGrid;

function buildModal() {
  modalBackdrop        = document.getElementById('modalBackdrop');
  modalArtistName      = document.getElementById('modalArtistName');
  modalArtistDiscipline = document.getElementById('modalArtistDiscipline');
  modalGrid            = document.getElementById('modalGrid');

  if (!modalBackdrop) return;

  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('modalClose')?.addEventListener('click', closeModal);
}

function openModal(artist) {
  if (!modalBackdrop) return;

  modalArtistName.textContent       = artist.name;
  modalArtistDiscipline.textContent = artist.discipline;

  modalGrid.innerHTML = artist.works.map(work => `
    <div class="modal-work-item"
         data-lightbox-src="${work.image}"
         data-lightbox-alt="${work.title}">
      <img src="${work.image}" alt="${work.title}" loading="lazy" />
      <div class="modal-work-label">${work.title} · ${work.year}</div>
    </div>
  `).join('');

  bindLightboxTriggers(modalGrid);

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop?.classList.remove('open');
  document.body.style.overflow = '';
}
