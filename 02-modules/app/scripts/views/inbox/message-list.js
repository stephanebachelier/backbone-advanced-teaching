define([
  'marionette',
  './message-item'
],
function (Marionette, MessageItemView) {
  'use strict';

  return Marionette.CollectionView.extend({
    childView: MessageItemView,

    // si collection vide
    // emptyView: MessageEmptyView
  });
});
