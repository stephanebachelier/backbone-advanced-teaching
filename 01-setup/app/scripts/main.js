'use strict';

console.log('Hello world!');

var Router = Backbone.Router.extend({
  routes: {
    inbox: 'inbox',
    compose: 'compose',
    'inbox/:id': 'message'
  },

  inbox: function () {
    debugger;
  },

  compose: function () {
    debugger;
  },

  message: function (mid) {
    debugger;
  }
});

var router = new Router();

var app = new Mn.Application();

app.on('start', function () {
  console.log('Marionette application started');

  // router will intercept route change only when history will have been started
  Backbone.history.start();
});

app.start();
