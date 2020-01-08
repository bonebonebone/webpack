'use strict'; //严格模式

const path = require('path');
const webpack = require('webpack');
module.exports = {
  //单入口
  // entry: './src/index.js',
  // output: {
  //   path:path.join(__dirname, 'dist'),
  //   filename: 'bundle.js'
  // },
  // 多入口
  entry: {
  index: './src/index.js',
  search: './src/search.js'
  },
  output: {
    path:path.join(__dirname, 'dist'),
  filename: '[name].js'
  },
  // mode: 'production',
  mode: 'development',//配合热更新

  module: {
    rules: [
      {
      test: /.js$/,
      use: 'babel-loader'
    },
    {
      test: /.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },
    // {
    //   test: /\.(png|jpg|gif|jpeg)$/,
    //   use: 'file-loader'
    // },    
    {
      test: /\.(png|jpg|gif|jpeg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      }
    },               
  ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() //热更新
  ],
  devServer: {//热更新
    contentBase: './dist',
    hot: true
  }
}