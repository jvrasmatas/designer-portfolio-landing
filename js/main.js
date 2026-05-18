import { initNavbar } from './navbar.js';
import { initAnimations } from './animations.js';
import { initPortfolio } from './portfolio.js';
import { initContact } from './contact.js';
import { initLightbox } from './lightbox.js';
import { initLogo3D } from './logo3d.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initPortfolio();
  initContact();
  initLightbox();
  initLogo3D();
});
