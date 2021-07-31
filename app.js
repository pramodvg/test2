var express = require('express')
var app = express()
const path = require('path');


app.set('view engine', 'ejs')
app.set('views', 'views')


var shopRoutes = require('./routes/shop')
var adminRoutes = require('./routes/admin')

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use((req,res)=>{
    res.render('404',{
        pageTitle: 'error 404',
        path:''
    })
})


app.listen(1000)
