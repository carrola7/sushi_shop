var CartView = Backbone.View.extend({
  template: App.templates.cart,
  events: {
    "click a.empty_cart": "emptyCart",
    "click a.checkout": "checkout",
  },
  emptyCart: function(event) {
    event.preventDefault();
    this.collection.trigger("emptyCart");
    this.$el.slideUp();
  },
  render: function() {
    // if(this.empty()) {
    //   this.$el.hide();
    // }
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.total,
      quantity: this.collection.quantity,
    }));
    this.$el.appendTo("#cart");
    if (this.notEmpty()) {
      this.$el.slideDown();
    }
  },
  checkout: function() {
    App.renderCheckout();
  },
  notEmpty: function() {
    return this.collection.length > 0;
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cartUpdated", this.render);
  }
});