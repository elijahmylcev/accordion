import 'reset-css';
import './style2.scss';

// hamburger
const hamburger = document.querySelector('.hamburger');
const accordion = document.querySelector('.accordion');

hamburger.addEventListener('click', function () {
  this.classList.toggle('hamburger-active');
  accordion.classList.toggle('accordion-active');
});

toggleAccordionSection('.accordion__title');

function toggleAccordionSection(triggersSelector, itemsSelector) {
  const buttons = document.querySelectorAll(triggersSelector);

  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Индикатор выбранного заголовка
      this.lastElementChild.classList.toggle('title-active');
      this.nextElementSibling.classList.toggle('body-active');

      if (this.lastElementChild.classList.contains('title-active')) {
        this.nextElementSibling.style.maxHeight = `${this.nextElementSibling.scrollHeight}px`;
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
}
