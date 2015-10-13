define(['handlebars/index'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["inbox/form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input type=\"search\" name=\"search\" placeholder=\"Search\" >";
},"useData":true});

this["JST"]["inbox/layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div data-widget=\"form\"><input type=\"search\" name=\"search\" placeholder=\"Search\" ></div><div data-widget=\"list\"></div>";
},"useData":true});

this["JST"]["inbox/message-item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"table-view-cell media\"><a class=\"navigate-right\" href=\"#inbox/"
    + alias3(((helper = (helper = helpers.uid || (depth0 != null ? depth0.uid : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uid","hash":{},"data":data}) : helper)))
    + "\"><img class=\"media-object pull-left\" src=\""
    + alias3(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "\"><div class=\"media-body\">"
    + alias3(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"subject","hash":{},"data":data}) : helper)))
    + "<p>"
    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper)))
    + "</p></div></a></li>";
},"useData":true});

this["JST"]["inbox/searchable-list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form><input class=\"content-padded\" type=\"search\" placeholder=\"Search\"></form><div data-widget=\"list\"></div>";
},"useData":true});

this["JST"]["message"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form class=\"input-group\"><div class=\"input-row\"><label>From</label><input type=\"text\" readonly value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"input-row\"><label>Email</label><input type=\"email\" readonly value=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"input-row\"><label>Date</label><input type=\"text\" readonly value=\""
    + alias3(((helper = (helper = helpers.sent || (depth0 != null ? depth0.sent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sent","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"input-row\"><label>Subject</label><input type=\"text\" readonly value=\""
    + alias3(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"subject","hash":{},"data":data}) : helper)))
    + "\"></div><textarea rows=\"5\" readonly>"
    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper)))
    + "</textarea></form>";
},"useData":true});

return this["JST"];

});