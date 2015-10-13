module.exports = {
  server: {
    options: {
      watchTask: true,
      server: {
        baseDir: ['<%= config.app %>', '<%= config.tmp %>'],
        index: 'index.html'
      },
      browser: ['google chrome']
    },
    bsFiles: {
      src: [
        '<%= config.app %>/*.html',
        '<%= config.app %>/scripts/*.js',
        '<%= config.tmp %>/styles/*.css'
      ]
    }
  }
};
