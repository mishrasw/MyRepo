Feature: Currency Converter Usecases

Scenario: Verify alert message for no value in amount field
	Given Launch "aut_url" URL
	Given I am already on "Bank | Westpac New Zealand - Helping Kiwis with their personal banking" page
	When I navigate to currency page
	And I verify "cur_frame" exist
	Given I am already on "Currency converter | International & Migrant - Westpac NZ" page
	And I switch to frame "cur_frame"
	#And I enter value "1" in "cur_to_amount_input" object
	And I click on "cur_submit_button" object
	Then I verify text "Please enter the amount you want to convert." displayed on "cur_error_label" object
	And I switch to default frame
	
	
	
Scenario Outline: Verify currency A converted successfully to currency B
	Given Launch "aut_url" URL
	Given I am already on "Bank | Westpac New Zealand - Helping Kiwis with their personal banking" page
	When I navigate to currency page
	And I verify "cur_frame" exist
	Given I am already on "Currency converter | International & Migrant - Westpac NZ" page
	And I switch to frame "cur_frame"
	And I select input "<fromCountryCur>" in "cur_from_currency_combo" combo
	And I enter value "1" in "cur_to_amount_input" object
	And I select input "<toCountryCur>" in "cur_to_currency_combo" combo
	And I click on "cur_submit_button" object
	And I verify "cur_success_label" exist
	And I switch to default frame

Examples:
	|fromCountryCur	|toCountryCur	|
	|United States Dollar	|New Zealand Dollar	|
	|New Zealand Dollar	|United States Dollar	|
	|Pound Sterling	|New Zealand Dollar	|
	|Swiss Franc	|Euro	|
