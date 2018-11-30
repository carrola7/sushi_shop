this["JST"] = this["JST"] || {};

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

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"logo\" href=\"#\">  <img src=\"images/logo.png\"/></a><div class=\"cart_summary\">  <a href=\"#\">    <span class=\"left\">Shopping Cart</span><!--    --><span class=\"right\">      <span class=\"count\">0</span> items    </span>  </a></div>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header></header><main><div id=\"cart\"></div><div id=\"item\"></div></main><footer></footer>";
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