Feature: Test Screen

    Background: Access site
        Given I access site

    @Teste1
    Scenario Outline: Test 1 - Realizar Cadastro
        When I fill required fields "<name>",<lastName>
        And make the registration
        Then the user must be registered "<name>",<lastName>
        Examples:
            | name    | lastName |
            | Maria   | 1        |
            | João    | 2        |
            | José    | 3        |
            | Lucia   | 4        |
            | Iracema | 5        |



    @Teste2
    Scenario Outline: Test 1 - Não realizar Cadastro
        When I fill required fields "<name>",<lastName>
        And make the registration
        Examples:
            | name    | lastName |
            | Maria   | 1        |
            | João    | 2        |
            | José    | 3        |
            | Lucia   | 4        |
            | Iracema | 5        |

       


    @Teste2
    Scenario: Test 2 - Validar Link
        When Click on the link
        And refresh the page
        Then Verify that the link worked successfully

    @Teste3
    Scenario: Test 3 - Validar Data
        When Click on time
        And Check if it shows status not registered
        Then Verify should the date of the day appears

    @Teste4
    Scenario: Test 4 - Validar Popup2
        When Click on Popup2
        Then Verify should it goes to another frame page








