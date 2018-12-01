var CartView = Backbone.View.extend({
  template: App.templates.cart,
  events: {
    "click a.empty_cart": "emptyCart",
  },
  emptyCart: function(event) {
    event.preventDefault();
    this.collection.trigger("emptyCart");
    this.$el.slideUp();
  },
  render: function() {
    if(this.collection.length === 1) {
      this.$el.hide();
    }
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.total,
      quantity: this.collection.quantity,
    }));
    this.$el.appendTo("#cart");
    this.$el.slideDown();
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cartUpdated", this.render);
  }
});