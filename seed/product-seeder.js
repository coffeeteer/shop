var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');

var products = [
	//Product 1
	new Product({
		imagePath: 'https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_960_720.jpg',
		title: 'Random Dice',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: 12
	}),

	//Product 2
	new Product({
		imagePath: 'https://cdn.pixabay.com/photo/2016/09/10/11/42/quadrocopter-1658967_960_720.png',
		title: 'Drone',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: 111
	}),

	//Product 3
	new Product({
		imagePath: 'https://cdn.pixabay.com/photo/2013/11/11/11/18/toy-208714_960_720.jpg',
		title: 'Weird Bunny',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: 15
	}),

	// Product 4
	new Product({
		imagePath: 'https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_960_720.jpg',
		title: 'Random Dice',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: 12
	}),

	// Product 5
	new Product({
		imagePath: 'https://cdn.pixabay.com/photo/2016/09/10/11/42/quadrocopter-1658967_960_720.png',
		title: 'Drone',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: 111
	}),

	// Product 6
	new Product({
		imagePath: 'https://cdn.pixabay.com/photo/2013/11/11/11/18/toy-208714_960_720.jpg',
		title: 'Weird Bunny',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		price: 15
	}),
];

var done = 0;
for(var i = 0; i < products.length; i++){
	products[i].save(function(err, result) {
		done++;
		if(done === products.length){
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}
