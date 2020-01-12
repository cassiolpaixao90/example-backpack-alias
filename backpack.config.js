const JavaScriptObfuscator = require('webpack-obfuscator');

const pluginObfuscator = [
  new JavaScriptObfuscator({
    rotateUnicodeArray: true
  })
];

module.exports = {
  webpack: (config, options, webpack) => {
    config.plugins = [...config.plugins, ...pluginObfuscator];

    return config;
  }
};
