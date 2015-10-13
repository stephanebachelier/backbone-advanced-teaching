define([
  'backbone',
  './message'
], function (Backbone, Message) {
  'use strict';

  return Backbone.Collection.extend({
    model: Message
  });
});
