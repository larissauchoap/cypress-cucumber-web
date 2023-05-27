/// <reference types="Cypress" />

import elementsScreen from './elements/elementsScreen'
const elements = new elementsScreen

Cypress.Commands.add('accessSite', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

Cypress.Commands.add('verifyBody', () => {
    cy.get(elements.BODY())
})

Cypress.Commands.add('verifySpan', () => {
    cy.get(elements.SPAN())
})

Cypress.Commands.add('verifyText', () => {
    cy.get(elements.TEXT)
})

Cypress.Commands.add('clickOnLink', () => {
    cy.get(elements.LINK()).click()
})

Cypress.Commands.add('verifyLinkText', () => {
    cy.get(elements.LINK())
})

Cypress.Commands.add('refreshPage', () => {
    cy.reload()
})

Cypress.Commands.add('verifyResultText', () => {
    cy.get(elements.RESULT())
})


Cypress.Commands.add('typeName', (string) => {
    cy.get(elements.FIELD_NAME()).type(string)
})

Cypress.Commands.add('verifyName', () => {
    cy.get(elements.FIELD_NAME())
})

Cypress.Commands.add('typeArea', () => {
    cy.get(elements.FIELD_SUGGESTION()).type('textarea')
})

Cypress.Commands.add('verifyArea', () => {
    cy.get(elements.FIELD_SUGGESTION())
})

Cypress.Commands.add('typeLastName', (int) => {
    cy.get(elements.FIELD_LAST_NAME()).type(int)
})


Cypress.Commands.add('verifyLastName', () => {
    cy.get(elements.FIELD_LAST_NAME())
})

Cypress.Commands.add('clickRadioButtonMasc', () => {
    cy.get(elements.RADIO_MASC()).click()
})

Cypress.Commands.add('verifyRadioButtonMasc', () => {
    cy.get(elements.RADIO_MASC())
})

Cypress.Commands.add('clickOnFoodPizza', () => {
    cy.get(elements.CHECKBOX_PIZZA()).click()
})
Cypress.Commands.add('clickOnFoodVegeratian', () => {
    cy.get(elements.CHECKBOX_VEGETARIAN()).click()
})

Cypress.Commands.add('verifyFoodPizza', () => {
    cy.get(elements.CHECKBOX_PIZZA())
})

Cypress.Commands.add('verifyFoodVegetarian', () => {
    cy.get(elements.CHECKBOX_VEGETARIAN())
})

Cypress.Commands.add('selectSchooling', () => {
    cy.get(elements.DROPBOX_SCHOOLING()).select('2o grau completo')
})

Cypress.Commands.add('verifySchooling', () => {
    cy.get(elements.DROPBOX_SCHOOLING())
})

Cypress.Commands.add('clickOnRegister', () => {
    cy.get(elements.BTN_CADASTRAR()).click()

})

Cypress.Commands.add('verifyUserRegistered', () => {
    cy.get(elements.LABEL_USER_REGISTERED())

})

Cypress.Commands.add('clickOnHour', () => {
    cy.get(elements.BTN_HOUR()).click()
})

Cypress.Commands.add('verifyHour', () => {
    cy.get(elements.LABEL_RESULT_HOUR())
})

Cypress.Commands.add('clickOnPopup2', () => {
    cy.get(elements.LINK_POP_UP_2()).click()
})
Cypress.Commands.add('verifyClickPopup2', () => {
    cy.get(elements.BTN_ANOTHER_PAGE())
})


