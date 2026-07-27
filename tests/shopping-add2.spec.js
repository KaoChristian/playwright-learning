const { test, expect } = require('../fixtures');

test('add-to-cart', async ({ page, loginPage, inventoryPage, cartPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addToCart('add-to-cart-sauce-labs-bolt-t-shirt');
  await inventoryPage.addToCart('add-to-cart-sauce-labs-fleece-jacket');

  await expect(inventoryPage.cartBadge).toHaveText('2');

  await inventoryPage.goToCart();

  await expect(cartPage.getProductLink('Sauce Labs Bolt T-Shirt')).toBeVisible();
  await expect(cartPage.getProductLink('Sauce Labs Fleece Jacket')).toBeVisible();
});
