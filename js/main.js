import { initNavbar } from './navbar.js';
import { initAnimations } from './animations.js';
import { initPortfolio } from './portfolio.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initPortfolio();
  initContact();
});
