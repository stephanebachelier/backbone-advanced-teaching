define([
  'marionette',
  'models/messages',
  'json!#config/messages.json',
  'templates'
],
function (Marionette, Messages, data, templates) {
  'use strict';

  var app = new Marionette.Application();

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
