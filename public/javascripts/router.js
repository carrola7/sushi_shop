var router = new (Backbone.Router.extend({
  routes: {
    "menu": "menuView",
    "menu/:id": "menuItemView"
  },

  initialize: function() {
    this.route("index.html", "index", function() {
      this.navigate('menu', { trigger: true });
    });
  },
  menuView: function() {
    App.index || App.renderIndexView();
    App.header || App.renderHeaderView();
    App.renderMenuView();
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