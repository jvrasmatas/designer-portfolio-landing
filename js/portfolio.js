export function initPortfolio() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const category = card.dataset.category;
        const matches = filter === 'all' || category === filter;

        if (matches) {
          card.classList.remove('hidden');
          // Re-trigger reveal animation
          card.classList.remove('is-visible');
          requestAnimationFrame(() => {
            setTimeout(() => card.classList.add('is-visible'), 50);
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}
