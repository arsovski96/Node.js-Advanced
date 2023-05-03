import CustomerModel from "../models/customer.model.js";

const customerModel = new CustomerModel();

class CustomerController {
  async getAllCustomers(req, res) {
    const customers = await customerModel.getAllCustomers();
    return customers;
  }

  async getCustomerById(customerId) {
    const customer = await customerModel.getCustomerById(customerId);
    return customer;
  }

  async addCustomer(customerData) {
    await customerModel.addCustomer(customerData);
  }
  async updateCustomer(customerId, customerData) {
    await customerModel.updateCustomer(customerId, customerData);
  }
  async deleteCostumer(customerId) {
    await customerModel.deleteCustomer(customerId);
  }
}
export default CustomerController;
