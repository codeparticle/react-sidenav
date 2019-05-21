const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('./paths');
require('./env');

module.exports = {
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', '.scss', '.css', '.otf', '.json', '.svg'],
    modules: [paths.appNodeModules, 'node_modules'].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(paths.delimiter).filter(Boolean)
    ),
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      // This often causes confusion because we only process files within src/ with babel.
      // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
      // please link the files into your node_modules/ and let module-resolution kick in.
      // Make sure your source files are compiled, as they will not be processed in any way.
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules|package.json/,
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {
            encoding: 'base64',
          },
        },
      },
    ],
  },
  node: {
    fs: 'empty',
  },
};
