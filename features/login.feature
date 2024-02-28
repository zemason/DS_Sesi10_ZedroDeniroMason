Feature:  Swag Labs - Login
  Background: User on the login page
    Given Zedro is on the login page

  @positive
  Scenario:  As a standard_user, I want to log in succesfully
    When Zedro login with "standard_user" credential
    Then Zedro should see home page

  @negative
  Scenario:  As a locked_out_user, I should get error message 
    When Zedro login with "locked_out_user" credential
    Then Zedro should see error "Epic sadface: Sorry, this user has been locked out."

