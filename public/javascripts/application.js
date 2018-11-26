var App = {
  templates: JST,
  $el: $("body"),
  indexView: function() {
    this.index = new IndexView();
    this.renderDishes();
  },

  renderDishes: function() {
    this.dishes.each(this.renderDishView);
  },

  renderDishView: function(dish) {
    new DishView({
      model: dish
    });
  },

  renderHeaderView: function() {
    this.header = new HeaderView();
  },

  init: function() {
    this.renderHeaderView();
    this.indexView();
  }
};

Handlebars.registerHelper("formatPrice", function(price) {
  return `$ ${(+price).toFixed(2)}`;
});