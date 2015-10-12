'use strict';

console.log('Hello world!');

// DOM reference to inject our application content
var $container = $('#container');

var Message = Backbone.Model.extend({
  idAttribute: 'uid'
});

var MessageList = Backbone.Collection.extend({
  model: Message
});

var messageList = new MessageList(messages);

// verify everything works (and faint jshint with the W098 warning)
console.log(messageList.length);

var InboxView = Backbone.View.extend({
  tagName: 'ul',
  className: 'table-view',
  template: _.template($('#inbox-item-tpl').html()),

  render: function () {
    // context bind issue
    var self = this;

    // build the message collection html
    var html = this.collection.map(function (model) {
      return self.template(model.toJSON());
    });

    this.$el.html(html);
    return this;
  }
});

var MessageView = Backbone.View.extend({
  template: _.template($('#message-tpl').html()),

  render: function () {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
})

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

  message: function (mid) {
    var message = messageList.find({uid: mid});
    var view = new MessageView({
      model: message
    });

    $container.html(view.render().$el);
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
