class ShippingDetailsPage {
  getPhone(){
    return cy.get('#phone');
  }

  getAddress(){
    return cy.get('input[name="street"]');
  }

  getCity(){
    return  cy.get('input[name="city"]');
  }

  getCountry(){
    return cy.get('#countries_dropdown_menu');
  }

  getSubmitOrder(){
    return cy.get('#submitOrderBtn');
  }


}
export default new ShippingDetailsPage();
