var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.json'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /(\.js$)|(\.jsx$)/,
        loaders: ['babel'],
        exclude: path.join(__dirname, 'node_modules'),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  }
};
