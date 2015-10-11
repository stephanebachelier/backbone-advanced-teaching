/*global module*/
'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= config.app %>',
      dest: '<%= config.dist %>',
      src: [
        '*.{ico,png,txt}',
        'images/{,*/}*.webp',
        '{,*/}*.html',
        'styles/fonts/{,*/}*.*'
      ]
    }]
  },
  styles: {
    expand: true,
    dot: true,
    cwd: '<%= config.app %>/styles',
    dest: '.tmp/styles/',
    src: '{,*/}*.css'
  }
};
