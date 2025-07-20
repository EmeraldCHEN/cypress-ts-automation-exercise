export class HomePage {
  visit() {
    cy.visit('/');
  }

  verifyVisible() {
    cy.get('body').should('contain', 'Home');
  }

  addProductsToCart() {
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();
    cy.contains('Continue Shopping').click();
  }

  goToCart() {
    cy.contains('Cart').click();
  }
}
