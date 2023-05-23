/// <reference types = "cypress" />

import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";
import ShippingDetailsPage from "../pages/ShippingDetailsPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

describe("Ecommerce test suite", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Submit order test", () => {
    LeftSideMenuPage.getEcommerceLink().click();
    LoginPage.getEmail().type("admin@admin.com");
    LoginPage.getPassword().type("admin123");
    LoginPage.getSubmitBtn().click();
    cy.contains('SHOPPING CART').should('be.visible');
    ShoppingCartPage.getFirstItem().click();
    cy.get('input.cart-quantity-input').should('be.visible');
    ShoppingCartPage.getCheckOutBtn().click();
    ShippingDetailsPage.getPhone().type('0747648803');
    ShippingDetailsPage.getAddress().type('Republicii street');
    ShippingDetailsPage.getCity().type('Bucuresti');
    ShippingDetailsPage.getCountry().select('Austria');
    ShippingDetailsPage.getSubmitOrder().click();
    cy.contains('Congrats! Your order of').should('be.visible');
  });
});
