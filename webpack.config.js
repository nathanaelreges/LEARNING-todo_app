const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
   entry: './src/index.jsx',

   output: {
      path: __dirname + '/dist',
      fileName: 'bundle.js'
   },

   mode: 'development',

   devtool: 'inline-source-map',
   
   devServer: {
      contentBase: path.join(__dirname, '/.././dist'),
      hot: true,
      compress: true,
      open: true
   },

   resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
         modules: __dirname + '/node_modules'
      }
   },

   plugins: [
      new MiniCssExtractPlugin({
         filename: 'bundle.css'
      }),
      new webpack.HotModuleReplacementPlugin()
   ],

   module: {
      rules: [{
         test: /.js[x]?$/,
         use: [{
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
               presets: ['babel-preset-env', 'react'],
               plugins: ['transform-object-rest-spread']
            }
         }]        
      },
      {
         test: /\.css/,
         use: [{
            loader: MiniCssExtractPlugin.loader
         },
            'css-loader'
         ]
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