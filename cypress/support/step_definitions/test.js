const { Given } = require("@badeball/cypress-cucumber-preprocessor");

Given(`I am in main page`, () =>{
    cy.visit("https://webdriveruniversity.com/")
})