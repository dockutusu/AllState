$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/greetingPageEntry.feature");
formatter.feature({
  "name": "Enter Information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Enter valid birthdate, select gender and marital status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@second"
    }
  ]
});
formatter.step({
  "name": "user enters valid birthdate as \"\u003cdateOfBirth\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user selects gender as \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects marital status \"\u003cmaritalStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Next button on greeting page",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to \"\u003cAddress\u003e\" page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dateOfBirth",
        "Gender",
        "maritalStatus",
        "Address"
      ]
    },
    {
      "cells": [
        "11-11-1991",
        "Male",
        "Single (never married)",
        "Street Address"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefs.user_is_on_landing_page()"
});
formatter.result({
  "error_message": "java.lang.NoSuchMethodError: io.cucumber.core.backend.TestCaseState.log(Ljava/lang/String;)V\r\n\tat io.cucumber.java.Scenario.log(Scenario.java:66)\r\n\tat steps.StepDefs.user_is_on_landing_page(StepDefs.java:22)\r\n\tat ✽.user is on landing page(file:///C:/Users/17033/new-eclipse-workspace/AllState/src/test/resources/features/greetingPageEntry.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters zip code as \"22182\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefs.user_enters_zip_code_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user unselects Auto insurance",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_unselects_Auto_insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Home insurance and Life insurance",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_selects_Home_insurance_and_Life_insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_clicks_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to Get Started page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_is_navigated_to_Get_Started_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to Start page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefs.user_navigates_to_Start_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters firstname and lastname and selects suffix",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_enters_firstname_and_lastname_and_selects_suffix(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_clicks_on_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to greeting page with firstname \"Hasan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_is_navigated_to_greeting_page_with_firstname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Enter valid birthdate, select gender and marital status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@second"
    }
  ]
});
formatter.step({
  "name": "user enters valid birthdate as \"11-11-1991\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.GreetingSteps.user_enters_valid_birthdate_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects gender as \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_selects_gender_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects marital status \"Single (never married)\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_selects_marital_status(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button on greeting page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_clicks_on_Next_button_on_greeting_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to \"Street Address\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.GreetingSteps.user_is_navigated_to_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NoSuchMethodError: io.cucumber.core.backend.TestCaseState.attach([BLjava/lang/String;Ljava/lang/String;)V\r\n\tat io.cucumber.java.Scenario.attach(Scenario.java:57)\r\n\tat steps.Hooks.end(Hooks.java:39)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Enter invalid birthdate, select gender and marital status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@third"
    }
  ]
});
formatter.step({
  "name": "user enters valid birthdate as \"\u003cdateOfBirth\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user selects gender as \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects marital status \"\u003cmaritalStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Next button on greeting page",
  "keyword": "And "
});
formatter.step({
  "name": "user sees error message displayed as \"\u003cerrorMessage\u003e\" below birthday field",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dateOfBirth",
        "Gender",
        "maritalStatus",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "11-45-1991",
        "Male",
        "Single (never married)",
        "Please provide your birthdate."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefs.user_is_on_landing_page()"
});
formatter.result({
  "error_message": "java.lang.NoSuchMethodError: io.cucumber.core.backend.TestCaseState.log(Ljava/lang/String;)V\r\n\tat io.cucumber.java.Scenario.log(Scenario.java:66)\r\n\tat steps.StepDefs.user_is_on_landing_page(StepDefs.java:22)\r\n\tat ✽.user is on landing page(file:///C:/Users/17033/new-eclipse-workspace/AllState/src/test/resources/features/greetingPageEntry.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters zip code as \"22182\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefs.user_enters_zip_code_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user unselects Auto insurance",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_unselects_Auto_insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Home insurance and Life insurance",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_selects_Home_insurance_and_Life_insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_clicks_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to Get Started page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_is_navigated_to_Get_Started_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to Start page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefs.user_navigates_to_Start_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters firstname and lastname and selects suffix",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_enters_firstname_and_lastname_and_selects_suffix(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_clicks_on_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to greeting page with firstname \"Hasan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_is_navigated_to_greeting_page_with_firstname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Enter invalid birthdate, select gender and marital status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@third"
    }
  ]
});
formatter.step({
  "name": "user enters valid birthdate as \"11-45-1991\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.GreetingSteps.user_enters_valid_birthdate_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects gender as \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_selects_gender_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects marital status \"Single (never married)\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_selects_marital_status(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button on greeting page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_clicks_on_Next_button_on_greeting_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees error message displayed as \"Please provide your birthdate.\" below birthday field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_sees_error_message_displayed_as_below_birthday_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NoSuchMethodError: io.cucumber.core.backend.TestCaseState.attach([BLjava/lang/String;Ljava/lang/String;)V\r\n\tat io.cucumber.java.Scenario.attach(Scenario.java:57)\r\n\tat steps.Hooks.end(Hooks.java:39)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Enter valid birthdate, select gender and no marital status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fourth"
    }
  ]
});
formatter.step({
  "name": "user enters valid birthdate as \"\u003cdateOfBirth\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user selects gender as \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects marital status \"\u003cmaritalStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Next button on greeting page",
  "keyword": "And "
});
formatter.step({
  "name": "user sees error message displayed as \"\u003cerrorMessage\u003e\" below marital status field",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dateOfBirth",
        "Gender",
        "maritalStatus",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "11-11-1991",
        "Male",
        "",
        "Please make a selection."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefs.user_is_on_landing_page()"
});
formatter.result({
  "error_message": "java.lang.NoSuchMethodError: io.cucumber.core.backend.TestCaseState.log(Ljava/lang/String;)V\r\n\tat io.cucumber.java.Scenario.log(Scenario.java:66)\r\n\tat steps.StepDefs.user_is_on_landing_page(StepDefs.java:22)\r\n\tat ✽.user is on landing page(file:///C:/Users/17033/new-eclipse-workspace/AllState/src/test/resources/features/greetingPageEntry.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters zip code as \"22182\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefs.user_enters_zip_code_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user unselects Auto insurance",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_unselects_Auto_insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Home insurance and Life insurance",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_selects_Home_insurance_and_Life_insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_clicks_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to Get Started page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_is_navigated_to_Get_Started_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to Start page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefs.user_navigates_to_Start_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters firstname and lastname and selects suffix",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_enters_firstname_and_lastname_and_selects_suffix(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_clicks_on_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to greeting page with firstname \"Hasan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_is_navigated_to_greeting_page_with_firstname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Enter valid birthdate, select gender and no marital status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fourth"
    }
  ]
});
formatter.step({
  "name": "user enters valid birthdate as \"11-11-1991\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.GreetingSteps.user_enters_valid_birthdate_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects gender as \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_selects_gender_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects marital status \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_selects_marital_status(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button on greeting page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_clicks_on_Next_button_on_greeting_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees error message displayed as \"Please make a selection.\" below marital status field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_sees_error_message_displayed_as_below_marital_status_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NoSuchMethodError: io.cucumber.core.backend.TestCaseState.attach([BLjava/lang/String;Ljava/lang/String;)V\r\n\tat io.cucumber.java.Scenario.attach(Scenario.java:57)\r\n\tat steps.Hooks.end(Hooks.java:39)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Enter valid birthdate, select marital status and no gender",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fifth"
    }
  ]
});
formatter.step({
  "name": "user enters valid birthdate as \"\u003cdateOfBirth\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user selects gender as \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects marital status \"\u003cmaritalStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Next button on greeting page",
  "keyword": "And "
});
formatter.step({
  "name": "user sees error message displayed as \"\u003cerrorMessage\u003e\" below gender field",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dateOfBirth",
        "Gender",
        "maritalStatus",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "11-11-1991",
        "",
        "Single (never married)",
        "Please select your gender."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefs.user_is_on_landing_page()"
});
formatter.result({
  "error_message": "java.lang.NoSuchMethodError: io.cucumber.core.backend.TestCaseState.log(Ljava/lang/String;)V\r\n\tat io.cucumber.java.Scenario.log(Scenario.java:66)\r\n\tat steps.StepDefs.user_is_on_landing_page(StepDefs.java:22)\r\n\tat ✽.user is on landing page(file:///C:/Users/17033/new-eclipse-workspace/AllState/src/test/resources/features/greetingPageEntry.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters zip code as \"22182\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefs.user_enters_zip_code_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user unselects Auto insurance",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_unselects_Auto_insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Home insurance and Life insurance",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_selects_Home_insurance_and_Life_insurance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on next button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_clicks_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to Get Started page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.StepDefs.user_is_navigated_to_Get_Started_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to Start page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefs.user_navigates_to_Start_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters firstname and lastname and selects suffix",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_enters_firstname_and_lastname_and_selects_suffix(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_clicks_on_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to greeting page with firstname \"Hasan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BasicEntrySteps.user_is_navigated_to_greeting_page_with_firstname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Enter valid birthdate, select marital status and no gender",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fifth"
    }
  ]
});
formatter.step({
  "name": "user enters valid birthdate as \"11-11-1991\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.GreetingSteps.user_enters_valid_birthdate_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects gender as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_selects_gender_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects marital status \"Single (never married)\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_selects_marital_status(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button on greeting page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_clicks_on_Next_button_on_greeting_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees error message displayed as \"Please select your gender.\" below gender field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.GreetingSteps.user_sees_error_message_displayed_as_below_gender_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NoSuchMethodError: io.cucumber.core.backend.TestCaseState.attach([BLjava/lang/String;Ljava/lang/String;)V\r\n\tat io.cucumber.java.Scenario.attach(Scenario.java:57)\r\n\tat steps.Hooks.end(Hooks.java:39)\r\n",
  "status": "failed"
});
});