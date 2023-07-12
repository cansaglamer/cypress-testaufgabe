// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickAndOpenLink_InSameTab', (selector) => {
    cy.get(selector).invoke("removeAttr", "target").click();
})

Cypress.Commands.add('verifySuccessfulLogin', () => {

//When I type a correct username
    cy.get('[id=username]').type('superuser');
//And I type a correct password
    cy.get('[id=password]').type('superuser');
//And I click on the login button
    cy.xpath("//div[@id='box']//button[.='Login']").click();
//Then I should be presented with the homepage
    cy.get('[id=user-links]').should('be.visible');
})
