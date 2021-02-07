var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const { use } = require('vue/types/umd');

module.exports = {
  context: '__dirname',
  entry : './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module :{
      rule:[
          {
          test: /\.js$/,
          use: 'babel-loader',
          }
        ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname,'public/index.html'),
    filename:'index.html'
  })
]
};