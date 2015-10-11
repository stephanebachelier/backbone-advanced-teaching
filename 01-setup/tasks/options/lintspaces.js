module.exports = {
  options: {
    editorconfig: '.editorconfig'
  },
  grunt: {
    src: ['Gruntfile.js', 'tasks/**/*.js']
  },
  js: {
    src: [
      '<%= config.app %>/scripts/**/*.js',
      '!<%= config.app %>/scripts/vendors/*'
    ]
  }
};
