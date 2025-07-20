export class CartPage {
  verifyVisible() {
    cy.url().should('include', '/view_cart');
  }

  proceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
  }
}
