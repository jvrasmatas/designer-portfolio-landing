import { initNavbar } from './navbar.js';
import { initAnimations } from './animations.js';
import { initPortfolio } from './portfolio.js';
import { initContact } from './contact.js';
import { initLightbox } from './lightbox.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initPortfolio();
  initContact();
  initLightbox();
  initServicesAccordion();
});

function initServicesAccordion() {
  document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.service-item.open').forEach(el => {
        el.classList.remove('open');
        el.setAttribute('aria-expanded', 'false');
      });
      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        item.setAttribute('aria-expanded', 'true');
      }
    });

    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
}
