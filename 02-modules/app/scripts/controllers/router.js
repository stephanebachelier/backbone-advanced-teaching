define([
  'marionette',
  'views/message',
  'views/inbox/message-list',
  'resources/messages'
], function (Marionette, MessageView, MessageInboxView, MessagesP) {
  'use strict';

  var $container = $('#container');

  var RouteController = Marionette.Object.extend({
    inbox: function () {
      MessagesP.then(function (collection) {
        var view = new MessageInboxView({
          collection: collection
        });

        $container.html(view.render().el);
      });
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
