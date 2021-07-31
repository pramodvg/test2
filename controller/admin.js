const Products = require('../model/product')

exports.getAddProducts = (req, res) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

exports.postAddProduct = (req, res) => {
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const description = req.body.description
    const price = req.body.price
    const product = new Products(title, imageUrl, description, price)
    product.save()
    res.redirect('/')
}

exports.getproducts = (req, res) => {
    Products.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        })
    })
}

exports.deleteProduct = (req,res)=>{
    console.log(">>>>>>>>")
    console.log('A Book')
    Products.deleteProduct('A Book',callback=>{
        res.redirect('/')
    })

}