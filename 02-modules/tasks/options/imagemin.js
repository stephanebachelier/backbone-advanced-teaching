/*global module*/
'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/images',
      src: '{,*/}*.{gif,png,jpg,jpeg}',
      dest: '<%= config.dist %>/images'
    }]
  }
};
