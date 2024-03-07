const express = require("express");
// const Product = require('../models/product.model');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// Getting all products
router.get("/", getProducts);
// Getting a single product
router.get("/:id", getProduct);
// Creating a product
router.post("/", createProduct);
// Updating a product
router.put("/:id", updateProduct);
//Deleting a product
router.delete("/:id", deleteProduct);

module.exports = router;
