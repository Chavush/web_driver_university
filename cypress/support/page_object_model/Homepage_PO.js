import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO{
    elements = {
        contactUsButtom : () => cy.get("#contact-us")
    }
    
    navigateToHomepage(){
        // super.navigate();
        cy.visit("https://webdriveruniversity.com/")
    }

    clickOn_ContactUs_Button(){
        cy.clickAndOpenLink_InSameTab("#contact-us")
    }
}

export default Homepage_PO;