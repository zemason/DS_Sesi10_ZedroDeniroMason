const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page.js");
const HomePage = require("../pageobjects/home.page.js");

Given(/^Zedro is on the login page$/, async () => {
  await LoginPage.open();
});

When(/^Zedro login with "(.*)" credential$/, async (username) => {
  await LoginPage.login(username);
});

Then(/^Zedro should see home page$/, async () => {
  await HomePage.validateHomePage();
});

Then(
  /^Zedro should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage);
  }
);
