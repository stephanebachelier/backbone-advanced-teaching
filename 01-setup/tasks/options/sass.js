module.exports = {
  options: {
    sourceMap: true,
    includePaths: ['<%= config.app %>/bower_components']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/styles',
      src: ['*.{scss,sass}'],
      dest: '.tmp/styles',
      ext: '.css'
    }]
  },
  server: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/styles',
      src: ['*.{scss,sass}'],
      dest: '.tmp/styles',
      ext: '.css'
    }]
  }
};
