const Products = require('../model/product')

exports.getindex = (req, res) => {
    Products.fetchAll(products => {
        res.render('shop/index', { prods: products, pageTitle: 'shop page', path: '/' })

    })
}

exports.cart = (req, res) => {
    res.render('shop/cart', {
        pageTitle: 'My Cart', path: '/cart'
    })
}

exports.products = (req, res) => {
    Products.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products, pageTitle: 'My Cart', path: '/products'
        })
    })
}

exports.orders = (req, res) => {
    res.render('shop/orders', {
        pageTitle: 'My orders', path: '/orders'
    })
}