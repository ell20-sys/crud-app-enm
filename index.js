// Automatically loading .env variables with dotenv
require("dotenv").config();

// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Import modules
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

// Middleware
app.use(express.json());
// "Added middleware to parse incoming URL-encoded data using Express's built-in 'express.urlencoded()' function with extended option set to 'false' for improved security and performance."
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use("/api/products", productRoute);

// Environment variables
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;


app.get("/", (req, res) => {
  res.send("Hello from Node API server updated");
});

// Connecting to MongoDB and starting the server
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB", err));
