var HeaderView = Backbone.View.extend({
  template: App.templates.header,
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.setElement(App.$el.find('header').first());
    this.render();
  }
})