import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';
import {
  Config,
  ConfigEnvironment
} from 'webpack-config';
 
export default new Config().extend('./config/webpack.config.base.js').merge({
  filename: __filename,
  debug: true,
  devtool: 'inline-source-map',
  output: {
    pathinfo: true
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true})
  ]
});