cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-moengage-core.MoECordova",
      "file": "plugins/cordova-moengage-core/www/MoECordova.js",
      "pluginId": "cordova-moengage-core",
      "clobbers": [
        "MoECordova"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.5",
    "cordova-moengage-core": "7.2.0",
    "cordova-plugin-console": "1.1.0"
  };
});