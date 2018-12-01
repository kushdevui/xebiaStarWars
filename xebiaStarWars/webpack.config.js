module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: ['babel-polyfill', './app.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'class-to-classname'
      }
    ]
  }
};
