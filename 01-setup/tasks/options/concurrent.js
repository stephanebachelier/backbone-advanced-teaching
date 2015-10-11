module.exports = {
  server: [
    'sass:server',
    'copy:styles'
  ],
  dist: [
    'sass:dist',
    'copy:styles',
    'imagemin',
    'svgmin'
  ]
};
