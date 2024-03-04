const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello from Node API server updated')
})

mongoose.connect('mongodb+srv://<dbusername>:<dbpassword>.rhpmdya.mongodb.net/<clusterName>?retryWrites=true&w=majority&appName=<appName>')
.then(() => {
  console.log('Connected to MongoDB')
  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
})
.catch(err => console.error('Error connecting to MongoDB', err));