/// <reference types = "cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe("Loader page test", () => {
  it("Loader page test", () => {
    LeftSideMenuPage.getLoaderPage().click();
    cy.wait(3000);
    cy.get("#myDiv>h2").contains(`Tada!`).should("be.visible");
  });
});
