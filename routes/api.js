var express = require('express');
var router = express.Router();
const {
	search 
} = require('./site.js')

/* GET home page. */

router.post('/search', search);

module.exports = router;
