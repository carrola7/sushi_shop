var router = new (Backbone.Router.extend({
  routes: {
    "menu": "menuView",
    "menu/:id": "menuItemView"
  },

  initialize: function() {
    this.route(/^\/?$/, "index", function() {
      this.navigate('menu', { trigger: true });
    });
  },
  menuView: function() {
    App.renderHeaderView();
    App.menuView();
  },
  menuItemView: function(id) {
    App.renderItemView(App.dishes.get(+id));
  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on("click", "a[href^='/']", function(event) {
  event.preventDefault();
  router.navigate($(event.currentTarget).attr("href").replace(/^\//, ""), {trigger: true});
});