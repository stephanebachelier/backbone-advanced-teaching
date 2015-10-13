define([
  'marionette',
  'models/messages'
],
function (Marionette, Messages) {
  'use strict';

  var app = new Marionette.Application();

  app.on('start', function () {
    console.log('start');

    // messages -> var globale
    var messageList = new Messages(messages);
    console.log(messageList.length);
  });

  return app;
});
