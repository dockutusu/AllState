package steps;

import org.testng.Assert;

import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import utils.ComMethods;

public class StepDefs extends ComMethods {

	Scenario scn;

	public StepDefs(ScnContext ctxt) {
		scn = ctxt.scenario;
	} 

	@Given("user is on landing page")
	public void user_is_on_landing_page() {
		openBasePage();
		scn.log("user is on landing page");
		
	}

	@When("user enters zip code as {string}")
	public void user_enters_zip_code_as(String zipCode) {

		sendText(landingPage.zip, zipCode);
		scn.log("user entered zip code");

	}

	@When("user unselects Auto insurance")
	public void user_unselects_Auto_insurance() {
		click(landingPage.auto);
		scn.log("user unselects Auto insurance");

	}

	@When("user selects Home insurance")
	public void user_selects_Home_insurance() {
		click(landingPage.home);
		scn.log("user selects Home insurance");

	}

	@When("user clicks on next button")
	public void user_clicks_on_next_button() {
		click(landingPage.next);
		scn.log("user clicks on next button");

	}

	@When("user is navigated to Get Started page")
	public void user_is_navigated_to_Get_Started_page() {
		waitForVisibility(getStartedPage.lockup);
		Assert.assertTrue(getStartedPage.lockup.isDisplayed());
		scn.log("user is navigated to Get Started page");

	}

	@Then("user navigates to Start page")
	public void user_navigates_to_Start_page() {
		click(getStartedPage.getStartedButton);
		scn.log("user navigates to Start page");

	}

	@When("user selects Home insurance and Life insurance")
	public void user_selects_Home_insurance_and_Life_insurance() {
		
		click(landingPage.home);
		click(landingPage.life);
		scn.log("user selects Home insurance and Life insurance");


	}

}
