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

// Animation 

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.hidden-left').forEach(el => {
    observer.observe(el);
  });
