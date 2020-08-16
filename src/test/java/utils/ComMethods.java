package utils;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import base.PageInitializer;
import groovy.io.FileType;

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
			if (text != null && item.getText().equals(text)) {
				item.click();
				break;
			}
		}
	}

	public static byte[] takeScreenshot(String screenShotType) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		byte[] byteShot = ts.getScreenshotAs(OutputType.BYTES);
		File fileShot = ts.getScreenshotAs(OutputType.FILE);

		FileUtils.copyFile(fileShot, new File(Constants.SCREEN_SHOT_PATH + screenShotType + getTimeStamp()+".png"));

		return byteShot;
	}

	public static String getTimeStamp() {
		LocalDateTime currentTime = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd-hh-mm-ss");
		String dateInString = currentTime.format(formatter);
		return dateInString;
	}

}
