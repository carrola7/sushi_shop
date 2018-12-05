this["JST"] = this["JST"] || {};

this["JST"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <ul>      "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>    <section>      <h3>Your<br>shopping cart</h3>      <p class=\"total\">"
    + container.escapeExpression((helpers.formatPrice || (depth0 && depth0.formatPrice) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p>      <footer>        <a class=\"left empty_cart\" href=\"#\">Empty cart</a>        <a class=\"right checkout\" href=\"/checkout\">Checkout</a>      </footer>    </section>  ";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">          <figure>            <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\"/>          </figure>          <p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " x "
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "        </li>      ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"flex-container\">  "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quantity : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["JST"]["checkout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <tr data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">          <td><img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\"/></td>          <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>          <td>            <span class=\"quantity_modifier plus\">              <i class=\"fas fa-minus\"></i>            </span>            <p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</p>            <span class=\"quantity_modifier minus\">              <i class=\"fas fa-plus\"></i>            </span>          </td>          <td>"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</td>        </tr>      ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"image_top\"></div><section>  <h1>Order Details</h1>  <table>    <thead>      <tr>        <th>Item</th>        <th></th>        <th>Quantity</th>        <th>Price</th>      </tr>    </thead>    <tbody>      "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>  </table>  <p>Total: <span class=\"total\">"
    + container.escapeExpression((helpers.formatPrice || (depth0 && depth0.formatPrice) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</span></p>  <footer>    <a href=\"#\">Cancel Order</a>    <form action=\"/\" method=\"post\">      <input type=\"submit\" value=\"ORDER NOW!\">    </form>  </footer></section><div class=\"image_bottom\"></div>";
},"useData":true});

this["JST"]["dish"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article>  <header>    <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\"\" />    <h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>    <p>"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p>  </header  <footer>    <a class=\"add\" href=\"#\">Add to Cart</a>  </footer></article>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span class=\"count\">"
    + container.escapeExpression(((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"items","hash":{},"data":data}) : helper)))
    + "</span> items      ";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"count\">0</span> items      ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a class=\"logo\" href=\"#\">  <img src=\"/images/logo.png\"/></a><div class=\"cart_summary\">  <a href=\"#\">    <span class=\"left\">Shopping Cart</span><!--    --><span class=\"right\">      "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </span>  </a></div>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header></header><main>  <div id=\"cart\"></div>  <div id=\"item\"></div>  <div id=\"checkout\"></div></main><footer></footer>";
},"useData":true});

this["JST"]["item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"wrapper\">  <section>    <div class=\"nav prev\">      <img src=\"/images/nav-prev.png\" />    </div>    <figure>      <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\"\" />    </figure><!-- --><article>      <a class=\"close\" href=\"#\">+</a>      <h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>      <p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>      <footer>        <h2>"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</h2>        <a class=\"add_cart\" href=\"#\">Add to Cart</a>      </footer>    </article><!--  --><aside>      <h3>Nutritional Information</h3>      <table>        <tbody>            <tr>              <td>Protein</td>              <td>"
    + alias4((helpers.formatDecimalFourPlaces || (depth0 && depth0.formatDecimalFourPlaces) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutriInfo : depth0)) != null ? stack1.protein : stack1),{"name":"formatDecimalFourPlaces","hash":{},"data":data}))
    + "</td>            </tr>            <tr>              <td>Fat (total)</td>              <td>"
    + alias4((helpers.formatDecimalFourPlaces || (depth0 && depth0.formatDecimalFourPlaces) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutriInfo : depth0)) != null ? stack1.fat : stack1),{"name":"formatDecimalFourPlaces","hash":{},"data":data}))
    + "</td>            </tr>            <tr>              <td>Carbohydrate</td>              <td>"
    + alias4((helpers.formatDecimalFourPlaces || (depth0 && depth0.formatDecimalFourPlaces) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutriInfo : depth0)) != null ? stack1.carbs : stack1),{"name":"formatDecimalFourPlaces","hash":{},"data":data}))
    + "</td>            </tr>            <tr>              <td>Energy (kj)</td>              <td>"
    + alias4((helpers.formatDecimalFourPlaces || (depth0 && depth0.formatDecimalFourPlaces) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutriInfo : depth0)) != null ? stack1.energyKj : stack1),{"name":"formatDecimalFourPlaces","hash":{},"data":data}))
    + "</td>            </tr>            <tr>              <td>Energy (kcal)</td>              <td>"
    + alias4((helpers.formatDecimalFourPlaces || (depth0 && depth0.formatDecimalFourPlaces) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutriInfo : depth0)) != null ? stack1.energyKcal : stack1),{"name":"formatDecimalFourPlaces","hash":{},"data":data}))
    + "</td>            </tr>            <tr>              <td>Sugar</td>              <td>"
    + alias4((helpers.formatDecimalFourPlaces || (depth0 && depth0.formatDecimalFourPlaces) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.nutriInfo : depth0)) != null ? stack1.sugar : stack1),{"name":"formatDecimalFourPlaces","hash":{},"data":data}))
    + "</td>            </tr>        </tbody>      </table>    </aside><!--  --><div class=\"nav next\">      <img src=\"/images/nav-next.png\"/>    </div>  </section></div>";
},"useData":true});

this["JST"]["menu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"dishes\"></ul>";
},"useData":true});