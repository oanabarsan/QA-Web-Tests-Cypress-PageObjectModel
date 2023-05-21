/// <reference types = "cypress" />

import CheckboxBtnPage from "../pages/CheckboxBtnPage";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe("Buttons page test", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
    
  });

  it("Checkbox button test", () => {
    LeftSideMenuPage.getButtons().click();
    LeftSideMenuPage.getCheckboxesPageLink().click();
    CheckboxBtnPage.getCheckBox1().click().should('be.checked');
    CheckboxBtnPage.getCheckBox2().click().should('be.checked');
    CheckboxBtnPage.getCheckBox3().click().should('be.checked');
    CheckboxBtnPage.getResetBtn().click();
    cy.get(':checkbox').uncheck();
  });
});