function filterProjects(category) {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    item.style.display =
      category === 'all' || item.classList.contains(category)
      ? 'block'
      : 'none';
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
