Feature: Select Insurance Types
  
  Description: US-3421 The purpose of this feature is to select single or multiple
  insurance types at AllState landing page

  Background: 
    Given user is on landing page
    When user enters zip code as "22182"
    And user unselects Auto insurance

  @first
  Scenario: Select Home Insurance Only
    And user selects Home insurance
    And user clicks on next button
    And user is navigated to Get Started page
    Then user navigates to Start page

  Scenario: Select Motorcycle and Life Insurance
    And user selects Home insurance and Life insurance
    And user clicks on next button
    And user is navigated to Get Started page
    Then user navigates to Start page
