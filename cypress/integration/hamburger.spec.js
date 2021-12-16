describe('The group of HAMBURGER', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('Click HAMBURGER', () => {
    cy.get('.hamburger').click();
  });
});
