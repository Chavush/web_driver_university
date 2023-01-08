import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Homepage from "../page_object_model/Homepage_PO";

const homePage = new Homepage()
Given(`I am in Home page`, () => {
    homePage.navigateToHomepage()
})

When(`I click on Contact us buttom`, () => {
    homePage.clickOn_ContactUs_Button()
})

