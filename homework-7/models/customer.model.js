import mongoose from "mongoose";
import customerSchema from "../mongo_schemas/customer.schema.js";

class CustomerModel {
  mongo_model;

  constructor() {
    this.mongo_model = mongoose.model("Customer", customerSchema);
  }

  async getAllCustomers() {
    const customer = await this.mongo_model.find();
    return customer;
  }

  async getCustomerById(customerId) {
    const customer = await this.mongo_model
      .findById(customerId)
      .populate("customerId");
    return customer;
  }

  async addCustomer(customerData) {
    const customer = new this.mongo_model(customerData);
    const response = await customer.save();
  }

  async updateCustomer(customerId, customerData) {
    const customer = await this.mongo_model.findById(customerId);

    if (!customer) {
      throw new Error(`Customer not found`);
    }

    await this.mongo_model.updateOne(
      { _id: customerId },
      {
        name: customerData.name || customer.name,
        email: customerData.email || customer.email,
        phone: customerData.phone || customer.phone,
        address: customerData.address || customer.address,
      }
    );
  }

  async deleteCustomer(customerId) {
    await this.mongo_model.findByIdAndDelete(customerId);
  }
}

export default CustomerModel;
