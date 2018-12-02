var CheckoutView = Backbone.View.extend({
  template: App.templates.checkout,
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cartUpdated", this.render);
  }
});