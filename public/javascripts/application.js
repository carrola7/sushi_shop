var App = {
  templates: JST,
  $el: $("body"),
  renderMenuView: function() {
    $('#item').hide();
    $('#checkout').hide();
    this.menu = new MenuView();
    this.renderDishes();
    this.bindEvents();
    router.navigate('menu');
    this.renderCheckoutView();
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

  renderCheckoutView: function() {
    $('#menu').hide();
    $('#item').hide();
    router.navigate('checkout');
    this.checkout = new CheckoutView({
      el: $('#checkout').get(0),
      collection: this.cart,
    });
    this.checkout.$el.show();
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
    this.cart.addItem(new Dish(
      {
          "id": 19,
          "name": "Yaki Udon",
          "price": 11.50,
          "image": "/images/yaki-udon.jpg",
          "description": "Udon noodles with chicken, king prawns and vegetables.",
          "nutriInfo": {
            "protein": 1.7697,
            "fat": 0.2534,
            "carbs": 6.9919,
            "energyKj": 7.508,
            "energyKcal": 1.7945,
            "sugar": 0.1798
          }
        }
    ));

    this.cart.addItem(new Dish(
        {
          "id": 18,
          "name": "Tori Katsu",
          "price": 11,
          "image": "/images/tori-katsu.jpg",
          "description": "Pan-fried chicken breast with yasai salad.",
          "nutriInfo": {
            "protein": 1.0267,
            "fat": 2.2143,
            "carbs": 6.1597,
            "energyKj": 17.8688,
            "energyKcal": 4.2708,
            "sugar": 0.0161
          }
        }
    ));

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