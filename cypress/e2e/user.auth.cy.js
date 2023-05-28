/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

describe("Auth user test suite", () => {
  it("login with valid creds", () => {
    LoginPage.login("admin@admin.com", "admin123");
    cy.get("#message").should("be.visible");
    cy.findByText("admin@admin.com, you have successfully logged in!").should(
      "be.visible"
    );
    // cy.get("#message")
    //   .should("contain", "admin@admin.com, you have successfully logged in!")
    //   .should("be.visible");

    // cy.contains("admin@admin.com, you have successfully logged in!").should(
    //   "be.visible"
    // );
  });

  it("login with invalid creds", () => {
    cy.login("admin@admin.com", "parolagresita");
    cy.get("#message").should("be.visible");
    cy.contains(
      "Bad credentials! Please try again! Make sure that you've registered."
    ).should("be.visible");
  });

  it("Register with valid creds", () => {
    const randomLastName = faker.person.lastName();

    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getRegisterFormLink().click();
    RegisterPage.getFirstName().clear().type(faker.person.firstName());
    RegisterPage.getLastName().type(randomLastName);
    RegisterPage.getPhone().type("0748648803", { delay: 0 });
    RegisterPage.getSelectCountry("Romania");
    RegisterPage.getEmail().type(randomLastName + "." + faker.internet.email());
    RegisterPage.getPassword().type("IloveBucovina123!", { delay: 0 });
    RegisterPage.getTermAndConsCheckBox().click();
    RegisterPage.getRegisterBtn().click();
    cy.get("#message").should("be.visible");
    cy.contains("The account has been successfully created!").should(
      "be.visible"
    );
  });
});
