var ItemView = Backbone.View.extend({
  template: App.templates.item,
  attributes: {
  },
  events: {
    "click a.close": "closeItem",
    "click div.next": "nextItem",
    "click div.prev": "previousItem"
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
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    //this.$el.appendTo(App.$el.find('main'));
    App.$el.find('#item').html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});