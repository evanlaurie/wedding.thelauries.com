import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import GitRevisionPlugin from 'git-revision-webpack-plugin';
import Config, { environment } from 'webpack-config';

const baseDir = environment.valueOf('dir');
const env = environment.valueOf('env');
const gitRevisionPlugin = new GitRevisionPlugin();

export default new Config().merge({
  entry: {
    bundle: './js/index.js',
    styles: './css/index.scss'
  },
  output: {
    path: environment.valueOf('dir') + '/dist',
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
    }),
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(env),
      'VERSION': JSON.stringify(gitRevisionPlugin.version()),
      'COMMITHASH': JSON.stringify(gitRevisionPlugin.commithash()),
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
      { test: /jquery\.js$/, loader: 'expose?$' },
      { 
        test: /jquery\..+\.js$/, 
        loader: 'imports?jQuery=jquery,$=jquery,this=>window' 
      },
      { 
        test: /\.js$/, 
        include: [ `${baseDir}/js`, `${baseDir}/lib` ], 
        loader: 'babel-loader' 
      },
      { 
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract('style', ['css','postcss','sass'].join('!')) 
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style', ['css','postcss'].join('!')) 
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        loader: 'file',
        query: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|gif|jpg)/,
        loader: 'file',
        query: {
          name: 'images/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'jquery.waypoints': 'waypoints/lib/jquery.waypoints.js',
      'jquery.sticky': 'jquery-sticky',
      'jquery.countdown': 'jquery-countdown/src/countdown.js',
      'jquery.slick': 'slick-carousel/slick/slick.min.js',
    },
  },
  progress: true
});