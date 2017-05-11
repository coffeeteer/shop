var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('Here');
	Product.find(function(err, docs){
		console.log('here 2');
		var productChunks = [];
		chunkSize = 3;
		console.log('here 3');
		for(var i = 0; i < docs.length; i += chunkSize){
			console.log('here 4');
			productChunks.push(docs.slice(i, i + chunkSize, console.log('here 5')));
		}
		res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
	});
});

module.exports = router;
