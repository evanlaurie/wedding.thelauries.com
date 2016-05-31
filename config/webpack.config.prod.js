import webpack from 'webpack';
import {
  Config,
  ConfigEnvironment
} from 'webpack-config';
 
export default new Config().extend('./config/webpack.config.base.js').merge({
  filename: __filename,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ]
});