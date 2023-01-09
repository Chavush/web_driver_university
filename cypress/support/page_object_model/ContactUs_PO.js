import Base_PO from "./Base_PO";

class ContactUs_PO extends Base_PO{
    elements = {
        firstName_field: () => cy.get("input[name='first_name']"),
        lastName_field: () => cy.get("input[placeholder='Last Name']"),
        emailAddress_field: () => cy.get("input[name='email']"),
        comment_field: () => cy.get("textarea[name='message']"),
        submit_btn: () => cy.get("input[type='submit']"),
        msg: () => cy.get("h1")
    }

    fillFirstName(first_name){
        this.elements.firstName_field().type(first_name);
    }

    fillLastName(last_name){
        this.elements.lastName_field().type(last_name);
    }

    fillEmail(email){
        this.elements.emailAddress_field().type(email)
    }

    fillComment(comment){
        this.elements.comment_field().type(comment)
    }

    clickOnSubmit_btn(){
        this.elements.submit_btn().click()
    }

    msgAssertion(){
        this.elements.msg().should("contain.text", "Thank You for your Message!")
    }
}

export default ContactUs_PO;