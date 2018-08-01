'use strict';
const { When, Then} = require('cucumber');
const { client } = require('nightwatch-cucumber')
const login =  client.page.loginPageObject();
When(/^I open the webpage url$/, () => {
    return client.url('http://automationpractice.com');
});
Then(/^I should be able to see the landing page of Test Website$/, () => {
    return client.useXpath().waitForElementPresent('@signInLink', 1000);
});