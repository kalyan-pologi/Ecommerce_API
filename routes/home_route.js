// Imports
const express        = require('express');
const MainController = require('../controllers/home_controller');

// Get Router from Express.
const Router = express.Router();

// Build route for root.
Router.get('/', MainController.homes);

// //add
Router.get('/add', MainController.add);

// Add Product list.
Router.post('/add_product', MainController.addProduct);

//edit
Router.get('/edit/:id', MainController.edit);

// Update product list.
Router.post('/update_product/:id', MainController.updateProduct);

// Delete product list.
Router.get('/delete_product', MainController.deleteProduct);

// Exports the module.
module.exports = Router;