/*global module*/
'use strict';

module.exports = {
  target: {
    src: [
      'bower.json',
      'package.json',
      '<%= config.app %>/scripts/{,*/}*.json'
    ]
  }
};
