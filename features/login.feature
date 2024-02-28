Feature:  Swag Labs - Login
  Background: User on the login page
    Given Zedro is on the login page

  Scenario:  As a standard_user, I want to log in succesfully
    When Zedro login with "standard_user" credential
    Then Zedro should see home page


  Scenario:  As a standard_user, I should get error message wrong username or password
    When Zedro login with "standard_user" credential
    Then Zedro should see error "Epic sadface: Username and password do not match any user in this service"