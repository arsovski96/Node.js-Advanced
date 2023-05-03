import mongoose from "mongoose";
import prodSchema from "../mongo_schemas/product.schema.js";

class ProductModel {
  mongo_model;

  constructor() {
    this.mongo_model = mongoose.model("Product", prodSchema, "Products");
  }

  async generateProducts(productData) {
    const product = new this.mongo_model(productData);
    const response = await product.save();
  }

  async listProducts() {
    const products = await this.mongo_model.find();

    return products;
  }

  async listProductById(productId) {
    const product = await this.mongo_model.findById(productId);
    return product;
  }

  async searchByName(name) {
    const product = await this.mongo_model.find({ name: { $regex: name } });
    return product;
  }
}

export default ProductModel;
