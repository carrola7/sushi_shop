var MenuView = Backbone.View.extend({
  template: App.templates.index,
  attributes: {
    id: "index"
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.find('main').html(this.$el);
    this.$el.appendTo(App.$el);
  },

  initialize: function() {
    this.render();
  }
})