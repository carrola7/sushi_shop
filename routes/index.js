var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");
var filePath = path.resolve(path.dirname(__dirname), "data/dishes.json");
var router = express.Router();

function getDishes() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { dishes: getDishes() });
});

module.exports = router;
