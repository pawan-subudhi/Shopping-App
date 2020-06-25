const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();//this router is like a mini express app which is tied to all other express app or pluggable into other express app

const products = [];

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product'});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/'); //redirecting
});
 

exports.routes = router; //exporting router object to wherever required can import this object
exports.products = products;