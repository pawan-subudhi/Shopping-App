const path = require('path');//for providing absolute path where / will point to the root folder on our OS but not to this project folder so in order to construct to this directory we imported this 

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res, next) => {
    const products = adminData.products;
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')); //utility function which helps to send the response the __dirname points to the routes folder project dir as it is inside a file of route but we want to point to views folder so we use ../
    
    res.render('shop', {prods: products, docTitle: 'My Shop'});//this method will use the default template engine which we have set in app.js direct file name is sufficient as we have set all the views are present where in app.js extension is also not needed as we have mentioned our engine as pug. The second param is the data which we are injecting in the template

}); //if we use use instead of get/post/patch/put/delete use will work for all so we specified type we want in place of use and use doesn't do exact match of url but all other http method

module.exports = router; 