package pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.BaseClass;

public class GreetingPage {

	@FindBy(id = "PrimaryDOB")
	public WebElement dateOfBirth;
	
	@FindBy(xpath = "//h1[contains(text(), 'Glad to meet')]")
	public WebElement greetingMessage;

	@FindBy(xpath = "//div[@class='option-group']/label")
	public List<WebElement> genderSelection;

	@FindBy(id = "MaritalStatus")
	public WebElement maritalStatus;

	@FindBy(id = "btn_next")
	public WebElement nextButton;

	@FindBy(xpath = "//div[contains(text(), 'Please provide')]")
	public WebElement errorMessageForBirthdate;
	
	@FindBy(xpath = "//div[contains(text(), 'your gender')]")
	public WebElement errorMessageForGender;
	
	@FindBy(xpath = "//div[contains(text(), 'make a selection')]")
	public WebElement errorMessageForMaritalStatus;

	public GreetingPage() {
		PageFactory.initElements(BaseClass.driver, this);
	}

}
