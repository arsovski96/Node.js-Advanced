import { Router } from "express";
import ProductsController from "../controllers/products.controller.js";

const productRouter = Router();
const productsController = new ProductsController();

productRouter.post("/", async (req, res) => {
  const { name, description, price, reviews, rating, comment } = req.body;

  const productData = {
    name: name,
    description: description,
    price: price,
    reviews: reviews,
    rating: rating,
    comment: comment,
  };
  await productsController.generateProducts(productData);
  res.status(201).send({ message: "New product is created" });
});

productRouter.get("/", async (req, res) => {
  const products = await productsController.listProducts();
  res.send(products);
});

productRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await productsController.listProductById(id);
  res.send(product);
});

productRouter.post("/", async (req, res) => {
  const query = req.query.name;
  const product = await productsController.searchByName(query);
  res.send(product);
});

export default productRouter;
