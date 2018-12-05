var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  events: {
    "click div.cart_summary a": "renderMenu"
  },
  render: function() {
    this.$el.html(this.template({items: this.collection.getQuantity()}));
  },
  renderMenu: function(event) {
    event.preventDefault();
    App.showMenuView();
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