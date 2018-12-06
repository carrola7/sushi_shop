var App = {
  templates: JST,
  $el: $("body"),
  renderMenuView: function() {
    this.cart || $('#cart').hide();
    this.menu = new MenuView();
    this.showMenuView();
    this.renderDishes();
    this.bindEvents();
  },
  showMenuView: function() {
    $('#item').hide();
    $('#checkout').hide();
    $('#menu').show();
    
    this.cart
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
    this.showCart();
  },

  renderIndexView: function() {
    this.index = new IndexView();
  },

  renderCheckoutView: function() {
    $('#menu').hide();
    $('#item').hide();
    $('#cart').hide();
    router.navigate('checkout');
    this.checkout || this.createCheckoutView() 
    this.checkout.$el.show();
  },

  createCheckoutView: function() {
    this.checkout = new CheckoutView({
      el: $('#checkout').get(0),
      collection: this.cart,
    });
  },

  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.dishes, "showMenuItem", this.renderItemView);
    this.listenTo(this.dishes, "closeItem", this.closeItemView);
    this.listenTo(this.dishes, "nextItem", this.showNextItem);
    this.listenTo(this.dishes, "previousItem", this.showPreviousItem);
    this.listenTo(this.dishes, "addToCart", this.addToCart);
    this.listenTo(this.cart, "cartEmptied", this.showMenuView)
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
  renderItemView: function(dish, direction) {
    this.menu.$el.hide();
    router.navigate(`menu/${dish.id}`);
    if (!this.item) {
      this.item = new ItemView({
          el: $('#item').get(0),
          model: dish
        });
    } else {
      this.reRenderItemView(dish);
    }
  },
  reRenderItemView: function(dish, direction) {
    router.navigate(`menu/${dish.id}`);
    this.item.reRender(dish, direction);
  },
  showCart: function() {
    if (this.cart && this.cart.isNotEmpty()) {
      $('#cart').show();
    }
  },
  showNextItem: function(dish) {
    this.reRenderItemView(this.dishes.get(dish.get('id') + 1), "right");
  },
  showPreviousItem: function(dish) {
    this.reRenderItemView(this.dishes.get(dish.get('id') - 1), "left");
  },
  addToCart: function(dish) {
    this.cart || this.createCart();
    this.cart.addItem(dish);
  },
};

Handlebars.registerHelper("formatPrice", function(price) {
  return `$${(+price).toFixed(2)}`;
});

Handlebars.registerHelper("formatDecimalFourPlaces", function(num) {
  return `${(+num).toFixed(4)}`
})