package runners;

import org.junit.runner.RunWith;
import org.testng.annotations.DataProvider;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.testng.AbstractTestNGCucumberTests;

@RunWith (Cucumber.class)
@CucumberOptions (
		features = "src/test/resources/features/greetingPageEntry.feature",
		glue = "steps",
		plugin = {
				"pretty",
				"json:target/cucumber.json",
				"html:target/cucumber-default-report"},
		monochrome = true

		)
public class SmokeRunner {

		

}
