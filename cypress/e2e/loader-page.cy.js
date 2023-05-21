/// <reference types = "cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe("Loader page test", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Loader page test", () => {
  
    LeftSideMenuPage.getLoaderPage().click();
    cy.wait(3000);
    cy.get('#myDiv>h2').contains(`Tada!`).should(
      "be.visible"
    );

  });
});