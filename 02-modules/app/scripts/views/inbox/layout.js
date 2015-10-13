define([
  'marionette',
  'templates',
  './message-list'
],
function (Marionette, templates, MessageListView) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: templates['inbox/layout'],

    regions: {
      form: 'form',
      list: '[data-widget=list]'
    },

    onRender: function () {
      this.list.show(new MessageListView({
        collection: this.getOption('collection')
      }));
    }
  });
});
