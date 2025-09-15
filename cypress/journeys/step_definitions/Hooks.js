import { BeforeAll, Before, After, AfterAll  } from "@badeball/cypress-cucumber-preprocessor";

BeforeAll(function () {
    cy.log('This hook will be executed once at the beginnig of a feature.')
});

//Esta linea le dice a cypres que antes de ejecutar un nuevo escenario, limpie cookies y cache
Before(function () {
    cy.log('Before each scenario - limpiando estado y visitando la URL')
    const envi = Cypress.env('ENV')
    const url = Cypress.env(envi).url_apollo
    cy.visit(url)
    cy.clearCookies()
    cy.clearLocalStorage()
});

Before({ tags: "@OK_RUN" },function () {
    cy.log('This hook will be executed before scenarios tagged with @OK_RUN')
});

After({ tags: "@OK_RUN" },function () {
    cy.log('This hook will be executed after scenarios tagged with @OK_RUN')
});

AfterAll(function () {
    cy.log('This hook will be executed once at the end of a feature.')
});