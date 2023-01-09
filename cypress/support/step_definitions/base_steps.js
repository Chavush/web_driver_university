import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_object_model/Homepage_PO";

const homePage = new Homepage_PO()
Given(`I am in Home page`, () => {
    homePage.navigateToHomepage()
})

When(`I click on Contact us buttom`, () => {
    homePage.clickOn_ContactUs_Button()
})


