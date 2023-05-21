/// <reference types = "cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import DoubleClickPage from "../pages/DoubleClickPage";
import ShowHideElementPage from "../pages/ShowHideElementPage";

describe("Buttons page test", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Double click button test", () => {
    LeftSideMenuPage.getBtnActions().click();
    LeftSideMenuPage.getDoubleClickBtnLink().click();
    DoubleClickPage.getDoubleClickBtn().dblclick();
    cy.get("#double-click-result")
      .contains(`Congrats, you double clicked!`)
      .should("be.visible");
  });

  it("Scrolling test", () => {
    LeftSideMenuPage.getBtnActions().click();
    LeftSideMenuPage.getScrollingPageLink().click();
    cy.scrollTo("bottom");
    cy.get("#the-end").contains(`THE END`).should("be.visible");
  });

  it("Show element test", () => {
    LeftSideMenuPage.getBtnActions().click();
    LeftSideMenuPage.getShowHideElementLink().click();
    ShowHideElementPage.getShowElementBtn().click;
    cy.get("#hiddenText")
      .contains("This text will be hidden")
      .should("be.visible");
  });
});
