package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.BaseClass;

public class AddressInquiryPage {

	@FindBy(xpath = "//label[text()='Street Address']")
	public WebElement addressText;

	public AddressInquiryPage() {

		PageFactory.initElements(BaseClass.driver, this);
	}

}
