var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');
var csrf = require('csurf');
var passport = require('passport');

var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection)

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('Here');
	Product.find(function(err, docs){
		console.log('here 2');
		var productChunks = [];
		var chunkSize = 3;
		console.log('here 3');
		for(var i = 0; i < docs.length; i += chunkSize){
			console.log('here 4');
			productChunks.push(docs.slice(i, i + chunkSize, console.log('here 5')));
		}
		res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
	});
});

router.get('/user/signup', function(req, res, next){
	res.render('user/signup', {csrfToken: req.csrfToken()})
});

router.post('/user/signup', passport.authenticate('local-signup', {
	successRedirect: '/user/profile',
	failureRedirect: '/user/signup',
	failureFlash: true
}));

router.get('profile', function(req, res, next) {
	res.render('user/profile');
});

module.exports = router;
