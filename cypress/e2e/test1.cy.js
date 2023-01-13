/// <reference types="cypress" />

it('Google Search', () => {
  cy.visit('https://google.com');
  cy.get('.gLFyf').type('How much is iphone 14 pro in nigeria {enter}');
  cy.wait(5000);
  cy.contains('Videos').click();
  // cy.contains('Google Search').click();
})