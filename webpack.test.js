var path = require('path');
require('es6-promise').polyfill();
module.exports = {
  entry: path.resolve(process.cwd(), 'lib/components/__tests__/FlexModalWrapper-test.js'),
  output: {
    filename: 'test.js',
    path: 'tmp/'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-portal': 'react-portal'
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
      }
    ],
    preLoaders: [
      {
        test: /\.css$/,
        loader: "null"
      }
    ]
  }
};
