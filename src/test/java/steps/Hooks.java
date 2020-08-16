package steps;

import java.io.IOException;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import utils.ComMethods;

public class Hooks extends ComMethods {



	@Before
	public void initializeDriverAndPages(Scenario scenario) throws IOException {
		setUp();
		initializePages();
		

	}

	@After
	public void end(Scenario scenario) throws IOException {

		byte[] shot;

		if (scenario.isFailed()) {
			shot = ComMethods.takeScreenshot("failed/" + scenario.getName() + "-");
		} else {
			shot = ComMethods.takeScreenshot("passed/" + scenario.getName() + "-");
		}
		scenario.attach(shot, "image/png", scenario.getName());

		tearDown();
	}

}
