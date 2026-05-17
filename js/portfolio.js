import { artists } from './data/artists.js';

export function initPortfolio() {
  buildClientGrid();
  buildModal();
}

// ── Build the 3×2 client grid ──
function buildClientGrid() {
  const grid = document.getElementById('clientsGrid');
  if (!grid) return;

  artists.forEach((artist, i) => {
    const card = document.createElement('div');
    card.className = 'client-card reveal';
    if (i > 0) card.classList.add(`reveal-delay-${Math.min(i, 4)}`);
    card.dataset.artistId = artist.id;

    card.innerHTML = `
      <img class="client-card-img" src="${artist.cover}" alt="${artist.name}" loading="lazy" />
      <div class="client-card-overlay">
        <div class="client-card-info">
          <p class="client-card-name">${artist.name}</p>
          <p class="client-card-discipline">${artist.discipline}</p>
        </div>
      </div>
      <div class="client-card-cta" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
        </svg>
      </div>
    `;

    card.addEventListener('click', () => openModal(artist));
    grid.appendChild(card);
  });
}

// ── Modal ──
let modalBackdrop, modalArtistName, modalArtistDiscipline, modalGrid;

function buildModal() {
  modalBackdrop = document.getElementById('modalBackdrop');
  modalArtistName = document.getElementById('modalArtistName');
  modalArtistDiscipline = document.getElementById('modalArtistDiscipline');
  modalGrid = document.getElementById('modalGrid');

  if (!modalBackdrop) return;

  // Close on backdrop click
  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.getElementById('modalClose')?.addEventListener('click', closeModal);
}

function openModal(artist) {
  if (!modalBackdrop) return;

  modalArtistName.textContent = artist.name;
  modalArtistDiscipline.textContent = artist.discipline;

  // Build works grid
  modalGrid.innerHTML = artist.works.map(work => `
    <div class="modal-work-item">
      <img src="${work.image}" alt="${work.title}" loading="lazy" />
      <div class="modal-work-label">${work.title} · ${work.year}</div>
    </div>
  `).join('');

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop?.classList.remove('open');
  document.body.style.overflow = '';
}