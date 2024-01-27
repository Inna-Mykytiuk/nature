const navbar = document.querySelector('nav');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__button');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('nav-background');
  // menuBtn.classList.toggle('nav-toggle');
  menu.classList.toggle('nav-toggle');
});
