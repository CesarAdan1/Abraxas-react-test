const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    port: 8008,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: false,
    hot: true
  },
  devtool: "source-map"
});