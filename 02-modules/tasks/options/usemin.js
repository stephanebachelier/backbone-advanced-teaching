/*global module*/
'use strict';

module.exports = {
  html: ['<%= config.dist %>/{,*/}*.html'],
  css: ['<%= config.dist %>/styles/{,*/}*.css'],
  js: [
    '<%= config.dist %>/scripts/{,*/}*.js',
  ],
  options: {
    assetsDirs: [
      '<%= config.dist %>',
      '<%= config.dist %>/images',
      '<%= config.dist %>/styles'
    ],
    patterns: {
      js: [
        [/<img[^\>]+src=['"]([^"'\{]+)["']/gm, 'Update the JS with the new img filenames'],
        [/url\(\s*['"]([^"'\{]+)["']\s*\)/gm, 'Update the JS with background imgs, case there is some inline style'],
        [/<a[^\>]+href=['"]([^"'#\{]+)["']/gm, 'Update the JS with anchors images'],
        [/url\(\s*['"]?([^'"\)\{]+)['"]?\s*\)/gm, 'Update the JS to reference our revved images'],
        [/href\s*=\s*['"]([^'"\{]+)['"]/gm, 'Update the JS to reference our revved stylesheets'],
        [/<img[^\>]+src=\\['"]([^"'\{]+)\\["']/gm, 'Update the template with the new img filenames'],
        [/attr\(\s*['"]src["']\s*,\s*['"]([^"'\{]+)["']\s*\)/gm, 'Update the filename in attr() call'],
        [/['"](\/[^"'\{]+.(png|jpe?g|gif))["']/gm, 'Update image full path variable']
      ]
    }
  }
};
