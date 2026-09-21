const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '84px';
    nav.style.left = '16px';
    nav.style.right = '16px';
    nav.style.flexDirection = 'column';
    nav.style.padding = '18px';
    nav.style.background = 'rgba(255,255,255,0.75)';
    nav.style.border = '1px solid rgba(28,26,24,0.08)';
    nav.style.borderRadius = '18px';
    nav.style.boxShadow = '0 16px 40px rgba(26,20,13,0.08)';
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    productCards.forEach((card) => {
      const matches = selectedCategory === 'all' || card.dataset.category === selectedCategory;
      card.style.display = matches ? 'block' : 'none';
    });
  });
});
