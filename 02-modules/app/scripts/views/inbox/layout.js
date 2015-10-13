define([
  'marionette',
  'templates',
  './message-list',
  './form'
],
function (Marionette, templates, MessageListView, FormView) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: templates['inbox/layout'],

    regions: {
      form: '[data-widget=form]',
      list: '[data-widget=list]'
    },

    onRender: function () {
      this.list.show(new MessageListView({
        collection: this.getOption('collection')
      }));

      this.form.show(new FormView());
    }
  });
});
