package steps;

import java.util.List;
import java.util.Map;

import org.testng.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import utils.ComMethods;

public class BasicEntrySteps extends ComMethods {

	@Given("user is on basic information entry page with zip code entered as {string}")
	public void user_is_on_basic_information_entry_page_with_zip_code_entered_as(String zipCode) {
		openBasePage();
		sendText(landingPage.zip, zipCode);
		click(landingPage.auto);
		click(landingPage.home);
		click(landingPage.life);
		click(landingPage.next);
		waitForVisibility(getStartedPage.lockup);
		Assert.assertTrue(getStartedPage.lockup.isDisplayed());
		click(getStartedPage.getStartedButton);
	}

	@When("user enters firstname and lastname and selects suffix")
	public void user_enters_firstname_and_lastname_and_selects_suffix(DataTable dataTable) {
		List<Map<String, String>> mapList = dataTable.asMaps();
		for (Map<String, String> map : mapList) {
			sendText(startWithBasicsPage.firstName, map.get("firstName"));
			sendText(startWithBasicsPage.lastName, map.get("lastName"));
			selectDropDownByVisibleText(startWithBasicsPage.suffix, map.get("suffix"));
		}
	}

	@When("user select suffix as {string}")
	public void user_select_suffix_as(String suffix) throws InterruptedException {
		selectDropDownByVisibleText(startWithBasicsPage.suffix, suffix);
	}

	@When("user clicks on Next button")
	public void user_clicks_on_Next_button() {
		click(startWithBasicsPage.nextButton);
	}

	@Then("user is navigated to greeting page with firstname {string}")
	public void user_is_navigated_to_greeting_page_with_firstname(String string) {

	}

	@When("user enters name as {string} and no lastname")
	public void user_enters_name_as_and_no_lastname(String firstName) {
		sendText(startWithBasicsPage.firstName, firstName);
	}

	@Then("user sees {string} message displayed below lastname input box")
	public void user_sees_message_displayed_below_lastname_input_box(String message) {

		Assert.assertEquals(startWithBasicsPage.errorMessageForLastName.getText(), message);
	}

	@Then("user sees {string} message displayed below firstname input box")
	public void user_sees_message_displayed_below_firstname_input_box(String message) {
		Assert.assertEquals(startWithBasicsPage.errorMessageForFirstName.getText(), message);

	}

	@When("user enters lastname as {string} and no name")
	public void user_enters_lastname_as_and_no_name(String lastName) {
		sendText(startWithBasicsPage.lastName, lastName);
	}

}
