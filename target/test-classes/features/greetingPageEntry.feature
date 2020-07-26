Feature: Greeting Page Entry

  Background: 
    Given user is on landing page
    When user enters zip code as "22182"
    And user unselects Auto insurance
    And user selects Home insurance and Life insurance
    And user clicks on next button
    And user is navigated to Get Started page
    Then user navigates to Start page
    When user enters firstname and lastname and selects suffix
      | firstName | lastName | suffix |
      | Hasan     | Saran    | III    |
    And user clicks on Next button
    Then user is navigated to greeting page with firstname "Hasan"

  Scenario Outline: Enter valid birthdate, select gender and marital status
    When user enters valid birthdate as "<dateOfBirth>"
    And user selects gender as "<Gender>"
    And user selects marital status "<maritalStatus>"
    And user clicks on Next button on greeting page
    Then user is navigated to "<Address>" page

    Examples: 
      | dateOfBirth | Gender | maritalStatus          | Address        |
      | 11-11-1991  | Male   | Single (never married) | Street Address |

  Scenario Outline: Enter invalid birthdate, select gender and marital status
    When user enters valid birthdate as "<dateOfBirth>"
    And user selects gender as "<Gender>"
    And user selects marital status "<maritalStatus>"
    And user clicks on Next button on greeting page
    And user sees error message displayed as "<errorMessage>" below birthday field

    Examples: 
      | dateOfBirth | Gender | maritalStatus          | errorMessage                   |
      | 11-45-1991  | Male   | Single (never married) | Please provide your birthdate. |

  Scenario Outline: Enter valid birthdate, select gender and no marital status
    When user enters valid birthdate as "<dateOfBirth>"
    And user selects gender as "<Gender>"
    And user selects marital status "<maritalStatus>"
    And user clicks on Next button on greeting page
    And user sees error message displayed as "<errorMessage>" below marital status field

    Examples: 
      | dateOfBirth | Gender | maritalStatus | errorMessage             |
      | 11-11-1991  | Male   |               | Please make a selection. |

  Scenario Outline: Enter valid birthdate, select marital status and no gender
    When user enters valid birthdate as "<dateOfBirth>"
    And user selects gender as "<Gender>"
    And user selects marital status "<maritalStatus>"
    And user clicks on Next button on greeting page
    And user sees error message displayed as "<errorMessage>" below gender field

    Examples: 
      | dateOfBirth | Gender | maritalStatus          | errorMessage               |
      | 11-11-1991  |        | Single (never married) | Please select your gender. |
