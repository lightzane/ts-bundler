const path = require('path');

/** @type import('webpack').Configuration */
const config = {
  entry: ['./src/main.ts'],
  output: {
    filename: 'lightzane.js',
    path: path.resolve(process.cwd(), 'dist'),
    library: {
      name: 'Lightzane',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
