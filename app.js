const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.set helps toset any value globally on our express app 
app.set('view engine', 'pug'); //we want to complile dynamic template with pug engine
app.set('views', 'views'); //this tells where to find the templates

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//registering a parser for parsing the input
app.use(bodyParser.urlencoded({extended: false})); //this internally registers a middleware and calls next to pass to other middleware and does all the nitty gritty code of how we were parsing the request earlier
app.use(express.static(path.join(__dirname, 'public')));//middleware to serve static files i.e css,js,images files present in public

app.use('/admin',adminData.routes);// /admin will act as a filter all the routes starting with /admin will go into adminRoutes and express will omit the /admin from url then match the remaining url with the middleware present in the adminRoutes
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); //we can chain any number of methods before send but send should be the last one the status method is used to set the status code as 404 if want to see then head to network tab of chrom develpoer tools
});

app.listen(3000); // Internally it creates a server and applies listen method so that we need not to write nitty gritty detail of code