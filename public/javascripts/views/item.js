var ItemView = Backbone.View.extend({
  template: App.templates.item,
  attributes: {
  },
  events: {
    "click a.close": "closeItem",
    "click div.next": "nextItem",
    "click div.prev": "previousItem",
    "click a.add_cart": "addToCart"
  },
  closeItem: function(event) {
    event.preventDefault();
    this.model.collection.trigger("closeItem");
  },
  nextItem: function(event) {
    this.model.collection.trigger("nextItem", this.model);
  },
  previousItem: function() {
    this.model.collection.trigger("previousItem", this.model);
  },
  addToCart: function(event) {
    event.preventDefault();
    this.model.collection.trigger("addToCart", this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.show();
  },
  reRender(dish, direction) {
    this.model = dish;
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.find('div.wrapper').hide();
    if (direction) {
      this.slide(direction);
    } else {
      this.$el.show();
      $('#item').find('div.wrapper').show();
    }
  },
  slide: function(direction) {
    this.$el.find('div.wrapper').toggle("slide", {
      direction: direction,
      duration: 100
    });
  },
  initialize: function() {
    this.render();
  }
});