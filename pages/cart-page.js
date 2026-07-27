class CartPage {
  constructor(page) {
    this.page = page;
  }

  getProductLink(name) {
    return this.page.getByRole('link', { name });
  }
}

module.exports = { CartPage };