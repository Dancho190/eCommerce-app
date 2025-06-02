const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/ProductController.js');

router.get('/products', getAllProducts);

module.exports = router;