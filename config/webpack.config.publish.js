const CopyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config.base');
const paths = require('./paths');

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
  },
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      ident: 'postcss',
      sourceMap: true,
      plugins: () => [
        autoprefixer({
          browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
        }),
      ],
    }
  },
};

const publishConfig = {
  entry: paths.appIndexJs,
  externals: [nodeExternals()],
  output: {
    // The build folder.
    path: paths.appBuild,
    filename: 'index.js',
    library: '@codeparticle/react-sidenav',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          compact: true,
        },
      },
    ],
  },
  plugins: [
    new CopyPkgJsonPlugin({
      remove: ['private', 'devDependencies', 'dependencies', 'scripts', 'husky', 'jest', 'babel', 'eslintConfig'],
      replace: {
        main: 'index.js',
      },
    }),
  ],
};

module.exports = merge.smart(baseConfig, publishConfig);
