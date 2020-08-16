package steps;

import org.testng.Assert;

import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import utils.ComMethods;

public class StepDefs extends ComMethods {



	@Given("user is on landing page")
	public void user_is_on_landing_page() {
		openBasePage();
		System.out.println("landing page");
		
	}

	@When("user enters zip code as {string}")
	public void user_enters_zip_code_as(String zipCode) {

		sendText(landingPage.zip, zipCode);
		System.out.println("zip");

	}

	@When("user unselects Auto insurance")
	public void user_unselects_Auto_insurance() {
		click(landingPage.auto);
		System.out.println("unselect auto");

	}

	@When("user selects Home insurance")
	public void user_selects_Home_insurance() {
		click(landingPage.home);
		System.out.println("unselect home");

	}

	@When("user clicks on next button")
	public void user_clicks_on_next_button() {
		click(landingPage.next);
		System.out.println("next button");

	}

	@When("user is navigated to Get Started page")
	public void user_is_navigated_to_Get_Started_page() {
		waitForVisibility(getStartedPage.lockup);
		Assert.assertTrue(getStartedPage.lockup.isDisplayed());

	}

	@Then("user navigates to Start page")
	public void user_navigates_to_Start_page() {
		click(getStartedPage.getStartedButton);

	}

	@When("user selects Home insurance and Life insurance")
	public void user_selects_Home_insurance_and_Life_insurance() {
		
		click(landingPage.home);
		click(landingPage.life);


	}

}
