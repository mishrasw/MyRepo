package com.automation.core;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.fasterxml.jackson.databind.jsontype.impl.ClassNameIdResolver;

public class init {
	
	public static WebDriver driver=null;
	public static HashMap<String,String> propMap = new HashMap<String, String>();
	public static HashMap<String,String> objMap = new HashMap<String, String>();
	private File file = null;
	public init() {
		try {
		
		//Read Master Config properties file
		File file = new File("config/masterconfig.properties"); 
		FileInputStream fileInputStream = new FileInputStream(file);
		
		Properties prop = new Properties();
        prop.load(fileInputStream);
        for (Entry<Object, Object> entry : prop.entrySet()) {
            propMap.put((String) entry.getKey(), (String) entry.getValue());
        }
        
        //Read Page Objects
        objMap.clear();
        File folder = new File("pages/");
        File[] listOfFiles = folder.listFiles();

        for (File indfile : listOfFiles) {
            if (indfile.isFile()) {
            	FileInputStream indfileInputStream = new FileInputStream(indfile);
            	Properties indprop = new Properties();
            	indprop.load(indfileInputStream);
                for (Entry<Object, Object> entry : indprop.entrySet()) {
                	objMap.put((String) entry.getKey(), (String) entry.getValue());
                }
            }
        }
        
//        //maximize browser
//        driver.manage().window().maximize();
//        //set implicit wait
//        driver.manage().timeouts().implicitlyWait(Long.parseLong(propMap.get("implicit_wait_time_seconds").trim()), TimeUnit.SECONDS);
//        driver.manage().timeouts().pageLoadTimeout(Long.parseLong(propMap.get("implicit_wait_time_seconds").trim()), TimeUnit.SECONDS);
        
        
        } 
		
		catch (IOException e) 
        {
			e.printStackTrace();
		}
	
	}

}
