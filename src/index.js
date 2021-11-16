import 'normalize.css'
import './style.scss';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item_title');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  menu.classList.toggle('menu-active');
});

menuItem.forEach(element => {

  element.closest('.menu__item').lastElementChild.style.maxHeight = '0px'

  element.addEventListener('click', (event) => {
    const selectedElement = event.target.closest('.menu__item')

    if (selectedElement.lastElementChild.style.maxHeight === `${selectedElement.querySelector('.menu__item_body > *').clientHeight}px`) {

      selectedElement.lastElementChild.style.maxHeight = '0px';
      element.closest('.menu__item').firstElementChild.lastElementChild.style.transform = 'none';

    } else {
      menuItem.forEach(element => {
        element.closest('.menu__item').lastElementChild.style.maxHeight = '0px';
        element.closest('.menu__item').firstElementChild.lastElementChild.style.transform = 'none';
      });

      selectedElement.lastElementChild.style.maxHeight = `${selectedElement.querySelector('.menu__item_body > *').clientHeight}px`;
      selectedElement.firstElementChild.lastElementChild.style.transform = 'translate(4px) rotate(180deg)';
    }
  })
});