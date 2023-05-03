import ProductModel from "../models/products.model.js";

const productModel = new ProductModel();

class ProductsController {
  async generateProducts(productData) {
    await productModel.generateProducts(productData);
  }

  async listProducts() {
    const products = await productModel.listProducts();
    return products;
  }

  async listProductById(productId) {
    const product = await productModel.listProductById(productId);
    return product;
  }

  async searchByName(name) {
    const product = await productModel.searchByName(name);
    return product;
  }
}

export default ProductsController;
