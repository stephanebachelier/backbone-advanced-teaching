define([
  'marionette'
],
function (Marionette) {
  'use strict';

  var app = new Marionette.Application();

  app.on('start', function () {
    console.log('start');
  });

  return app;
});
