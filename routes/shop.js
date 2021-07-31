const express = require('express')
const shopControls = require('../controller/shop')

const routs = express.Router()

routs.get('/', shopControls.getindex)
routs.get('/products', shopControls.products)
routs.get('/cart', shopControls.cart)
routs.get('/orders', shopControls.orders)

module.exports = routs;