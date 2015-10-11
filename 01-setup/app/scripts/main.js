'use strict';

console.log('Hello world!');

// DOM reference to inject our application content
var $container = $('#container');

// jshint -W117
var messageList = new Backbone.Collection(messages);
// jshint +W117

// verify everything works (and faint jshint with the W098 warning)
console.log(messageList.length);

var InboxView = Backbone.View.extend({
  tagName: 'ul',

  render: function () {
    this.$el.html('<p>TOTO</p>');
    return this;
  }
});

var Router = Backbone.Router.extend({
  routes: {
    '': 'inbox',
    inbox: 'inbox',
    compose: 'compose',
    'inbox/:id': 'message'
  },

  inbox: function () {
    var view = new InboxView({
      collection: messageList
    });
    $container.html(view.render().$el);
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
