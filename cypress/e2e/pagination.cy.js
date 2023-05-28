/// <reference types = "cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import PaginationPage from "../pages/PaginationPage";

describe("Pagination test", () => {
  it("Pagination test", () => {
    LeftSideMenuPage.getPagination().click();
    PaginationPage.getPage1().click();
    cy.contains(`You clicked page no. 1`).should("be.visible");
    PaginationPage.getPage2().click();
    cy.contains(`You clicked page no. 2`).should("be.visible");
    PaginationPage.getPage3().click();
    cy.contains(`You clicked page no. 3`).should("be.visible");
    PaginationPage.getNextBtn().click();
    cy.contains(`You clicked the "Next" button`).should("be.visible");
  });
});
