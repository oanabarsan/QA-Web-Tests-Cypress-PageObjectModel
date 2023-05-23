/// <reference types = "cypress" />

import "cypress-iframe";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import IframePage from "../pages/IframePage";

describe("Iframes test suite", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Iframe test", () => {
    LeftSideMenuPage.getIframeLink().click();
    IframePage.getFrameLoaded;
    IframePage.getLearnMoreBtn().click();
    cy.iframe().find("#show-text").should("be.visible");
  });
});
