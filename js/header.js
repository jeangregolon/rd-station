function renderHeader() {
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const dropItem = document.querySelector('.drop-item');
  const submenuMobile = document.querySelector('.submenu-mobile');
  const header = document.querySelector('header');
  const buttonWrapper = document.querySelector('.button-wrapper');
  const ham = document.querySelector('.ham');

  if (hamburger && dropItem) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      header.classList.toggle('open');
      main.classList.toggle('mobile-menu-open');
      footer.classList.toggle('mobile-menu-open');
      hamburger.classList.toggle('open');
    });

    dropItem.addEventListener('click', function () {
      submenuMobile.classList.toggle('open');
      buttonWrapper.classList.toggle('open');
    });
  } else {
    window.requestAnimationFrame(renderHeader);
  }
}

renderHeader();
