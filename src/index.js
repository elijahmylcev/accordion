import './style.scss';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item_title');
const Gal = document.querySelectorAll('.menu__item_title_wrapper')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle('menu-active');
});

menuItem.forEach(element => {
  element.addEventListener('click', (event) => {

    menuItem.forEach(element => {
      if (element.closest('.menu__item').lastElementChild.classList.contains('body-opened')) {
        element.closest('.menu__item').lastElementChild.classList.remove('body-opened');

        element.closest('.menu__item').firstElementChild.lastElementChild.style.transform = 'none';
      }
    });

    event.target.closest('.menu__item').lastElementChild.classList.toggle('body-opened');

    event.target.closest('.menu__item').firstElementChild.lastElementChild.style.transform = 'translate(4px) rotate(180deg)';
  })
});