package utils;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import base.PageInitializer;

public class ComMethods extends PageInitializer {

	public void sendText(WebElement element, String keysToSend) {
		element.clear();
		element.sendKeys(keysToSend);
	}

	public WebDriverWait getWaitObject() {
		WebDriverWait wait = new WebDriverWait(driver, Constants.EXPLICIT_WAIT_TIME);
		return wait;
	}

	public void waitForVisibility(WebElement element) {
		getWaitObject().until(ExpectedConditions.visibilityOf(element));
	}

	public void waitForClickabilitiy(WebElement element) {
		getWaitObject().until(ExpectedConditions.elementToBeClickable(element));
	}

	public void click(WebElement element) {
		waitForClickabilitiy(element);
		element.click();
	}

	public void selectDropDownByVisibleText(WebElement element, String textToBeSelected) {
		Select select = new Select(element);
		List<WebElement> list = select.getOptions();
		for (WebElement item : list) {
			if (item.getText().equals(textToBeSelected)) {
				select.selectByVisibleText(textToBeSelected);
				break;
			}
		}
	}

	public void selectLabelByVisibleText(List<WebElement> list, String text) {
		for (WebElement item : list) {
			if (item.getText().equals(text)) {
				item.click();
				break;
			}
		}
	}

}
