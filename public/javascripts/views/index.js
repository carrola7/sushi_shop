var IndexView = Backbone.View.extend({
  template: App.templates.index,
  render: function() {
    App.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});