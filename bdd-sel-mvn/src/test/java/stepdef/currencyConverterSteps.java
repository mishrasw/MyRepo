package stepdef;



import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.TestRunner;
import org.testng.annotations.Test;

import com.automation.core.init;
import com.automation.utils.objectUtility;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class currencyConverterSteps extends init {

	
	
	@Before
	public void initiateDriver() {
		
		String browserName = propMap.get("browser_name");
		//Code for all browsers need to be added
		switch(browserName.trim().toLowerCase()) {
		case "chrome":
			System.setProperty("webdriver.chrome.driver", "lib/chromedriver");
			driver = new ChromeDriver();
			break;
		case "safari":
			 driver = new SafariDriver();
			 break;
		}
		
		
		 //maximize browser
        driver.manage().window().maximize();
        //set implicit wait
        driver.manage().timeouts().implicitlyWait(Long.parseLong(propMap.get("implicit_wait_time_seconds").trim()), TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(Long.parseLong(propMap.get("implicit_wait_time_seconds").trim()), TimeUnit.SECONDS);
	}
	
	 @After
	    public void closedriver() {
	        driver.close();
	        driver.quit();
	    }
	 
	 
	 
@Given("^Launch \"([^\"]*)\" URL$")
public void launch_URL(String url) throws Throwable {
		driver.get(propMap.get(url));
}



@Given("^I am already on \"([^\"]*)\" page$")
public void i_am_already_on_page(String pageTitle) throws Throwable {
	if(driver.getTitle().toString().equals(pageTitle)) {
		System.out.println("Correct landing page displayed");
	}else {
		System.out.println("Incorrect landing page ");
	}
    	

}

@When("^I navigate to currency page$")
public void i_navigate_to_currency_page() throws Throwable {
	object_visible("home_fx_main_menu");
	mouse_hover_to_element("home_fx_main_menu");
	i_click_on_object("home_currency_converter_button");
}

@Given("^I enter value \"([^\"]*)\" in \"([^\"]*)\" object$")
public void i_enter_value_in_object(String data, String prop) throws Throwable {
	object_visible(prop);
	prop=objMap.get(prop);
    driver.findElement(objectUtility.formObject(prop)).sendKeys(data);
}

@Given("^I click on \"([^\"]*)\" object$")
public void i_click_on_object(String prop) throws Throwable {
	object_clickable(prop);
	prop=objMap.get(prop);
	driver.findElement(objectUtility.formObject(prop)).click();;
}

@Then("^I verify text \"([^\"]*)\" displayed on \"([^\"]*)\" object$")
public void i_verify_text_displayed_on_object(String value, String prop) throws Throwable {
	prop=objMap.get(prop);
	Assert.assertEquals(driver.findElement(objectUtility.formObject(prop)).getText(), value);
}

@Given("^I select input \"([^\"]*)\" in \"([^\"]*)\" combo$")
public void i_select_input_in_combo(String value, String prop) throws Throwable {
	 //object_visible(prop);
	 i_click_on_object(prop);
	 prop=objMap.get(prop);
	 Select selectBox = new Select(driver.findElement(objectUtility.formObject(prop)));
	 selectBox.selectByVisibleText(value);
}

public void mouse_hover_to_element(String prop) throws Throwable {
	prop=objMap.get(prop);
	Actions action = new Actions(driver);
	WebElement we = driver.findElement(objectUtility.formObject(prop));
	action.moveToElement(we).build().perform();
}

public void object_visible(String prop) throws Throwable {
	prop=objMap.get(prop);
	WebDriverWait wait = new WebDriverWait(driver, Long.parseLong(propMap.get("explicit_wait_time_seconds").trim()));
	WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(objectUtility.formObject(prop)));
}

public void object_clickable(String prop) throws Throwable {
	prop=objMap.get(prop);
	WebDriverWait wait = new WebDriverWait(driver, Long.parseLong(propMap.get("explicit_wait_time_seconds").trim()));
	WebElement element = wait.until(ExpectedConditions.elementToBeClickable(objectUtility.formObject(prop)));
}


@Given("^I switch to frame \"([^\"]*)\"$")
public void i_switch_to_frame(String prop) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	String[] frameProp = objMap.get(prop).split("::",2);
	driver.switchTo().frame(frameProp[1].trim());
}

@Given("^I switch to default frame$")
public void i_switch_to_default_frame() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    driver.switchTo().defaultContent();
}

@And("^I verify \"([^\"]*)\" exist$")
public void element_exist(String prop) {
	prop=objMap.get(prop);
	driver.findElement(objectUtility.formObject(prop));
}


}
