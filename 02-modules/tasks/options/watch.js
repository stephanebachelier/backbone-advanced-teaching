/*global module*/
'use strict';

module.exports = {
  options: {
    nospawn: true
  },
  gruntfile: {
    files: [
      '<%= jshint.gruntfile.src %>',
      'tasks/{,*/}*.js'
    ],
    tasks: ['lint-grunt'],
  },
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },
  js: {
    files: ['<%= config.app %>/scripts/{,*/}*.js'],
    tasks: ['lint-js'],
    options: {
      livereload: true
    }
  },
  sass: {
    files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
    tasks: ['sass:server', 'autoprefixer'],
    options: {
      livereload: true
    }
  },
  styles: {
    files: ['<%= config.app %>/styles/{,*/}*.css'],
    tasks: ['newer:copy:styles', 'autoprefixer']
  },
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [
      '<%= config.app %>/{,*/}*.html',
      '.tmp/styles/{,*/}*.css',
      '<%= config.app %>/images/{,*/}*'
    ]
  },
  json: {
    files: ['<%= jsonlint.target.src %>'],
    tasks: ['jsonlint']
  }
};
