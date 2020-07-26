package steps;

import java.io.IOException;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeStep;
import utils.ComMethods;

public class Hooks extends ComMethods {
	
	@Before
	public void initializeDriverAndPages() throws IOException {
		setUp();
		initializePages();			
	}

	
	@After
	public void end() {
		tearDown();
	}

}
