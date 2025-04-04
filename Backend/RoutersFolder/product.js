const express = require('express');
const productController = require('../controller/product.js')
const router= express.Router()

router
	.get('/',productController.getAllProducts)
	.get('/:id',productController.getProduct)
	.post('/',productController.addProduct)
	.put('/:id',productController.replaceProduct)
	.patch('/:id',productController.updateProduct)
	.delete('/:id',productController.deleteProduct)

exports.router=router;