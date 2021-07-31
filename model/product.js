const fs = require('fs')
const path = require('path')
const { title } = require('process')


const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const getProductFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent))
        }
    })
}

var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arguments.length > 2 && arr[i][attr] === value)) {

            arr.splice(i, 1);

        }
    }
    return arr;
}

module.exports = class Product {

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductFromFile(product => {
            product.push(this)
            fs.writeFile(p, JSON.stringify(product), err => {
                console.log(err);
            })
        })
    }

    static deleteProduct(idTitle,callback) {
        console.log(idTitle+">>>>>>>>")
        getProductFromFile(products => {
            const product = removeByAttr(products, 'title', idTitle);
            fs.writeFile(p, JSON.stringify(product), err => {
                callback()
                console.log(err);
            })
        });
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
    }
}
