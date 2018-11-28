var ItemView = Backbone.View.extend({
  template: App.templates.item,
  attributes: {
    id: "item",
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find('main').html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});