var App = {
  templates: JST,
  $el: $("body"),
  renderMenuView: function() {
    this.menu = new MenuView();
    this.renderDishes();
    this.bindEvents();
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

  renderIndexView: function() {
    this.index = new IndexView();
  },

  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.dishes, "showMenuItem", this.renderItemView)
  },

  renderItemView: function(dish) {
    router.navigate(`menu/${dish.id}`);
    new ItemView({
      model: dish
    });
  },
};

Handlebars.registerHelper("formatPrice", function(price) {
  return `$ ${(+price).toFixed(2)}`;
});

Handlebars.registerHelper("formatDecimalFourPlaces", function(num) {
  return `${(+num).toFixed(4)}`
})