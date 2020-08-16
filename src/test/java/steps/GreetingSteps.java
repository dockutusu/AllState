package steps;

import org.testng.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import utils.ComMethods;

public class GreetingSteps extends ComMethods {

	@Given("user is on greeting page with basic information entered")
	public void user_is_on_greeting_page_with_basic_information_entered(DataTable dataTable) {

	}

	@When("user enters valid birthdate as {string}")
	public void user_enters_valid_birthdate_as(String birthDate) {
		sendText(greetingPage.dateOfBirth, birthDate);
		System.out.println(birthDate + " entered");
	}

	@When("user selects gender as {string}")
	public void user_selects_gender_as(String gender) {
		selectLabelByVisibleText(greetingPage.genderSelection, gender);
		System.out.println(gender + " selected");

	}

	@When("user selects marital status {string}")
	public void user_selects_marital_status(String maritalStatus) {
		selectDropDownByVisibleText(greetingPage.maritalStatus, maritalStatus);
		System.out.println(maritalStatus + " selected");

	}

	@When("user clicks on Next button on greeting page")
	public void user_clicks_on_Next_button_on_greeting_page() {
		click(greetingPage.nextButton);
		System.out.println("next button clicked");
	}

	@When("user sees error message displayed as {string} below birthday field")
	public void user_sees_error_message_displayed_as_below_birthday_field(String errorMessage) {

		String msg = greetingPage.errorMessageForBirthdate.getText();
		Assert.assertEquals(msg, errorMessage);
		System.out.println("birthday error message displayed");
	}

	@When("user sees error message displayed as {string} below marital status field")
	public void user_sees_error_message_displayed_as_below_marital_status_field(String errorMessage) {

		String msg = greetingPage.errorMessageForMaritalStatus.getText();
		Assert.assertEquals(msg, errorMessage);
		System.out.println("marital status error message displayed");

	}

	@When("user sees error message displayed as {string} below gender field")
	public void user_sees_error_message_displayed_as_below_gender_field(String errorMessage) {

		waitForVisibility(greetingPage.errorMessageForGender);
		String msg = greetingPage.errorMessageForGender.getText();
		Assert.assertEquals(msg, errorMessage);
		System.out.println("gender error message displayed");

	}

	@Then("user is navigated to {string} page")
	public void user_is_navigated_to_page(String address) throws InterruptedException {
		waitForVisibility(addressInquiryPage.addressText);
		String ad = addressInquiryPage.addressText.getText();
		Assert.assertEquals(ad, address);
	}

}
