Feature: Basic Information Entry

  Background: 
    Given user is on basic information entry page with zip code entered as "22182"

  Scenario: Enter name and lastname
    When user enters firstname and lastname and selects suffix
      | firstName | lastName | suffix |
      | Hasan     | Saran    | III    |
    And user clicks on Next button
    Then user is navigated to greeting page with firstname "Hasan"

  Scenario: Enter name and no lastname
    When user enters name as "Hasan" and no lastname
    And user select suffix as "III"
    And user clicks on Next button
    Then user sees "Please enter the last name." message displayed below lastname input box

  Scenario: Enter lastname but no name
    When user enters lastname as "Saran" and no name
    And user select suffix as "III"
    And user clicks on Next button
    Then user sees "Please enter the first name." message displayed below firstname input box
