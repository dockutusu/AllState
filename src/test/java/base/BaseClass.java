package base;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import utils.ConfReader;
import utils.Constants;

public class BaseClass {

	public static WebDriver driver;

	public void setUp() throws IOException {
		ConfReader.configConnection(Constants.CONFIG_PATH);
		switch (ConfReader.getConfigValue("browser").toLowerCase()) {
		case "chrome":
			System.setProperty("webdriver.chrome.driver", Constants.CHROME_PATH);
			driver = new ChromeDriver();
		}
		driver.manage().timeouts().implicitlyWait(Constants.IMPLICIT_WAIT_TIME, TimeUnit.SECONDS);
	}

	public void openBasePage() {
		driver.get(ConfReader.getConfigValue("url"));
	}

	public void tearDown() {
		if (driver != null) {
			driver.quit();
		}
	}

}
