import 'normalize.css'
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
    const selectedElement = event.target.closest('.menu__item')

    //Added||removing class
    if (selectedElement.lastElementChild.classList.contains('body-opened')) {
      // Если выбранный элемент активирован, то удаляем класс
      selectedElement.closest('.menu__item').lastElementChild.classList.remove('body-opened');
      element.closest('.menu__item').firstElementChild.lastElementChild.style.transform = 'none';

    } else {
      // Если он не активирован, то выключаем все остальные и активируем выбранный
      menuItem.forEach(element => {
        element.closest('.menu__item').lastElementChild.classList.remove('body-opened');
        element.closest('.menu__item').firstElementChild.lastElementChild.style.transform = 'none';
      });

      selectedElement.lastElementChild.classList.add('body-opened');
      selectedElement.firstElementChild.lastElementChild.style.transform = 'translate(4px) rotate(180deg)';
    }
  })
});

