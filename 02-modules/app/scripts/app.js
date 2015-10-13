define([
  'marionette',
  'models/messages',
  'json!#config/messages.json'
],
function (Marionette, Messages, data) {
  'use strict';

  var app = new Marionette.Application();

  app.on('start', function () {
    console.log('start');

    // messages -> var globale
    var messageList = new Messages(data.messages);
    console.log(messageList.length);
  });

  return app;
});
