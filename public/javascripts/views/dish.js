var DishView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.dish,
  render: function() {
    var id = this.model.get("id");

    this.$el.attr("id", "dish_" + id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find('ul.dishes'));
  },

  initialize: function() {
    this.render();
    this.model.view = this;
  }
});