import { delegate } from './delegate';

const accordion = (triggerSelector) => {
  const trigger = document.querySelector(triggerSelector);

  // TODO: implement delegate();
  delegate({
    trigger,
    event: 'click',
    condition: (target) => target.className === 'accordion__title',
    delegate: (target) => {
      target.lastElementChild.classList.toggle('title-active');
      target.nextElementSibling.classList.toggle('body-active');
      if (target.lastElementChild.classList.contains('title-active')) {
        target.nextElementSibling.style.maxHeight = `${target.nextElementSibling.scrollHeight}px`;
      } else {
        target.nextElementSibling.style.maxHeight = '0px';
      }
    },
  });
};

export default accordion;
