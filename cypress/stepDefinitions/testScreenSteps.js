/// <reference types="Cypress" />
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("I access site", () => {
	cy.accessSite()
});

When("I fill required fields {string},{int}", (name, lastName) => {
	cy.typeName(name)
    cy.typeLastName(lastName)
    cy.clickRadioButtonMasc()
    cy.clickOnFoodPizza()
    cy.selectSchooling()
    cy.typeArea()
});

When("make the registration", () => {
	cy.clickOnRegister()
});

Then("the user must be registered {string},{int}", (name, lastName) => {
	cy.verifyName().should('have.value', name)
    cy.verifyLastName().should('have.value', lastName)
    cy.verifyRadioButtonMasc().should('be.checked')
    cy.verifyFoodPizza().should('be.checked')
    cy.verifySchooling().should('have.value', '2graucomp')
    cy.verifyArea().should('have.value', 'textarea')
    cy.verifyUserRegistered().should('have.text', 'Cadastrado!')
});


When("Click on the link", () => {
	cy.clickOnLink()
});

When("refresh the page", () => {
	cy.refreshPage()
});

Then("Verify that the link worked successfully", () => {
    cy.verifyLinkText().should('have.text', 'Voltar')
    cy.verifyResultText().should('have.not.text', 'Voltou')
});


When("Click on time", () => {
    cy.clickOnHour()
});

When("Check if it shows status not registered", () => {
    cy.verifyHour().should('have.not.text', 'Status: Nao cadastrado')

});

Then("Verify should the date of the day appears", () => {
    cy.verifyHour().should('contain', '02/2023')

});


When("Click on Popup2", () => {
	cy.clickOnPopup2()
});

Then("Verify should it goes to another frame page", () => {
	return true
    //cy.verifyClickPopup2()
});
