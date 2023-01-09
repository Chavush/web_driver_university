import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ContactUs_PO from "../page_object_model/ContactUs_PO";

const contactUs = new ContactUs_PO()

When(`I fill firs name {string} and last name {string}`, (firstName, lastName) =>{
    contactUs.fillFirstName(firstName);
    contactUs.fillLastName(lastName);
})

When(`I fill email address {string}`, (email) => {
    contactUs.fillEmail(email)
})

When(`I fill comment {string}`, (comment) => {
    contactUs.fillComment(comment);
})

When(`I click submit button`, () => {
    contactUs.clickOnSubmit_btn()
})

Then(`The message is shown to me`, () => {
    contactUs.msgAssertion()
})