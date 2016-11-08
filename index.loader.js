// node_modules/flatui-webpack/index.loader.js
module.exports = function() {
};

module.exports.pitch = function (remainingRequest) {

  // Webpack 1.7.3 uses this.resourcePath. Leaving in remaining request for possibly older versions
  // of Webpack
  var configFilePath = this.resourcePath || remainingRequest;
  this.cacheable(true);

  if (!configFilePath || configFilePath.trim() === '') {
    var msg = 'You specified the flat-ui-webpack with no configuration file. Please specify' +
      ' the configuration file, like: \'flat-ui-webpack!./flat-ui.config.js\' or use' +
      ' require(\'flat-ui-webpack\').';
    console.error('ERROR: ' + msg);
    throw new Error(msg);
  }

  var config = require(configFilePath);
  var styleLoader = config.styleLoader || 'style-loader!css-loader!less-loader';

  var styleLoaderCommand = 'require(' + JSON.stringify('-!' + styleLoader + '!' +
      require.resolve('./flat-ui-styles.loader.js') + '!' + configFilePath) + ');';
  return styleLoaderCommand;
};
