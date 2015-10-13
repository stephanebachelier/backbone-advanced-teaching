define([
  'marionette',
  'templates',
  './message-item'
],
function (Marionette, templates, MessageItemView) {
  'use strict';

  return Marionette.CompositeView.extend({
    template: templates['inbox/searchable-list'],

    childView: MessageItemView,
    childViewContainer: '[data-widget=list]'
    // si collection vide
    // emptyView: MessageEmptyView
  });
});
