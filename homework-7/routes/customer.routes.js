import e, { Router } from "express";
import CustomerController from "../controllers/customer.controller.js";

const customerController = new CustomerController();
const customerRouter = Router();

//GET ALL CUSTOMERS
customerRouter.get("/", async (req, res) => {
  const customer = await customerController.getAllCustomers();

  res.send(customer);
});

//ADD CUSTOMER
customerRouter.post("/", async (req, res) => {
  const { name, email, phone, address } = req.body;

  const customerData = {
    name: name,
    email: email,
    phone: phone,
    address: address,
  };

  await customerController.addCustomer(customerData);
  res.status(201).send({ message: "New customer added" });
});

//GET CUSTOMER BY ID
customerRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const customer = await customerController.getCustomerById(id);
  res.send(customer);
});

//UPDATE CUSTOMER
customerRouter.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { name, email, phone } = req.body;

  const customerData = {
    name: name,
    email: email,
    phone: phone,
  };

  try {
    await customerController.updateCustomer(id, customerData);
    res.send({ message: `Customer with id: ${id} was updated.` });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

// DELETE CUSTOMER
customerRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await customerController.deleteCostumer(id);

  res.send(`Product with id: ${id} was deleted.`);
});
export default customerRouter;
