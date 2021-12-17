describe('Accordion', () => {
  beforeEach(() => {
    cy.visit('https://elijahmylcev.github.io/accordion/');
  });

  it('Title not active', () => {
    cy.get('.hamburger').click();

    cy.document().then((doc) => {
      const items = doc.querySelectorAll('.accordion__title');
      items.forEach((title) => {
        expect(title.nextElementSibling.classList.contains('body-active')).to.false;
        expect(
          title.nextElementSibling.style.maxHeight == title.nextElementSibling.scrollHeight + 'px',
        ).to.false;
      });
    });
  });

  it('Title active --> body have height > 0', () => {
    cy.get('.hamburger').click();

    cy.document().then((doc) => {
      const items = doc.querySelectorAll('.accordion__title');
      items.forEach((title) => {
        title.click();
        expect(title.nextElementSibling.classList.contains('body-active')).to.true;
        expect(
          title.nextElementSibling.style.maxHeight == title.nextElementSibling.scrollHeight + 'px',
        ).to.true;
      });
    });
  });
});
