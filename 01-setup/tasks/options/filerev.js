/*global module*/
'use strict';

module.exports = {
  dist: {
    files: [{
      src: ['<%= config.dist %>/scripts/{,*/}*.js']
    }, {
      src: ['<%= config.dist %>/styles/{,*/}*.css']
    }, {
      src: ['<%= config.dist %>/styles/fonts/{,*/}*.*']
    }, {
      src: ['<%= config.dist %>/images/{,*/}*.*']
    }, {
      src: ['<%= config.dist %>/*.{ico,png}']
    }]
  }
};
