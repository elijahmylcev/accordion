import 'reset-css';
import '../style.scss';
import toggleAccordionSection from './accordion';

// hamburger
const hamburger = document.querySelector('.hamburger');
const accordion = document.querySelector('.accordion');

hamburger.addEventListener('click', function () {
  this.classList.toggle('hamburger-active');
  accordion.classList.toggle('accordion-active');
});

toggleAccordionSection('.accordion__title');
