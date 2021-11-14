import './style.scss';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle('menu-active');
});

menuItem.forEach(element => {
  element.addEventListener('click', () => {
    console.log('open');
  })
});
console.log(menuItem);