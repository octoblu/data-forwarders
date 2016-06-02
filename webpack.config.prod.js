var path          = require('path');
var webpack       = require('webpack');
var autoprefixer  = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
     compress: {
       warnings: false
     }
   })
  ],
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      config: path.join(__dirname, 'src', 'config', 'production')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        loader: 'url-loader?limit=10000',
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  postcss: function (webpack) {
    return [
      autoprefixer
    ];
  }
};
