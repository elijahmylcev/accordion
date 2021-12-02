export default function toggleAccordionSection(triggerSelector) {
  const trigger = document.querySelector(triggerSelector);

  trigger.addEventListener('click', function (e) {
    const target = e.target;

    if (target.className != 'accordion__title') {
      return;
    }

    target.lastElementChild.classList.toggle('title-active');
    target.nextElementSibling.classList.toggle('body-active');
    if (target.lastElementChild.classList.contains('title-active')) {
      target.nextElementSibling.style.maxHeight = `${target.nextElementSibling.scrollHeight}px`;
    } else {
      target.nextElementSibling.style.maxHeight = '0px';
    }
  });
}
