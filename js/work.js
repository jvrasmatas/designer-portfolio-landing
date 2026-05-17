import { artists } from './data/artists.js';
import { initNavbar } from './navbar.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  buildWorkSections();
});

function buildWorkSections() {
  const container = document.getElementById('workSections');
  if (!container) return;

  artists.forEach((artist, artistIndex) => {
    const section = document.createElement('section');
    section.className = 'work-section reveal';
    section.setAttribute('aria-label', artist.name);

    // Header
    const header = `
      <div class="work-section-header">
        <div class="work-section-left">
          <h2 class="work-section-artist">${artist.name}</h2>
          <div class="work-section-meta">
            <span class="tag">${artist.discipline}</span>
            <span class="work-section-count">${artist.works.length} project${artist.works.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>
    `;

    // Works grid — first item is featured (larger)
    const worksHTML = artist.works.map((work, i) => `
      <div class="work-thumb${i === 0 ? ' featured' : ''}" role="img" aria-label="${work.title}">
        <img src="${work.image}" alt="${work.title}" loading="lazy" />
        <div class="work-thumb-overlay">
          <span class="work-thumb-label">${work.title}<br>${work.type} · ${work.year}</span>
        </div>
      </div>
    `).join('');

    section.innerHTML = header + `<div class="work-grid">${worksHTML}</div>`;
    container.appendChild(section);
  });
}