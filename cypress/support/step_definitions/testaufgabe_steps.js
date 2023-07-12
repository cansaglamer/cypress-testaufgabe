/// <reference types = "cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const url = "https://demoauthor.magnolia-cms.com/travel/";

Given('I navigate to the magnoliatravels login page',() =>{
    cy.visit(url,{failOnStatusCode: false});
})

When('I login to the page successfully', () => {
    cy.verifySuccessfulLogin();
})

When('I click on {string} Drop Down', (linkName) => {
    cy.get('a').contains(linkName).click()
})

When('I click on {string} Link', (linkName) => {
    cy.get('a').contains(linkName).click()
})

Then('I should land on {string} page',(linkName) =>{
    cy.get('h1').should('have.text', linkName);
})

Then('I should be presented with {string} page',(linkName) =>{
    let lowLinkName= linkName.toLowerCase()
    cy.url().should('include',lowLinkName)
})

When('I click on German Language Link',() =>{
    cy.get('[id=language-link]').contains('German').click();
})

Then('I should be presented with User Links in German',() =>{
    cy.xpath('//*[@id="user-links"]/a[1]/text()').should('have.text', 'Ausloggen');
})

When('I search for Europe', () => {
    cy.get('[id=nav-search]').type('Europe{enter}');
})

When('I select one of the more than three results', () => { 
    cy.get(".list-group")
       .find('.excerpt')
       .then(($value) => {
           length = $value.length
           cy.wrap(length).should('be.gte', 3)
        })    
})

Then('I should be presented with the details page of that search result', () => {
    cy.get('body > div.container > div:nth-child(3) > a:nth-child(1)')
    .should('have.attr', 'href')
    .then((href) => {
      cy.visit('https://demoauthor.magnolia-cms.com' + href)
      cy.url().should('include', href)
    })
})

When('I navigate to the Active Tours Page', () => {
    cy.visit('https://demoauthor.magnolia-cms.com/travel/tour-type~active~.html')
})

When('I select Hut to Hut in the Swiss Alps', () => {
    cy.get('div:nth-of-type(1) > .tour-card-anchor  h3').click()
})

Then('I should be presented with the correct tour details', () => {
    cy.get('div:nth-of-type(1) > .property-value').should('have.text', 'Zurich, Switzerland')
    cy.get('div:nth-of-type(2) > .property-value').should('have.text', '7 days')
    cy.get('div:nth-of-type(3) > .property-value').should('have.text', 'Magnolia Travels')
})

When('I click Book Tour Button', () => {
    cy.get('[value="Book Tour"]').click()
})

When('I fill out the fields on the Book Tour page and send the data', () => {
    cy.get('[id="adults"]').type('1')
    cy.get('[id="youth"]').type('2')
    cy.get('[id="upgrades_0"]').click()
    cy.get('select').select('yes')
    cy.get('[value="Next step"]').click()
    cy.get('[id="mealOptions_0"]').click()
    cy.get('[id="additionalMealNotes"]').type('test')
    cy.get('[value="Next step"]').click()
    cy.get('[id="title"]').type('Mr')
    cy.get('[id="firstName"]').type('Can')
    cy.get('[id="lastName"]').type('Saglamer')
    cy.get('[id="email"]').type('cansaglamer1@gmail.com')
    cy.get('[id="phone"]').type('+905353020817')
    cy.get('[id="city"]').type('Istanbul')
    cy.get('[id="postalOrZip"]').type('34457')
    cy.get('[id="country"]').type('Turkey')
    cy.get('[id="province"]').type('Istanbul')
    cy.get('[value="Next step"]').click()
})

Then('I should be presented with a confirmation message on the homepage', () => {
    cy.get('[id="message"]').should('include', 'Your tour has been booked successfully!')
})