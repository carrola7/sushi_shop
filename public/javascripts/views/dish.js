var DishView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.dish,
  events: {
    "click article > header" : "showMenuItem",
    "click a.add": "addToCart"
  },
  render: function() {
    var id = this.model.get("id");

    this.$el.attr("id", "dish_" + id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find('ul.dishes'));
  },
  showMenuItem: function() {
    this.model.collection.trigger("showMenuItem", this.model);
  },
  addToCart: function(event) {
    event.preventDefault();
    this.model.collection.trigger("addToCart", this.model);
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  },
});