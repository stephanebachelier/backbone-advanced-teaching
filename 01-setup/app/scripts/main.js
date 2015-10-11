'use strict';

console.log('Hello world!');

// jshint -W117
var messageList = new Backbone.Collection(messages);
// jshint +W117

// verify everything works (and faint jshint with the W098 warning)
console.log(messageList.length);

var Router = Backbone.Router.extend({
  routes: {
    '': 'inbox',
    inbox: 'inbox',
    compose: 'compose',
    'inbox/:id': 'message'
  },

  inbox: function () {
    debugger; // jshint ignore:line
  },

  compose: function () {
    debugger; // jshint ignore:line
  },

  message: function (mid) { // jshint ignore:line
    debugger; // jshint ignore:line
  }
});

var router = new Router();

var app = new Mn.Application();

app.on('start', function () {
  console.log('Marionette application started');
  app.isStarted = true;
});

router.on('route', function () {
  if (!app.isStarted) {
    app.start();
  }
});

Backbone.history.start();
