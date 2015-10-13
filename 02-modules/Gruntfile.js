/* global require, module */
'use strict';

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  var path = require('path');

  function loadConfig (path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function (option) {
      key = option.replace(/\.js$/,'');
      var req;
      try {
        req = require(path + option);
        object[key] = 'function' === typeof req ? req(grunt) : req;
      }
      catch (e) {}
    });

    return object;
  }

  // configurable paths
  var config = {
    config: {
      app: 'app',
      tmp: '.tmp',
      dist: 'dist'
    }
  };

  grunt.util._.extend(config, loadConfig('./tasks/options/'));

  grunt.initConfig(config);

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'tasks'),
    init: false,
    config: config,
    jitGrunt: {
      staticMappings: {
        useminPrepare: 'grunt-usemin'
      }
    }
  });

};
