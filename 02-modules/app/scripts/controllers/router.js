define([
  'marionette',
  'views/message',
  'views/inbox/message-searchable-list',
  'resources/messages'
], function (Marionette, MessageView, MessageInboxView, MessagesP) {
  'use strict';

  var container = new Marionette.Region({
    el: document.querySelector('#container')
  });

  var RouteController = Marionette.Object.extend({
    inbox: function () {
      MessagesP.then(function (collection) {
        var view = new MessageInboxView({
          collection: collection
        });

        container.show(view);
      });
    },

    message: function (id) {
      MessagesP.then(function (collection) {
        var view = new MessageView({
          model: collection.find({uid: id})
        });

        container.show(view);
      });
    },

    compose: function () {
      debugger;
    }
  });

  return RouteController;
});
