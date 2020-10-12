const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(baseConfig, {
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, 
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
    noEmitOnErrors: true,
    namedChunks: true
  }
})