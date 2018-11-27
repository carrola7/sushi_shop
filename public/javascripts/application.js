var App = {
  templates: JST,
  $el: $("body"),
  menuView: function() {
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

  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.dishes, "showMenuItem", this.renderItemView)
  },

  renderItemView: function(dish) {
    router.navigate(`menu/${dish.id}`);
    console.log('routed ' + dish.get('id'))
  },
};

Handlebars.registerHelper("formatPrice", function(price) {
  return `$ ${(+price).toFixed(2)}`;
});