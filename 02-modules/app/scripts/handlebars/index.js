define([
  'handlebars.runtime',
  './last-updated'
], function (Handlebars, lastUpdated) {
  'use strict';

  Handlebars.registerHelper('lastUpdated', lastUpdated);

  return Handlebars;
});
