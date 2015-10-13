'use strict';

module.exports = function (grunt) {
  return {
    compile: {
      options: {
        amd: 'handlebars/index',
        // namespace: 'templates',
        processName: function (filePath) {
          var pattern = new RegExp('scripts/(modules/(\\w+)/templates|templates|core\/templates)\/(.*).hbs');
          var matches = filePath.match(pattern);
          if (!matches) {
            return filePath;
          }
          grunt.verbose.debug('found template [' + matches[3] + '] in module [' + matches[2] + ']');
          return (matches[2] ? matches[2] + '/' : '') + matches[3];
        },
        processContent: function (content) {
          content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
          content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '');
          content = content.replace(/\n/g, '');
          return content;
        },
        processPartialName: function (filePath) {
          var pattern = new RegExp(
          'scripts/(modules/(\\w+)/templates|templates|core\/templates)\/((.*)\/?)_(.*).hbs'
          );
          var matches = filePath.match(pattern);
          grunt.verbose.debug('processPartialName', filePath, matches);
          if (!matches) {
            return filePath;
          }
          grunt.verbose.debug('found partial [' + matches[3] + '] in module [' + matches[2] + ']');
          return (matches[2] ? matches[2] + '/' : '') + (matches[3] ? matches[3] : '') + matches[5];
        }
      },
      files: {
        '.tmp/scripts/templates.js': [
        // '<%= config.app %>/scripts/core/templates/**/*.hbs',
        '<%= config.app %>/scripts/templates/**/*.hbs',
        // '<%= config.app %>/scripts/modules/**/templates/**/*.hbs'
        ]
      }
    }
  };
};
