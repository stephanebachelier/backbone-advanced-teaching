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

  render: function () {
    // build the message collection html
    var html = this.collection.map(function (model) {
      var data = model.toJSON();
      return '<li class="table-view-cell media"><a class="navigate-right" href="#inbox/' + model.id + '"><img class="media-object pull-left" src="' + data.avatar + '"><div class="media-body">' + data.subject + '<p>' + data.body + '</p></div></a></li>';
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
