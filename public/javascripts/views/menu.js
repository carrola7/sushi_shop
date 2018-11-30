var MenuView = Backbone.View.extend({
  template: App.templates.menu,
  attributes: {
    id: "menu"
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.appendTo(App.$el.find('main'));
    //App.$el.find('main').html(this.$el);
  },

  initialize: function() {
    this.render();
  }
})