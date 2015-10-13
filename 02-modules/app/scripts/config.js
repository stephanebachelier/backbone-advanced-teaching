require.config({
  paths: {
    '#config': '../config',

    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    marionette: '../bower_components/backbone.marionette/lib/core/backbone.marionette',
    text: '../bower_components/text/text',
    json: '../bower_components/requirejs-plugins/src/json',
    'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime.amd',

  },

  deps: ['jquery', 'underscore', 'backbone', 'marionette']
});
