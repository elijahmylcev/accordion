import delegate from './delegate';

const accordion = (triggerSelector) => {
  const triggers = document.querySelectorAll(triggerSelector);

  delegate({
    triggers: triggers,
    event: 'click',
    condition: (target) => target.className === 'accordion__title',
    cb: (trigger) => {
      trigger.lastElementChild.classList.toggle('title-active');
      trigger.nextElementSibling.classList.toggle('body-active');
      if (trigger.lastElementChild.classList.contains('title-active')) {
        trigger.nextElementSibling.style.maxHeight = `${trigger.nextElementSibling.scrollHeight}px`;
      } else {
        trigger.nextElementSibling.style.maxHeight = '0px';
      }
    },
  });
};

export default accordion;
