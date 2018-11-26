var path = require("path");
var Dishes = require(path.resolve(path.dirname(__dirname), "modules/dishes"));

/* GET menu page. */
module.exports = function(router) {
  router.get('/menu', function(req, res, next) {
    res.render('index', { 
      dishes: Dishes.get() 
    });
  });
};