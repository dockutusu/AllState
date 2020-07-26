package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.BaseClass;

public class GetStarted {
	
	
	@FindBy (css = "svg.lockup__logo")
	public WebElement lockup;
	
	@FindBy(id="btnStartPrefill")
	public WebElement getStartedButton;

	public GetStarted() {
		PageFactory.initElements(BaseClass.driver, this);
	}

}
