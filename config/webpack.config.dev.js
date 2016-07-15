import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
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
    new WebpackNotifierPlugin({alwaysNotify: true}),
    new BrowserSyncPlugin({
      proxy: 'http://localhost:8888/wedding.thelauries.com/'
    })
  ]
});