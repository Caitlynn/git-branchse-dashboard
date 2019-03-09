const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const reactToolboxVariables = require('./src/react_toolbox_variables');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src', 'index.jsx'),
  ],
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      ],
      include: path.join(__dirname, 'src'),
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: 1,
            localIdentName: 'rt__[local]--[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            sourceComments: true,
            plugins: function postCssConfig() {
              return [
                /* eslint-disable global-require */
                require('postcss-cssnext')({
                  features: {
                    customProperties: {
                      variables: reactToolboxVariables,
                    },
                  },
                }),
                /* eslint-enable global-require */
              ];
            },
          },
        },
      ],
    }, {
      test: /\.png$/,
      loader: 'file-loader',
    }, {
      test: /\.txt$/,
      loader: 'raw-loader',
    }],
  },
  devServer: {
    port: 3000,
  },
};
