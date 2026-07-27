const { test, expect } = require('../fixtures');

test('add-to-cart', async ({ page, loginPage, productPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.openProduct('item-4-title-link');
  await productPage.addToCart();

  await expect(productPage.cartBadge).toHaveText('1');
  await expect(productPage.removeButton).toBeVisible();
});

