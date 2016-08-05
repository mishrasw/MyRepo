package test.dbs.scripts;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import main.automation.accelerators.ActionEngine;
import test.dbs.pages.dbsHomePage;
import test.dbs.pages.searchResultsPage;

/**

 */
public class MyTestCase extends ActionEngine {
	//private static final Logger LOG = Logger.getLogger(AIRS_TC24_Create_Organization_with_Sponsorships.class);

	
	@Test(groups={"regression"},dataProvider="getSearchTextValue")
	public void MyTestCase1(String SearchText) throws Throwable{
		try		
		{
			
			this.reporter.initTestCaseDescription("Create Organization with Sponsorships");
			//new dbsHomePage();
			new dbsHomePage(Driver,reporter).search(SearchText);
			Thread.sleep(10000);
			new searchResultsPage(Driver,reporter).verifySearchResultTitle();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	@DataProvider
	public Object[][] getSearchTextValue() throws Throwable
	{
		Object[][] data=xlsrdr.getDataArrayBySheet("Search");
		System.out.println(data);
		return data;
	}
	
}