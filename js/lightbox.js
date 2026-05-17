let lightbox, lightboxImg;

export function initLightbox() {
  lightbox = document.getElementById('lightbox');
  lightboxImg = document.getElementById('lightboxImg');
  if (!lightbox) return;

  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);

  // Close on backdrop click (not on the image itself)
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

export function openLightbox(src, alt = '') {
  if (!lightbox) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}

// Attach click listener to any element with data-lightbox-src
export function bindLightboxTriggers(root = document) {
  root.querySelectorAll('[data-lightbox-src]').forEach(el => {
    el.classList.add('lightbox-trigger');
    el.addEventListener('click', e => {
      e.stopPropagation();
      openLightbox(el.dataset.lightboxSrc, el.dataset.lightboxAlt || '');
    });
  });
}