// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const babelConfig = require('../.babelrc.js');

module.exports = {
  resolve: {
    alias: {
      shared: path.resolve(__dirname, '../'),
      components: path.resolve(__dirname, '../src'),
      images: path.resolve(__dirname, '../src/assets/images'),
    },
    modules: ['node_modules'],
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [new ExtractTextPlugin({ filename: 'css/[name].[hash].css' })],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-flow',
              '@lingui/babel-preset-react',
              '@babel/preset-typescript',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-async-to-generator',
              '@babel/plugin-transform-modules-commonjs',
              'dynamic-import-node',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-syntax-import-meta',
              '@babel/plugin-proposal-json-strings',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              'import-md-to-js',
              [
                '@babel/plugin-transform-runtime',
                {
                  helpers: false,
                  regenerator: true,
                },
              ],
            ],
            compact: true,
          },
        },
        include: [path.resolve(__dirname, '../../')],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader',
        }),
        include: [
          path.resolve(__dirname, '../../'),
          path.resolve(__dirname, '../node_modules'),
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        include: [path.resolve(__dirname, '../../')],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: 'url-loader?limit=10000&minetype=application/font-woff',
        include: [path.resolve(__dirname, '../../')],
      },
      {
        test: /\.(ttf|eot|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: 'file-loader?prefix=images/&name=[path][name].[ext]',
        include: [path.resolve(__dirname, '../../')],
      },
      {
        test: /\.(png|jpg|svg|gif)(\?.*)?$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=images/[name].[ext]',
        include: [path.resolve(__dirname, '../../')],
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        loader: 'markdown-loader',
        include: [path.resolve(__dirname, '..')],
      },
    ],
  },
};
