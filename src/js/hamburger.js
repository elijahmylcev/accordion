export default function hamburger(selectorHamburger, selectorContent) {
  const hamburger = document.querySelector(selectorHamburger);
  const accordion = document.querySelector(selectorContent);

  hamburger.addEventListener('click', function () {
    this.classList.toggle('hamburger-active');
    accordion.classList.toggle('accordion-active');
  });
}
