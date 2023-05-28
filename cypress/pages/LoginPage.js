import LeftSideMenuPage from "../pages/LeftSideMenuPage";
class LoginPage {
  getEmail() {
    return cy.get("#email");
  }

  getPassword() {
    return cy.get("#password");
  }

  getSubmitBtn() {
    return cy.get("#submitLoginBtn");
  }

  login(email, password) {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getLoginFormLink().click();
    this.getEmail().type(email, {delay: 0});
    this.getPassword().type(password, {delay: 0});
    this.getSubmitBtn().click();
  }


}
export default new LoginPage();
