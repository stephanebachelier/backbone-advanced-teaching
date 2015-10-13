define([
  'marionette',
  'templates',
  'router'
],
function (Marionette, templates, router) {
  'use strict';

  var app = new Marionette.Application();

  app.router = router;

  app.on('start', function () {
    console.log('start');
  });

  return app;
});
