module.exports = {
  app: {
    ignorePath: /^\/|\.\.\//,
    src: ['<%= config.app %>/index.html']
  },
  sass: {
    src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
    ignorePath: /(\.\.\/){1,2}bower_components\//
  }
};
