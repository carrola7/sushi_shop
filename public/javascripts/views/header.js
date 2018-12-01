var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template({items: this.collection.getQuantity()}));
  },
  bindEvents: function() {
    this.collection.on("cartUpdated", this.render.bind(this));
    this.collection.on("cartEmptied", this.render.bind(this));

  },
  initialize: function() {
    this.setElement(App.$el.find('header').first());
    this.render();
    this.bindEvents();
  }
})