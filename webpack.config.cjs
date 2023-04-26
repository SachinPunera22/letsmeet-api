const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
// const HtmlWebPackPlugin = require("html-webpack-plugin")
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: "node",
  entry: {
    app: ["./index.js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "video-bundle.js"
  },
  plugins: [
    new Dotenv({
      path: './.env', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: false, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
    ],
  module :{
    rules :
     [
         {
        test: /\.js$/,
        
        loader : 'babel-loader',
   
      }
    ]
  },
  stats :{
    colors : true
  },
  devtool : 'source-map',
  externals: [nodeExternals()],
};
