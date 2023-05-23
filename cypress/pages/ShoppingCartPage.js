class ShoppingCartPage {
  getFirstItem(){
    return cy.get('div.shop-items div.shop-item:nth-child(1) button');
  }

  getCheckOutBtn(){
    return cy.contains('PROCEED TO CHECKOUT');
  }


}
export default new ShoppingCartPage();
