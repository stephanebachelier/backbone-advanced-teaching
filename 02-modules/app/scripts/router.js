define([
  'backbone',
  'marionette',
  'controllers/router'
],
function (Backbone, Marionette, Controller) {
  'use strict';

  var AppRouter = Marionette.AppRouter.extend({
    appRoutes: {
      inbox: 'inbox',
      'inbox/:id': 'message',
      compose: 'compose'
    }
  });

  var router = new AppRouter({
    controller: new Controller()
  });

  Backbone.history.start();

  return router;
});
