window.onload = function () {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const dropItem = document.querySelector('.drop-item');
  const submenuMobile = document.querySelector('.submenu-mobile');
  const header = document.querySelector('header');
  const buttonWrapper = document.querySelector('.button-wrapper');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        header.classList.remove('open');
      } else {
        mobileMenu.classList.add('open');
        header.classList.add('open');
      }
    });
  }

  if (dropItem) {
    dropItem.addEventListener('click', function () {
      if (submenuMobile.classList.contains('open')) {
        submenuMobile.classList.remove('open');
        buttonWrapper.classList.remove('open');
      } else {
        submenuMobile.classList.add('open');
        buttonWrapper.classList.add('open');
      }
    });
  }
};
