const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const bundleAnalyzerIsEnabled = false;

const productionOptimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        parse: {
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      parallel: true,
      sourceMap: true,
    }),
  ],
  usedExports: true,
  nodeEnv: 'production',
};

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimize: false,
  },

  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'OmqHelp',
    libraryTarget: 'umd',
  },

  externals: {
    react: 'react',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
  ],
};

module.exports = (env, args) => {
  if (args.mode === 'production') {
    config.mode = args.mode;
    config.devtool = 'source-map';
    config.optimization = productionOptimization;
  }

  if (bundleAnalyzerIsEnabled) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
};
