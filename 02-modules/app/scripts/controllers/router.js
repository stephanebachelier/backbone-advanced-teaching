define([
  'marionette',
  'views/message',
  'resources/messages'
], function (Marionette, MessageView, MessagesP) {
  'use strict';

  var $container = $('#container');

  var RouteController = Marionette.Object.extend({
    inbox: function () {
      debugger;
    },

    message: function (id) {
      MessagesP.then(function (collection) {
        var view = new MessageView({
          model: collection.find({uid: id})
        });

        $container.html(view.render().el);
      });
    },

    compose: function () {
      debugger;
    }
  });

  return RouteController;
});
