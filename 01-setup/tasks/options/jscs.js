/*global module*/
'use strict';

module.exports = {
  options: {
    config: '.jscsrc',
    verbose: true
  },
  js: [
    '<%= config.app %>/scripts/**/*.js',
    '!<%= config.app %>/scripts/vendors/*'
  ],
  grunt: {
    src: ['Gruntfile.js', 'tasks/**/*.js'],
    options: {
      maximumLineLength: null
    }
  }
};
