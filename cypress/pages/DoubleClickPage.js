class DoubleClickPage {
  getDoubleClickBtn() {
    return cy.get("#double-click-btn");
  }
}

export default new DoubleClickPage();
