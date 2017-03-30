module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: '../public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
    rules: [
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
    ]
  }
}
