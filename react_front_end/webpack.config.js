module.exports = {
  // the entry point for the React application
  entry: [
    './src/index.js'
  ],
  // how to output the result of running babel
  // on the code
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  // How webpack is going to use babel on javascript
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  // file extensions we want to be discovered
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};