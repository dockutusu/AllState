package utils;

public class Constants {
	
	private static String projectPath = System.getProperty("user.dir");
	
	public static final String CONFIG_PATH = projectPath + "/src/test/resources/configs/configs.properties"; 
	public static final String CHROME_PATH = projectPath + "/src/test/resources/drivers/chromedriver.exe";
	public static final int IMPLICIT_WAIT_TIME  = 5;
	public static final int EXPLICIT_WAIT_TIME  = 7;
	public static final String SCREEN_SHOT_PATH= projectPath + "/screenshots/";


}
