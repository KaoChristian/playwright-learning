class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async openProduct(testId) {
    await this.page.getByTestId(testId).click();
  }

  async addToCart(testId) {
    await this.page.getByTestId(testId).click();
  }

  async goToCart() {
   await this.page.getByTestId('shopping-cart-link').click();
  }
}

module.exports = { InventoryPage };