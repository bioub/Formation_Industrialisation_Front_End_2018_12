const HtmlWebpackPlugin = require("html-webpack-plugin");

// npm i webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader @babel/core @babel/preset-env -D
// npm i typescript awesome-typescript-loader -D
// npm i css-loader style-loader sass-loader node-sass -D

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
