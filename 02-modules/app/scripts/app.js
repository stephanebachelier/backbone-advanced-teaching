define([
  'marionette',
  'models/messages',
  'json!#config/messages.json',
  'templates',
  'router'
],
function (Marionette, Messages, data, templates, router) {
  'use strict';

  var app = new Marionette.Application();

  app.router = router;

  app.on('start', function () {
    console.log('start');

    // messages -> var globale
    var messageList = new Messages(data.messages);
    console.log(messageList.length);

    var html = messageList.toJSON().map(function (message) {
      return templates["message-item"](message);
    })
    $('#container').html(html);
  });

  return app;
});
