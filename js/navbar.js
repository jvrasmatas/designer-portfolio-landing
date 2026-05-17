export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.navbar-link');
  const mobileLinks = mobileMenu.querySelectorAll('.navbar-link');
  const sections = document.querySelectorAll('section[id], .clients[id]');

  // Scroll behavior
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
    updateActiveLink();
  };

  // Active link on scroll
  const updateActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  // Mobile menu toggle
  const toggleMenu = (open) => {
    hamburger.classList.toggle('active', open);
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger.addEventListener('click', () => {
    toggleMenu(!mobileMenu.classList.contains('open'));
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
