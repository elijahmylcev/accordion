describe('The group of HAMBURGER', () => {
  beforeEach(() => {
    cy.visit('https://elijahmylcev.github.io/accordion/');
  });

  it('Click HAMBURGER --> toggle active-class', () => {
    cy.get('.hamburger').should('not.have.class', 'hamburger-active');
    cy.get('.accordion').should('not.have.class', 'accordion-active');

    cy.get('.hamburger').click().should('have.class', 'hamburger-active');
    cy.get('.accordion').should('have.class', 'accordion-active');
  });
});
