// nextjs-ts error
export const isolatedModule = true;

describe('Test Fibonacci calculator', () => {
  it('Calculator should return correct inputs', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.number-input').type('2');
    cy.get('.calculate-button').click();
    cy.get('.result-viewer').should('contain', '1');

    cy.get('.number-input').clear().type('6');
    cy.get('.calculate-button').click();
    cy.get('.result-viewer').should('contain', '8');

    cy.get('.number-input').clear().type('40');
    cy.get('.calculate-button').click();
    cy.get('.result-viewer').should('contain', '102334155');
  });
});
