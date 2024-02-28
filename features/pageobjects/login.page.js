const { $, expect } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnLogin() {
    return $("#login-button");
  }

  errorLockedOutUser = (dynamicMessage) =>
    $(`//h3[text()="${dynamicMessage}"]`);

  errorInvalidUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`);

  async login(username) {
    await this.inputUsername.waitForDisplayed({ timeout: 2500 });
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
    await this.btnLogin.click();
  }

  async validateLockedOutUserError(dynamicMessage) {
    await this.errorLockedOutUser(dynamicMessage).waitForDisplayed({
      timeout: 2500,
    });
    await expect(this.errorLockedOutUser(dynamicMessage)).toBeDisplayed();
  }


  open() {
    return super.open("/");
  }
}

module.exports = new LoginPage();
