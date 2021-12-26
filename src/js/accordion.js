import delegate from './delegate';

const accordion = (triggerSelector) => {
  const triggers = document.querySelectorAll(triggerSelector);

  triggers.forEach((trigger) => {
    delegate({
      trigger: trigger,
      event: 'click',
      condition: (target) => target.className === 'accordion__title',
      delegate: (trigger) => {
        trigger.lastElementChild.classList.toggle('title-active');
        trigger.nextElementSibling.classList.toggle('body-active');
        if (trigger.lastElementChild.classList.contains('title-active')) {
          trigger.nextElementSibling.style.maxHeight = `${trigger.nextElementSibling.scrollHeight}px`;
        } else {
          trigger.nextElementSibling.style.maxHeight = '0px';
        }
      },
    });
  });
};

export default accordion;
