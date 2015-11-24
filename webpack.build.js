var path = require('path');
require('es6-promise').polyfill();
module.exports = {
  entry: path.resolve(process.cwd(), 'lib/index.js'),
  output: {
    filename: 'index.js',
    path: 'build/'
  },
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader"
      }
    ]
  }
};
