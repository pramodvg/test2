const express = require('express')
const adminProduct = require('../controller/admin')
const routes = express.Router()

routes.get('/add-product',adminProduct.getAddProducts)
routes.get('/products',adminProduct.getproducts)
routes.post('/add-product',adminProduct.postAddProduct)
routes.post('/delete-product',adminProduct.deleteProduct)

module.exports = routes