import 'reset-css';
import './style.scss';

const hamburger = document.querySelector('.hamburger');
const accordion = document.querySelector('.accordion');
const accordionItem = document.querySelectorAll('.accordion__item_title');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  accordion.classList.toggle('accordion-active');
});

accordionItem.forEach(element => {

  element.closest('.accordion__item').lastElementChild.style.maxHeight = '0px'

  element.addEventListener('click', (event) => {
    const selectedElement = event.target.closest('.accordion__item')

    if (selectedElement.lastElementChild.style.maxHeight === `${selectedElement.querySelector('.accordion__item_body > *').clientHeight}px`) {

      selectedElement.lastElementChild.style.maxHeight = '0px';
      element.closest('.accordion__item').firstElementChild.lastElementChild.style.transform = 'none';

    } else {
      accordionItem.forEach(element => {
        element.closest('.accordion__item').lastElementChild.style.maxHeight = '0px';
        element.closest('.accordion__item').firstElementChild.lastElementChild.style.transform = 'none';
      });

      selectedElement.lastElementChild.style.maxHeight = `${selectedElement.querySelector('.accordion__item_body > *').clientHeight}px`;
      selectedElement.firstElementChild.lastElementChild.style.transform = 'translate(4px) rotate(180deg)';
    }
  })
});