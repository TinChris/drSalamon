document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const mainNav = document.getElementById('main-nav');
  const navLinks = mainNav.querySelectorAll('a');

  menuButton.addEventListener('click', function () {
    mainNav.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth < 768) {
        mainNav.classList.remove('open');
      }
    });
  });
});