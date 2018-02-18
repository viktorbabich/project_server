var express = require('express');
var router = express.Router();
const path = require('path');
const appPage = path.join(__dirname, '../index.html');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(appPage, { title: 'Express' });
});

module.exports = router;
