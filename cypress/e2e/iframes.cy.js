/// <reference types = "cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import IframesPage from "../pages/IframesPage";

describe("Iframes page test", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
    
  });


  it("Iframe 'Learn more' button test", () => {
  
    LeftSideMenuPage.getIframes().click();
    IframesPage.getLearnMoreBtn().click();
    cy.get("#message").should("be.visible");
    cy.contains(
      'This text appears when you click the "Learn more" button'
    ).should("be.visible");

  });
});