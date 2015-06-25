var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var defaultConfig = {
  output: {
    libraryTarget: 'var',
    library: '[name]',
    path: __dirname + '/build/',
    publicPath: '/',
    filename: "[name].js"
  },

  externals: {
    "react": "React"
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader!cssnext-loader")},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.(?:js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"},
      {test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
      ]
  }
};

module.exports = {
  entry: {
    IHNewsFeed: "./src/components/IHNewsFeed.jsx"
  },
  output: defaultConfig.output,
  externals: defaultConfig.externals,
  resolve: defaultConfig.resolve,
  module: defaultConfig.module,
  plugins: defaultConfig.plugins
};
