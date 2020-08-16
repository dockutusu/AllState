package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith (Cucumber.class)
@CucumberOptions (
		features = "src/test/resources/features/greetingPageEntry.feature",
		glue = "steps",
		plugin = {
				"pretty",
				"json:target/cucumber.json",
				"html:target/cucumber-default-report"},
		monochrome = true,
		tags = "@second"

		)
public class SmokeRunner {

		

}
