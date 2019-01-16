const defaultWebpackConfig = require('scrypted-deploy').getDefaultWebpackConfig();
const merge = require('webpack-merge');
const path = require('path');

const webpackConfig = {
    node: {
        Buffer: false,
    },
}

module.exports = merge(defaultWebpackConfig, webpackConfig);
