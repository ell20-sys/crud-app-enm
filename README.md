# CRUD App with MongoDB, Express, and Node.js

## Overview
This repository hosts a simple CRUD (Create, Read, Update, Delete) API built with MongoDB, Express, and Node.js. It provides endpoints to manage products, including retrieving all products, retrieving a single product, creating a new product, updating an existing product, and deleting a product.

## Stack
- MongoDB: A NoSQL database used for data storage.
- Express: A minimalist web framework for Node.js used to build the RESTful API.
- Node.js: A JavaScript runtime environment used to execute server-side code.

## Installation
1. Clone the repository:
```git clone https://github.com/ell20-sys/crud-app-enm.git```

2. Navigate to the project directory:
```cd crud-app-enm```

3. Install dependencies:
```npm install```


## Configuration
- MongoDB Connection: Ensure you have MongoDB installed locally or set up a MongoDB Atlas cluster. Update the connection string in the `.env` file with your MongoDB URI.
- Port Configuration: The default port for the server is 3000. You can change it by modifying the `PORT` variable in the `.env` file.

## Usage
### Starting the server

- Production level:
```npm run serve```

- Development level:
```npm run dev```


## API Endpoints
- **GET /api/products**: Retrieve all products.
- **GET /api/products/:id**: Retrieve a single product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update an existing product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.

## Directory Structure
- `index.js`: Entry point of the application.
- `models/product.model.js`: Defines the MongoDB schema for the Product model.
- `controllers/product.controller.js`: Implements CRUD operations for managing products.
- `routes/product.route.js`: Defines API endpoints for product-related operations.

## Environment Variables
- **PORT**: Port number for the server. Default is 3000.
- **DATABASE_URL**: MongoDB connection string.

## Contributing
Contributions are welcome. Feel free to open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).



