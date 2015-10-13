module.exports = {
  build: [
    'clean:dist',
    'wiredep',
    'concurrent:dist',
    'autoprefixer',
    'useminPrepare',
    'copy:dist',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ],
  default: [
    'newer:jshint',
    'newer:jscs',
    'newer:lintspaces',
    'lint-js',
    'build'
  ],
  'lint-js': [
    'jshint:js',
    'jscs:js',
    'lintspaces:js'
  ],
  'lint-grunt': [
    'jshint:gruntfile',
    'jscs:grunt',
    'lintspaces:grunt'
  ]
};
