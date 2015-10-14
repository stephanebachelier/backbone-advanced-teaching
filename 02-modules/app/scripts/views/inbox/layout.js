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

    childEvents: {
      'search:text': function (childView, msg) {
        var candidates = this.collection.filter(function (model)  {
          return model.attributes.subject.match(msg.search) || model.attributes.body.match(msg.search);
        });

        this.collection.reset(candidates);
      }
    },

    onRender: function () {
      this.list.show(new MessageListView({
        collection: this.getOption('collection')
      }));

      this.form.show(new FormView());
    }
  });
});
