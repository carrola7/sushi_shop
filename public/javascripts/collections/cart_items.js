var CartItems = Backbone.Collection.extend({
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);

    return this;
  },
  getTotal: function() { return this.total; },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b) {
      return a + b.quantity;
    }, 0);

    return this;
  },
  getQuantity: function() { return this.quantity; },
  readStorage: function() {
    var storedCart = JSON.parse(localStorage.getItem("cart"));
    this.reset(storedCart);
    this.setTotal().setQuantity().updateStorage();
  },
  updateStorage: function() {
    localStorage.setItem("cart", JSON.stringify(this.toJSON()));
  },
  addItem: function(item) {
    var existing = this.get(item.get("id"));

    if (existing) {
      existing.set("quantity", existing.get("quantity") + 1);
    } else {
      existing = item.clone();
      existing.set("quantity", 1);
      this.add(existing);
    }
    this.setTotal().setQuantity().updateStorage();
    this.trigger("cartUpdated");
  },
  removeItem: function(item) {
    var existing = this.get(item.get("id"));

    if (existing) {
      if (existing.get("quantity") === 1) {
        this.remove(existing);
      } else {
        existing.set("quantity", existing.get("quantity") - 1);
      }
      this.setTotal().setQuantity();
      this.trigger("cartUpdated");
    } 
  },
  isNotEmpty() {
    return this.length > 0;
  },
  empty: function() {
    this.reset();
    this.setTotal().setQuantity();
    this.trigger("cartEmptied");
  },
  initialize: function() {
    this.readStorage();
    this.on("emptyCart", this.empty);
  },
})