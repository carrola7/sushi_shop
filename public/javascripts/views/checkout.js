var CheckoutView = Backbone.View.extend({
  template: App.templates.checkout,
  events: {
    "click span.quantity_modifier": "changeQuantity",
    "click footer a": "cancelOrder",
    "submit form": "placeOrder"
  },
  changeQuantity: function(event) {
    var id = $(event.target).closest('tr').attr('data-id');
    if (this.isPlusSign(event.target)) {
      this.collection.addItem(this.collection.get(id));
    } else if (this.isMinusSign(event.target)) {
      this.collection.removeItem(this.collection.get(id));
    }
  },
  cancelOrder: function(event) {
    event.preventDefault();
    this.collection.empty();
  },
  placeOrder: function(event) {
    event.preventDefault();
    this.collection.empty();
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }));
  },
  isPlusSign: function(node) {
    return node.className.match('plus');
  }, 
  isMinusSign: function(node) {
    return node.className.match('minus');
  }, 
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cartUpdated", this.render);
  }
});