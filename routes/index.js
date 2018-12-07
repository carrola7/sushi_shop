var path = require("path");
var Dishes = require(path.resolve(path.dirname(__dirname), "modules/dishes"));

/* GET home page. */
module.exports = function(router) {
  router.get('/index.html', function(req, res, next) {
    res.render('index', { 
      dishes: Dishes.get() 
    });
  });
};
