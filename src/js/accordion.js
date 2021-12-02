export default function toggleAccordionSection(triggersSelector) {
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
