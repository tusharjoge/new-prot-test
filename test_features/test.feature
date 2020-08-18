Feature: NopCommerce search on Demo envi

  Background:
    Given "demo.nopcommerce.com" is open

  Scenario: Sign into demo.nopcommerce.com
    When I click "Log in"
     And enter valid "Email" as "tawson82@hotmail.com"
     And enter valid "Password" as "tjo1234"
     And I click "Log in" button
    Then I am logged in

  Scenario: Search for product add to basket
     When enter valid "search" as "First Prize Pies"
     Then the search results has the "First Prize Pies" in it

  Scenario: Check basket total
    Given I add "First Prize Pies" to my basket
     When I check my basket total
     Then it should match the price of the item added into basket