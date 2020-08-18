var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var expect = require('Chai').expect;
var EC = protractor.ExpectedConditions;


Given(/^"([^"]*)" is open$/, async function (url) {
    browser.get('https://' + url);
    console.log(await browser.getTitle());
});

When(/^I click "([^"]*)"$/, async function (headerOption) {
    await element.all(by.css('div[class="header-links"]>ul>li'))
        .filter(function (header, index) {
            return header.getText()
                .then(function (text) {
                    return text === headerOption;
                });
        }).first().click();
    var pageTitle = element(by.css("div[class='page-title']>h1"));
    await browser.wait(EC.textToBePresentInElement(pageTitle, 'Welcome, Please Sign In!'), 5000);
    return pageTitle;
});

When(/^enter valid "([^"]*)" as "([^"]*)"$/, async function (fieldName, fieldValue) {
    var commentField = element(by.css('input[id*="' + fieldName + '"]'));
    commentField.clear();
    await commentField.sendKeys(fieldValue);
    return commentField;
});

When(/^I click "([^"]*)" button$/, async function (preferredButton) {
    var button = element(by.css('div[class="buttons"]>input[value="' + preferredButton + '"]'));
    await button.click();
    return button;
});

Then(/^I am logged in$/, async function () {
    var accountStatus = element(by.css("div.header-links > ul > li:nth-child(1) > a"));
    await browser.wait(EC.textToBePresentInElement(accountStatus, 'My account'), 2000);
    return accountStatus;

});

Then(/^the search results has the "([^"]*)" in it$/, async function (searchResult) {
    var button = element(by.css('input[value="Search"]'));
    await button.click();
    var results = element(by.css("div[class='product-name'] h1"));
    expect(results.getText() === searchResult);
    // await browser.wait(EC.textToBePresentInElement(results, searchResult), 5000);
    return results;
});

Given(/^I add "([^"]*)" to my basket$/, function () {

});

When(/^I check my basket total$/, function () {

});

Then(/^it should match the price of the item added into basket$/, function () {

});
