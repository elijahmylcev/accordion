import './style.scss';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item_title');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle('menu-active');
});

menuItem.forEach(element => {
  element.addEventListener('click', (event) => {
    event.target.closest('.menu__item').lastElementChild.classList.toggle('body-opened')
  })
});
