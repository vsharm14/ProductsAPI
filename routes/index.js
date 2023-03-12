const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
router.get('/products',productController.showProducts);
router.post('/products/create',productController.createProduct);
router.get('/products/(:id)',productController.deleteProduct);
router.put('/products/(:id)/update-quantity',productController.updateProduct);
module.exports = router;