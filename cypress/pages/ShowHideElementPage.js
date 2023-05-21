class ShowHideElementPage {
  getShowElementBtn() {
    return cy.get("#showHideBtn");
  }
}

export default new ShowHideElementPage();
