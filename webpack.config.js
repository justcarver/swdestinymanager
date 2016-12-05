module.exports = {
  entry: './app.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude /node_modules/,
        loader: 'babel'
      }
    ]
  },

  output: {
    filename: './bundle.js'
  }
};
