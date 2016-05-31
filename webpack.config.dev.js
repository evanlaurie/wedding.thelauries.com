'use strict';

var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		name: 'js',
	  devtool: 'inline-source-map',
	  entry: {
	    bundle: [
	      './js/index.js'
      ]
	  },
	  output: {
	    path: __dirname + '/dist',
	    filename: '[name].js',
	  },
	  eslint: {
	    fix: true,
	    quiet: false
	  },
	  plugins: [
	    new WebpackNotifierPlugin({alwaysNotify: true}),
	    new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': JSON.stringify('development')
	      }
	    }),
	    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
	  ],
	  module: {
	    preLoaders: [
	      { test: /\.js$/, include: [ __dirname + '/js' ], loader: 'eslint-loader' }
	    ], 
	    loaders: [
  	    { test: /jquery\..+\.js$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window' },
	      { test: /\.js$/, include: [ __dirname + '/js' ], loader: 'babel-loader' }
	    ]
	  },
	  resolve: {
  	  alias: {
        'jquery.waypoints': 'waypoints/lib/jquery.waypoints.js',
        'jquery.sticky': 'jquery-sticky',
        'jquery.countdown': 'jquery-countdown/src/countdown.js'
      },
	    extensions: ['', '.js']
	  },
	  stats: false,
	  progress: true
	},
	{
		name: 'css',
		devtool: 'inline-source-map',
		entry: {
    	styles: [
				'./css/style.scss'
			]
  	},
  	plugins: [
	    new WebpackNotifierPlugin({alwaysNotify: true}),
	    new ExtractTextPlugin('[name].css'),
	    new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': JSON.stringify('development')
	      }
	    })
	  ],
  	output: {
	    path: __dirname + '/dist',
	    filename: '[name].css',
	  },
	  module: {
	    preLoaders: [
	      { test: /\.scss$/, include: [ __dirname + '/js' ], loader: 'sasslint' }
	    ], 
	    loaders: [
      	{ test: /\.scss$/, include: [ __dirname + '/css' ], loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass') }
			]
	  },
	  resolve: {
	    extensions: ['', '.sass']
	  },
	  stats: false,
	  progress: true
	}
];