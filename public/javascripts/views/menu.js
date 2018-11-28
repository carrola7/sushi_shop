var MenuView = Backbone.View.extend({
  template: App.templates.menu,
  attributes: {
    id: "menu"
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.find('main').html(this.$el);
    //this.$el.appendTo(App.$el);
    //console.log(this.$el);
  },

  initialize: function() {
    this.render();
  }
})