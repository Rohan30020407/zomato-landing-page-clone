document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const searchInput = document.querySelector('main input');

  // Sticky Header Shadow on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Search Input Focus Animation
  searchInput.addEventListener('focus', () => {
    searchInput.style.transition = 'transform 0.3s ease';
    searchInput.style.transform = 'scale(1.05)';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.style.transform = 'scale(1)';
  });
});
// You can leave this empty or add JavaScript if needed
console.log("Zomato page loaded.");
