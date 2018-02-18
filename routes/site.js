const path = require('path');
const data = require('../public/data/kladr.json');

module.exports = {
	search: function(req, res, next) {
		let query = req.body.data;
		let result = data.filter(
	    item => {
	    	let nQuery = query.replace(/([\\\(\)])/, '\\$1');
	    	let regex = new RegExp(`(^("|')?${nQuery})|(\\s("|')?${nQuery})`, 'gi');
	    	return regex.test(item['City'])
	    }
		);
		switch(Math.round(0.5 + Math.random() * 5)) {
			case 1: {
				res.status(500).send('error');
				break;
			};
			case 2: {
				setTimeout(() => {
					res.json(result);
				}, 1000);
				break;
			};
			default: {
				res.json(result);
			}
		}
	}
};