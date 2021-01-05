const webpack = require("webpack");
const path = require('path'); 
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/webpack'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: {
          loader: 'graphql-tag/loader'
        }
      },
      {
        test: /\.(jpg|png|gif|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            },
          },
        ]
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          'style-loader', 
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },

    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Woperti.com.mx",
      template: "./src/public/index.html",
      filename: "index.html"

    }),
    // new MomentLocalesPlugin({
    //   localesToKeep: ['es', 'en', 'ru']
    // }),
    new webpack.IgnorePlugin(/\/iconv-loader$/),
  
    new Dotenv({
      path: './.env', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
  ]
};