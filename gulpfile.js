/**
  - - - - -
  H O L L Y
  - - - - -
  ./gulpfile.js
  ENVOY frontend Gulp build system and boilerplate for static websites.
  @author ENVOY development team
 */

global.baseConfig = require('./node_modules/envoy-holly/config')
global.config = require('./config');
require('./node_modules/envoy-holly/buildsys');
require('./buildsys')
