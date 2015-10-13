/*global module*/
'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  gruntfile: {
    src: ['Gruntfile.js']
  },
  js: {
    src: [
      '<%= config.app %>/scripts/**/*.js',
      '!<%= config.app %>/scripts/vendors/*'
    ]
  }
};
