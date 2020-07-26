package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfReader {

	private static Properties prop;

	public static void configConnection(String filePath) throws IOException {

		FileInputStream fis = new FileInputStream(filePath);
		prop = new Properties();
		prop.load(fis);
		fis.close();

	}

	public static String getConfigValue(String key) {
		return prop.getProperty(key);
	}

}
