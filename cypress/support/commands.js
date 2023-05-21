import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";

Cypress.Commands.add('login',(email, password) =>{
  LeftSideMenuPage.getForms().click();
  LeftSideMenuPage.getLoginFormLink().click();
  LoginPage.getEmail().type(email);
  LoginPage.getPassword().type(password);
  LoginPage.getSubmitBtn().click();
})