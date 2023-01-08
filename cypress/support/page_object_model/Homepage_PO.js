import Base_PO from "./Base_PO";

class Homepage extends Base_PO{
    navigateToHomepage(){
        super.navigate("");
    }

    elements = {
        contactUsButtom : () => cy.get("contact-us")
    }

    clickOn_ContactUs_Button(){
        cy.clickAndOpenLink_InSameTab(this.elements.contactUsButtom)
    }
}

export default Homepage;