$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("currencyConverter.feature");
formatter.feature({
  "line": 1,
  "name": "Currency Converter Usecases",
  "description": "",
  "id": "currency-converter-usecases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1320550143,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#Background:"
    },
    {
      "line": 3,
      "value": "#\tGiven Launch \"aut_url\" URL"
    }
  ],
  "line": 5,
  "name": "Verify alert message for no value in amount field",
  "description": "",
  "id": "currency-converter-usecases;verify-alert-message-for-no-value-in-amount-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Launch \"aut_url\" URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am already on \"Bank | Westpac New Zealand  - Helping Kiwis with their personal banking\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to currency page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am already on \"Currency converter | International \u0026 Migrant - Westpac NZ\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I switch to frame \"cur_frame\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#And I enter value \"1\" in \"cur_to_amount_input\" object"
    }
  ],
  "line": 12,
  "name": "I click on \"cur_submit_button\" object",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify text \"Please enter the amount you want to convert.\" displayed on \"cur_error_label\" object",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I switch to default frame",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "aut_url",
      "offset": 8
    }
  ],
  "location": "currencyConverterSteps.launch_URL(String)"
});
formatter.result({
  "duration": 6690578086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank | Westpac New Zealand  - Helping Kiwis with their personal banking",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 4940470,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_navigate_to_currency_page()"
});
formatter.result({
  "duration": 200828301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency converter | International \u0026 Migrant - Westpac NZ",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 3898645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_frame",
      "offset": 19
    }
  ],
  "location": "currencyConverterSteps.i_switch_to_frame(String)"
});
formatter.result({
  "duration": 3048698161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_submit_button",
      "offset": 12
    }
  ],
  "location": "currencyConverterSteps.i_click_on_object(String)"
});
formatter.result({
  "duration": 1196767806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter the amount you want to convert.",
      "offset": 15
    },
    {
      "val": "cur_error_label",
      "offset": 75
    }
  ],
  "location": "currencyConverterSteps.i_verify_text_displayed_on_object(String,String)"
});
formatter.result({
  "duration": 61575856,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_switch_to_default_frame()"
});
formatter.result({
  "duration": 4707317,
  "status": "passed"
});
formatter.after({
  "duration": 142517142,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify currency A converted successfully to currency B",
  "description": "",
  "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Launch \"aut_url\" URL",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I am already on \"Bank | Westpac New Zealand  - Helping Kiwis with their personal banking\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I navigate to currency page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am already on \"Currency converter | International \u0026 Migrant - Westpac NZ\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I switch to frame \"cur_frame\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select input \"\u003cfromCountryCur\u003e\" in \"cur_from_currency_combo\" combo",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value \"1\" in \"cur_to_amount_input\" object",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select input \"\u003ctoCountryCur\u003e\" in \"cur_to_currency_combo\" combo",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on \"cur_submit_button\" object",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify \"cur_success_label\" exist",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I switch to default frame",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;",
  "rows": [
    {
      "cells": [
        "fromCountryCur",
        "toCountryCur"
      ],
      "line": 32,
      "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;;1"
    },
    {
      "cells": [
        "United States Dollar",
        "New Zealand Dollar"
      ],
      "line": 33,
      "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;;2"
    },
    {
      "cells": [
        "New Zealand Dollar",
        "United States Dollar"
      ],
      "line": 34,
      "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;;3"
    },
    {
      "cells": [
        "Pound Sterling",
        "New Zealand Dollar"
      ],
      "line": 35,
      "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;;4"
    },
    {
      "cells": [
        "Swiss Franc",
        "Euro"
      ],
      "line": 36,
      "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 784699225,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify currency A converted successfully to currency B",
  "description": "",
  "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Launch \"aut_url\" URL",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I am already on \"Bank | Westpac New Zealand  - Helping Kiwis with their personal banking\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I navigate to currency page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am already on \"Currency converter | International \u0026 Migrant - Westpac NZ\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I switch to frame \"cur_frame\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select input \"United States Dollar\" in \"cur_from_currency_combo\" combo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value \"1\" in \"cur_to_amount_input\" object",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select input \"New Zealand Dollar\" in \"cur_to_currency_combo\" combo",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on \"cur_submit_button\" object",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify \"cur_success_label\" exist",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I switch to default frame",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "aut_url",
      "offset": 8
    }
  ],
  "location": "currencyConverterSteps.launch_URL(String)"
});
formatter.result({
  "duration": 5891573016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank | Westpac New Zealand  - Helping Kiwis with their personal banking",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 5056587,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_navigate_to_currency_page()"
});
formatter.result({
  "duration": 173664173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency converter | International \u0026 Migrant - Westpac NZ",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 3641652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_frame",
      "offset": 19
    }
  ],
  "location": "currencyConverterSteps.i_switch_to_frame(String)"
});
formatter.result({
  "duration": 2960494755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States Dollar",
      "offset": 16
    },
    {
      "val": "cur_from_currency_combo",
      "offset": 42
    }
  ],
  "location": "currencyConverterSteps.i_select_input_in_combo(String,String)"
});
formatter.result({
  "duration": 534682621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "cur_to_amount_input",
      "offset": 22
    }
  ],
  "location": "currencyConverterSteps.i_enter_value_in_object(String,String)"
});
formatter.result({
  "duration": 349678029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Zealand Dollar",
      "offset": 16
    },
    {
      "val": "cur_to_currency_combo",
      "offset": 40
    }
  ],
  "location": "currencyConverterSteps.i_select_input_in_combo(String,String)"
});
formatter.result({
  "duration": 173931223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_submit_button",
      "offset": 12
    }
  ],
  "location": "currencyConverterSteps.i_click_on_object(String)"
});
formatter.result({
  "duration": 1239738768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_success_label",
      "offset": 10
    }
  ],
  "location": "currencyConverterSteps.element_exist(String)"
});
formatter.result({
  "duration": 14489707,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_switch_to_default_frame()"
});
formatter.result({
  "duration": 4517400,
  "status": "passed"
});
formatter.after({
  "duration": 146260438,
  "status": "passed"
});
formatter.before({
  "duration": 794381842,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify currency A converted successfully to currency B",
  "description": "",
  "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Launch \"aut_url\" URL",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I am already on \"Bank | Westpac New Zealand  - Helping Kiwis with their personal banking\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I navigate to currency page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am already on \"Currency converter | International \u0026 Migrant - Westpac NZ\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I switch to frame \"cur_frame\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select input \"New Zealand Dollar\" in \"cur_from_currency_combo\" combo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value \"1\" in \"cur_to_amount_input\" object",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select input \"United States Dollar\" in \"cur_to_currency_combo\" combo",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on \"cur_submit_button\" object",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify \"cur_success_label\" exist",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I switch to default frame",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "aut_url",
      "offset": 8
    }
  ],
  "location": "currencyConverterSteps.launch_URL(String)"
});
formatter.result({
  "duration": 6278016019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank | Westpac New Zealand  - Helping Kiwis with their personal banking",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 4740539,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_navigate_to_currency_page()"
});
formatter.result({
  "duration": 171303916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency converter | International \u0026 Migrant - Westpac NZ",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 4026886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_frame",
      "offset": 19
    }
  ],
  "location": "currencyConverterSteps.i_switch_to_frame(String)"
});
formatter.result({
  "duration": 2955195651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Zealand Dollar",
      "offset": 16
    },
    {
      "val": "cur_from_currency_combo",
      "offset": 40
    }
  ],
  "location": "currencyConverterSteps.i_select_input_in_combo(String,String)"
});
formatter.result({
  "duration": 217292994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "cur_to_amount_input",
      "offset": 22
    }
  ],
  "location": "currencyConverterSteps.i_enter_value_in_object(String,String)"
});
formatter.result({
  "duration": 361172031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States Dollar",
      "offset": 16
    },
    {
      "val": "cur_to_currency_combo",
      "offset": 42
    }
  ],
  "location": "currencyConverterSteps.i_select_input_in_combo(String,String)"
});
formatter.result({
  "duration": 493555563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_submit_button",
      "offset": 12
    }
  ],
  "location": "currencyConverterSteps.i_click_on_object(String)"
});
formatter.result({
  "duration": 1160976940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_success_label",
      "offset": 10
    }
  ],
  "location": "currencyConverterSteps.element_exist(String)"
});
formatter.result({
  "duration": 15704970,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_switch_to_default_frame()"
});
formatter.result({
  "duration": 3919559,
  "status": "passed"
});
formatter.after({
  "duration": 143964534,
  "status": "passed"
});
formatter.before({
  "duration": 792177837,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify currency A converted successfully to currency B",
  "description": "",
  "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Launch \"aut_url\" URL",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I am already on \"Bank | Westpac New Zealand  - Helping Kiwis with their personal banking\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I navigate to currency page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am already on \"Currency converter | International \u0026 Migrant - Westpac NZ\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I switch to frame \"cur_frame\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select input \"Pound Sterling\" in \"cur_from_currency_combo\" combo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value \"1\" in \"cur_to_amount_input\" object",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select input \"New Zealand Dollar\" in \"cur_to_currency_combo\" combo",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on \"cur_submit_button\" object",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify \"cur_success_label\" exist",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I switch to default frame",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "aut_url",
      "offset": 8
    }
  ],
  "location": "currencyConverterSteps.launch_URL(String)"
});
formatter.result({
  "duration": 6264344193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank | Westpac New Zealand  - Helping Kiwis with their personal banking",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 4826873,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_navigate_to_currency_page()"
});
formatter.result({
  "duration": 174190268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency converter | International \u0026 Migrant - Westpac NZ",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 3525767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_frame",
      "offset": 19
    }
  ],
  "location": "currencyConverterSteps.i_switch_to_frame(String)"
});
formatter.result({
  "duration": 3173782537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound Sterling",
      "offset": 16
    },
    {
      "val": "cur_from_currency_combo",
      "offset": 36
    }
  ],
  "location": "currencyConverterSteps.i_select_input_in_combo(String,String)"
});
formatter.result({
  "duration": 519921122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "cur_to_amount_input",
      "offset": 22
    }
  ],
  "location": "currencyConverterSteps.i_enter_value_in_object(String,String)"
});
formatter.result({
  "duration": 353413933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Zealand Dollar",
      "offset": 16
    },
    {
      "val": "cur_to_currency_combo",
      "offset": 40
    }
  ],
  "location": "currencyConverterSteps.i_select_input_in_combo(String,String)"
});
formatter.result({
  "duration": 166051169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_submit_button",
      "offset": 12
    }
  ],
  "location": "currencyConverterSteps.i_click_on_object(String)"
});
formatter.result({
  "duration": 1279085950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_success_label",
      "offset": 10
    }
  ],
  "location": "currencyConverterSteps.element_exist(String)"
});
formatter.result({
  "duration": 13613801,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_switch_to_default_frame()"
});
formatter.result({
  "duration": 3729482,
  "status": "passed"
});
formatter.after({
  "duration": 140942601,
  "status": "passed"
});
formatter.before({
  "duration": 778223881,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify currency A converted successfully to currency B",
  "description": "",
  "id": "currency-converter-usecases;verify-currency-a-converted-successfully-to-currency-b;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Launch \"aut_url\" URL",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I am already on \"Bank | Westpac New Zealand  - Helping Kiwis with their personal banking\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I navigate to currency page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I am already on \"Currency converter | International \u0026 Migrant - Westpac NZ\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I switch to frame \"cur_frame\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select input \"Swiss Franc\" in \"cur_from_currency_combo\" combo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter value \"1\" in \"cur_to_amount_input\" object",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select input \"Euro\" in \"cur_to_currency_combo\" combo",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on \"cur_submit_button\" object",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify \"cur_success_label\" exist",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I switch to default frame",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "aut_url",
      "offset": 8
    }
  ],
  "location": "currencyConverterSteps.launch_URL(String)"
});
formatter.result({
  "duration": 5918745895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank | Westpac New Zealand  - Helping Kiwis with their personal banking",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 4767397,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_navigate_to_currency_page()"
});
formatter.result({
  "duration": 171247329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Currency converter | International \u0026 Migrant - Westpac NZ",
      "offset": 17
    }
  ],
  "location": "currencyConverterSteps.i_am_already_on_page(String)"
});
formatter.result({
  "duration": 6990380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_frame",
      "offset": 19
    }
  ],
  "location": "currencyConverterSteps.i_switch_to_frame(String)"
});
formatter.result({
  "duration": 2861429812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Swiss Franc",
      "offset": 16
    },
    {
      "val": "cur_from_currency_combo",
      "offset": 33
    }
  ],
  "location": "currencyConverterSteps.i_select_input_in_combo(String,String)"
});
formatter.result({
  "duration": 526219067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "cur_to_amount_input",
      "offset": 22
    }
  ],
  "location": "currencyConverterSteps.i_enter_value_in_object(String,String)"
});
formatter.result({
  "duration": 353335297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Euro",
      "offset": 16
    },
    {
      "val": "cur_to_currency_combo",
      "offset": 26
    }
  ],
  "location": "currencyConverterSteps.i_select_input_in_combo(String,String)"
});
formatter.result({
  "duration": 455403849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_submit_button",
      "offset": 12
    }
  ],
  "location": "currencyConverterSteps.i_click_on_object(String)"
});
formatter.result({
  "duration": 1160705168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cur_success_label",
      "offset": 10
    }
  ],
  "location": "currencyConverterSteps.element_exist(String)"
});
formatter.result({
  "duration": 15973945,
  "status": "passed"
});
formatter.match({
  "location": "currencyConverterSteps.i_switch_to_default_frame()"
});
formatter.result({
  "duration": 3757711,
  "status": "passed"
});
formatter.after({
  "duration": 148841051,
  "status": "passed"
});
});