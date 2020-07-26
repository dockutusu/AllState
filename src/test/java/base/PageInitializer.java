package base;

import pages.AddressInquiryPage;
import pages.GetStarted;
import pages.GreetingPage;
import pages.LandingPage;
import pages.StartWithBasics;

public class PageInitializer extends BaseClass {

	protected static LandingPage landingPage;
	protected static GetStarted getStartedPage;
	protected static StartWithBasics startWithBasicsPage;
	protected static GreetingPage greetingPage;
	protected static AddressInquiryPage addressInquiryPage;

	public void initializePages() {
		landingPage = new LandingPage();
		getStartedPage = new GetStarted();
		startWithBasicsPage = new StartWithBasics();
		greetingPage = new GreetingPage();
		addressInquiryPage = new AddressInquiryPage();
	}

}
