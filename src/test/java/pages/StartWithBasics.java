package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.BaseClass;

public class StartWithBasics {

	@FindBy(id = "PRIMARYFirstName")
	public WebElement firstName;

	@FindBy(id = "PRIMARYLastName")
	public WebElement lastName;

	@FindBy(id = "PRIMARYSuffix")
	public WebElement suffix;

	@FindBy(id = "btn_next")
	public WebElement nextButton;
	
	@FindBy(xpath = "//div[contains(text(), 'the first name')]")
	public WebElement errorMessageForFirstName;
	
	@FindBy(xpath = "//div[contains(text(), 'the last name')]")
	public WebElement errorMessageForLastName;
	
	public StartWithBasics() {
		PageFactory.initElements(BaseClass.driver, this);
	}

}
