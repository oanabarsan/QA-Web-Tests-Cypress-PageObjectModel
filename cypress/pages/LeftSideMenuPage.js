class LeftSideMenuPage {
  getForms() {
    return cy.get("#forms");
  }

  getTables() {
    return cy.get('a[href="#tables"]');
  }

  getFileUpload() {
    return cy.get("#file-upload-item");
  }

  getLoginFormLink() {
    return cy.get('a[href="login.html"]');
  }

  getRegisterFormLink() {
    return cy.get("#register");
  }

  getLoaderPage() {
    return cy.get("a[href='loader.html']");
  }

  getBtnActions() {
    return cy.get("#actions");
  }

  getDoubleClickBtnLink() {
    return cy.get('a[href="double-click.html"');
  }

  getScrollingPageLink() {
    return cy.get("#scrolling");
  }

  getShowHideElementLink() {
    return cy.get('a[href="show-hide-element.html"]');
  }

  getPagination(){
    return cy.get("#pagination");
  }

  getButtons(){
    return cy.get("#buttons");
  }

  getCheckboxesPageLink(){
    return cy.get('#checkboxes');
  }

  getIframes(){
    return cy.get("a[role='button']");
  }
}
export default new LeftSideMenuPage();
