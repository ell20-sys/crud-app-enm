// Automatically loading .env variables with dotenv
require('dotenv').config();

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Import modules
const Product = require('./modules/product.module');

// Middleware
app.use(express.json());

// Environment variables
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

// Define routes
// Root route
app.get('/', (req, res) => {
  res.send('Hello from Node API server updated');
});

// Retrieve all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Retrieving a single product by ID
app.get('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Creating a new product
app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Updating a product
app.put('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product){
      return res.status(404).json({message: "Product not found"})
    }
    const updatedProdcut = await Product.findById(id);
    res.status(200).json(updatedProdcut);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Connecting to MongoDB and starting the server
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB', err));
