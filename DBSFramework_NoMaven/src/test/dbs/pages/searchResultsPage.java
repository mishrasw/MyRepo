package test.dbs.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import main.automation.accelerators.ActionEngine;
import main.automation.report.CReporter;

public class searchResultsPage extends ActionEngine {
	
	public By searchResultsTitle=By.xpath("//h1[contains(.,'Search Results')]");

	
	
	
	public searchResultsPage(WebDriver Driver, CReporter reporter){
		SuperClass(Driver,reporter);
	}
	

	public  void verifySearchResultTitle(){
		try {
			
			if(isElementPresent(searchResultsTitle, "Search Results Page Title", true))
				this.reporter.successwithscreenshot("Verify Search Results Page" , "Search Results Page Displayed Successfully", this.Driver);
			else
				this.reporter.failureReport("Verify Search Results Page" , "Search Results Page NOT Displayed Successfully", this.Driver);
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
