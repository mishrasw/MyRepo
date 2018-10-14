package com.automation.utils;

import org.openqa.selenium.By;

public class objectUtility {

	public static By formObject(String objectDesc) {
		By objectGen = null;
		String[] identifiers = objectDesc.split("::",2);
		
		switch(identifiers[0].trim().toLowerCase()) {
		case "id":
			objectGen = By.id(identifiers[1].trim());
			break;
		case "name":
			objectGen = By.name(identifiers[1].trim());
			break;
		case "class":
			objectGen = By.className(identifiers[1].trim());
			break;
		case "xpath":
			objectGen = By.xpath(identifiers[1].trim());	
			break;
		case "css":
			objectGen = By.cssSelector(identifiers[1].trim());
			break;
		case "linktext":
			objectGen = By.linkText(identifiers[1].trim());
			break;
		case "partiallinktext":
			objectGen = By.partialLinkText(identifiers[1].trim());
			break;
		default:
			objectGen=null;
			break;
		}
		
		return objectGen;
		
	}
	
}
