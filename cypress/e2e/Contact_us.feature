Feature: Contact us page validation
    Background: Pre conditions
        Given I am in Home page
        When I click on Contact us buttom

    Scenario Outline: Filling all fields and submitting
        And I fill firs name "<first name>" and last name "<last name>"
        And I fill email address "<email address>"
        And I fill comment "<comment>"
        And I click submit button
        Then The message is shown to me

        Examples:
            | first name | last name | email address | comment             |
            | Poxos      | Poxosyan  | poxos@gm.com  | Comment from Poxos  |
            | Petros     | Petrosyan | petros@gm.com | Comment from Petros |

