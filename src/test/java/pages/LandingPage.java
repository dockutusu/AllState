package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.BaseClass;

public class LandingPage {

	@FindBy(xpath = "//*[text()='Enter ZIP']/following-sibling::div/input")
	public WebElement zip;

	@FindBy(css = "a.prfct-hero-icons-auto.active")
	public WebElement auto;

	@FindBy(css = "a.prfct-hero-icons-home")
	public WebElement home;
	
	@FindBy(css = "a.prfct-hero-icons-life")
	public WebElement life;

	@FindBy(css = "button.prfct-btn-next")
	public WebElement next;

	public LandingPage() {
		PageFactory.initElements(BaseClass.driver, this);
	}

}
