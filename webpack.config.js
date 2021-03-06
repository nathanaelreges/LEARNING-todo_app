const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
   entry: './src/index.jsx',

   output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
   },

   mode: 'development',

   devtool: 'inline-source-map',

   devServer: {
      contentBase: __dirname + '/dist', 
      port: 3030,
      historyApiFallback: true,
      hot: true,
      compress: true
   },

   resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
         modules: __dirname + '/node_modules'
      }
   },

   plugins: [
      new webpack.HotModuleReplacementPlugin()
   ],

   module: {
      rules: [{
         test: /.js[x]?$/,
         exclude: /node_modules/,
         use: [{
            loader: 'babel-loader',
            options: {
               presets: ['babel-preset-env', 'react'],
               plugins: ['transform-object-rest-spread']
            }
         }]        
      },
      {
         test: /\.css/,
         loader: 'style-loader!css-loader'
      },
      {
         test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
         use: [{
            loader: 'file-loader',
            options: {
               name: '[name].[ext]',
               outputPath: 'fonts/'
            }
         }]
      }]
   }
}