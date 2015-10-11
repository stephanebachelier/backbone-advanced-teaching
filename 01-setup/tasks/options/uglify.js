/*global module*/
'use strict';

module.exports = {
  dist: {
    files: {
      '<%= config.dist %>/scripts/main.js': [
        '<%= config.app %>/scripts/main.js'
      ]
    }
  }
};
