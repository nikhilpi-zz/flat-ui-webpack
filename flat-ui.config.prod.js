// src/theme/flat-ui.config.prod.js
const flatUIConfig = require('./flat-ui.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
flatUIConfig.styleLoader = ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader');
module.exports = flatUIConfig;
