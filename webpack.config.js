'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(_, { mode }) {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ];

  if (mode === 'production') {
    plugins.push(
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    );
  }

  return {
    devtool: mode === 'development' ? 'source-map' : false,
    resolve: {
      extensions: ['.ts', '.js'],
    },
    entry: './src/index.ts',
    output: {
      filename: mode === 'production' ? 'app.[chunkHash].min.js' : 'app.js',
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'awesome-typescript-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            mode === 'production'
              ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                  publicPath: '../',
                },
              }
              : 'style-loader',
            'css-loader',
            /*{
              loader: 'css-loader',
              options: {
                modules: true,
              }
            },*/
            'sass-loader',
          ],
        },
      ],
    },
  };
};
