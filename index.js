require('dotenv').config();
// console.log(process.env) 
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./modules/product.module');  
const app = express();

app.use(express.json());

// env vars
const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL;


app.get('/', (req, res) => {
  res.send('Hello from Node API server updated')
})
app.get('/api/products', async (req, res)=>{
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})
app.get('/api/product/:id', async (req, res)=>{
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})
app.post('/api/products', async (req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

mongoose.connect(dbUrl)
.then(() => {
  console.log('Connected to MongoDB')
  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
})
.catch(err => console.error('Error connecting to MongoDB', err));