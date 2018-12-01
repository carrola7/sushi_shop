var App = {
  templates: JST,
  $el: $("body"),
  renderMenuView: function() {
    $('#item').hide();
    this.menu = new MenuView();
    this.renderDishes();
    this.bindEvents();
    router.navigate('menu');
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
    this.createCart();
    this.header = new HeaderView({
      collection: this.cart
    });
  },

  renderIndexView: function() {
    this.index = new IndexView();
  },

  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.dishes, "showMenuItem", this.renderItemView);
    this.listenTo(this.dishes, "closeItem", this.closeItemView);
    this.listenTo(this.dishes, "nextItem", this.showNextItem);
    this.listenTo(this.dishes, "previousItem", this.showPreviousItem);
    this.listenTo(this.dishes, "addToCart", this.addToCart);
  },
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      el: $("#cart").get(0),
      collection: this.cart
    });
  },
  closeItemView: function() {
    $('#item').hide();
    this.menu.$el.show();
    router.navigate('menu');
  },
  renderItemView: function(dish) {
    this.menu.$el.hide();
    router.navigate(`menu/${dish.id}`);
    this.item = new ItemView({
      model: dish
    });
    $('#item').show();
  },
  showNextItem: function(dish) {
    this.renderItemView(this.dishes.get(dish.get('id') + 1));
  },
  showPreviousItem: function(dish) {
    this.renderItemView(this.dishes.get(dish.get('id') - 1));
  },
  addToCart: function(dish) {
    this.cart.addItem(dish);
  },
};

Handlebars.registerHelper("formatPrice", function(price) {
  return `$${(+price).toFixed(2)}`;
});

Handlebars.registerHelper("formatDecimalFourPlaces", function(num) {
  return `${(+num).toFixed(4)}`
})