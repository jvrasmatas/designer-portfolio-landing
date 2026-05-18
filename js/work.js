import { artists, standaloneProjects } from './data/artists.js';
import { initNavbar } from './navbar.js';
import { initAnimations } from './animations.js';
import { initLightbox, bindLightboxTriggers } from './lightbox.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initLightbox();
  buildWorkSections();
});

function buildWorkSections() {
  const container = document.getElementById('workSections');
  if (!container) return;

  // Artist sections
  artists.forEach(artist => {
    const section = document.createElement('section');
    section.className = 'work-section reveal';
    section.setAttribute('aria-label', artist.name);

    const header = `
      <div class="work-section-header">
        <div class="work-section-left">
          <h2 class="work-section-artist">${artist.name}</h2>
          <div class="work-section-meta">
            <span class="tag">${artist.discipline}</span>
            <span class="work-section-count">${artist.works.length} project${artist.works.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
        <a href="${artist.behanceUrl}" target="_blank" rel="noopener noreferrer"
           class="btn btn-secondary" style="font-size:var(--text-sm);">
          View on Behance ↗
        </a>
      </div>
    `;

    const worksHTML = artist.works.map((work, i) => `
      <a class="work-thumb${i === 0 ? ' featured' : ''}"
         href="${work.url}" target="_blank" rel="noopener noreferrer"
         aria-label="${work.title}"
         data-lightbox-src="${work.image}"
         data-lightbox-alt="${work.title}">
        <img src="${work.image}" alt="${work.title}" loading="lazy" />
        <div class="work-thumb-overlay">
          <span class="work-thumb-label">${work.title}<br>${work.type} · ${work.year}</span>
        </div>
      </a>
    `).join('');

    section.innerHTML = header + `<div class="work-grid">${worksHTML}</div>`;
    container.appendChild(section);
    bindLightboxTriggers(section);
  });

  // Standalone / personal projects section
  if (standaloneProjects.length) {
    const section = document.createElement('section');
    section.className = 'work-section reveal';
    section.setAttribute('aria-label', 'Personal Projects');

    const header = `
      <div class="work-section-header">
        <div class="work-section-left">
          <h2 class="work-section-artist">Personal Projects</h2>
          <div class="work-section-meta">
            <span class="tag">Poster Design · Sports</span>
            <span class="work-section-count">${standaloneProjects.length} projects</span>
          </div>
        </div>
      </div>
    `;

    const worksHTML = standaloneProjects.map((work, i) => `
      <a class="work-thumb${i === 0 ? ' featured' : ''}"
         href="${work.url}" target="_blank" rel="noopener noreferrer"
         aria-label="${work.title}"
         data-lightbox-src="${work.image}"
         data-lightbox-alt="${work.title}">
        <img src="${work.image}" alt="${work.title}" loading="lazy" />
        <div class="work-thumb-overlay">
          <span class="work-thumb-label">${work.title}<br>${work.type} · ${work.year}</span>
        </div>
      </a>
    `).join('');

    section.innerHTML = header + `<div class="work-grid">${worksHTML}</div>`;
    container.appendChild(section);
    bindLightboxTriggers(section);
  }
}
