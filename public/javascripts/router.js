var router = new (Backbone.Router.extend({
  routes: {
    "menu": "menuView"
  },

  initialize: function() {
    this.route(/^\/?$/, "index", this.menuView);
  },
  menuView: function() {
    App.renderHeaderView();
    App.indexView();
  }
}))();

Backbone.history.start({
  pushState: true
});

$(document).on("click", "a[href^='/']", function(event) {
  event.preventDefault();
  router.navigate($(event.currentTarget).attr("href").replace(/^\//, ""), {trigger: true});
});