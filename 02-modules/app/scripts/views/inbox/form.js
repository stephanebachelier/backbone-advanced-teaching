define([
  'marionette',
  'templates'
],
function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    tagName: 'form',
    template: templates['inbox/form']
  });
});
