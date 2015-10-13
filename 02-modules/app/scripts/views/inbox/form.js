define([
  'marionette',
  'templates'
],
function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    tagName: 'form',
    template: templates['inbox/form'],

    ui: {
      input: '[name=search]'
    },

    events: {
      submit: 'onFormSubmited'
    },

    onFormSubmited: function (e) {
      e.preventDefault(); // stop page from refreshing
      e.stopPropagation(); // stop from bubbling; -> phase 3

      var input = this.ui.input.val();

      // special dedicace pour IE ~8
      return false;
    }
  });
});
