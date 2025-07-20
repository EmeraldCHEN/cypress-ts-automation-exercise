import { HomePage } from '../../../pages/HomePage';
import { CartPage } from '../../../pages/CartPage';
import { SignupPage } from '../../../pages/SignupPage';
import { PaymentPage } from '../../../pages/PaymentPage';
import { AccountPage } from '../../../pages/AccountPage';

import { randEmail, randFullName, randPassword } from '@ngneat/falso';

describe('E2E Checkout Flow - AutomationExercise', () => {
  const home = new HomePage();
  const cart = new CartPage();
  const signup = new SignupPage();
  const payment = new PaymentPage();
  const account = new AccountPage();

  const username = randFullName();
  const email = randEmail();
  const password = randPassword();

  it('should complete user registration, checkout, and delete account', () => {
    // Step 1–3: Visit and verify homepage
    home.visit();
    home.verifyVisible();

    // Step 4–5: Add product and go to cart
    home.addProductsToCart();
    home.goToCart();

    // Step 6–7: Verify cart and proceed
    cart.verifyVisible();
    cart.proceedToCheckout();

    // Step 8–10: Sign up and create account
    signup.open();
    signup.fillSignupForm(username, email);
    signup.completeAccountForm(password);
    signup.verifyAccountCreated();

    // Step 11: Check "Logged in as username"
    signup.verifyLoggedIn(username);

    // Step 12–13: Go to cart and proceed again
    home.goToCart();
    cart.proceedToCheckout();

    // Step 14–15: Verify address and enter comment
    payment.verifyAddressAndReview();
    payment.enterComment('This is a test order');

    // Step 16–18: Fill payment and confirm
    payment.fillPaymentDetails();
    payment.verifyOrderSuccess();

    // Step 19–20: Delete account
    account.deleteAccount();
    account.verifyAccountDeleted();
  });
});
