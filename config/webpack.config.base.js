import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import {
  Config,
  ConfigEnvironment
} from 'webpack-config';

const baseDir = ConfigEnvironment.INSTANCE.valueOf('dir');

export default new Config().merge({
  entry: {
    bundle: './js/index.js',
    styles: './css/index.scss'
  },
  output: {
    path: ConfigEnvironment.INSTANCE.valueOf('dir') + '/dist',
    filename: '[name].js',
  },
  eslint: {
    fix: true,
    quiet: false
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  module: {
    preLoaders: [
      { 
        test: /\.js$/,
        include: [ `${baseDir}/js` ], 
        loader: 'eslint-loader' 
      },
      /*
      { 
        test: /\.scss$/, 
        include: `${baseDir}/css`' ], 
        loader: 'sasslint' 
      }
      */
    ], 
    loaders: [
      { 
        test: /jquery\..+\.js$/, 
        loader: 'imports?jQuery=jquery,$=jquery,this=>window' 
      },
      { 
        test: /\.js$/, 
        include: [ `${baseDir}/js` ], 
        loader: 'babel-loader' 
      },
      { 
        test: /\.scss$/, 
        include: [ `${baseDir}/css` ], 
        loader: ExtractTextPlugin.extract('style', ['css','postcss','sass'].join('!')) 
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        include: [ `${baseDir}/css` ],
        loader: 'file',
        query: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'jquery.waypoints': 'waypoints/lib/jquery.waypoints.js',
      'jquery.sticky': 'jquery-sticky',
      'jquery.countdown': 'jquery-countdown/src/countdown.js'
    },
    extensions: ['', '.js', '.scss']
  },
  progress: true
});