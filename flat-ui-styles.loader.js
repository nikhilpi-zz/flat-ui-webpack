// node_modules/flatui-webpack/flat-ui-styles.loader.js
var styles = [
  'flat-ui',
  'fonts',
  'icon-font',
  'mixins',
  'scaffolding',
  'spaces'
];

module.exports = function(content) {
    this.cacheable(true);
    var config = this.exec(content, this.resourcePath);
    var start =
            "@import          \"~flat-ui/less/variables.less\";\n"
            + "@fui-font-path: \"~flat-ui/fonts/\";\n"
            + "@fui-image-path: \"~flat-ui/images/\";\n"
            + "@import          \"./flat-ui.config.less\";\n";
    source = start + styles.filter(function(style) {
        return config.styles[style];
    }).map(function(style) {
        return "@import \"~flat-ui/less/" + style + ".less\";";
    }).join("\n");
    return source + "@import \"./flat-ui.overrides.less\";\n";
};
