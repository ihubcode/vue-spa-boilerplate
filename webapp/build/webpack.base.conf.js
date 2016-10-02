var path = require('path');
var config = require('./config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../'); // /Users/fedor/works/postio/mk_dashboard

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/main.js')
	},
	output: {
		path: config.build.assetsRoot,
		publicPath: process.env.NODE_ENV === 'development' ? config.dev.assetsPublicPath : config.build.assetsPublicPath,
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		fallback: [path.resolve(__dirname, '../../node_modules')],
		alias: {
			'actions': path.resolve(__dirname, '../src/actions'),
			'modules': path.resolve(__dirname, '../src/modules'),
			'styles': path.resolve(__dirname, '../src/styles'),
			'utils': path.resolve(__dirname, '../src/utils'),
			'views': path.resolve(__dirname, '../src/views')
		}
	},
	resolveLoader: {
		fallback: [path.resolve(__dirname, '../../node_modules')]
	},
	module: {
		preLoaders: [
			{
				test: /\.vue$/,
				loader: 'eslint',
				include: projectRoot
			},
			{
				test: /\.js$/,
				loader: 'eslint',
				include: projectRoot
			}
		],
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				include: projectRoot
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.html$/,
				loader: 'vue-html'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 8192,
					name: utils.assetsPath('images/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'file',
				query: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	eslint: {
		formatter: require('eslint-friendly-formatter')
	},
	vue: {
		loaders: utils.cssLoaders()
	}
};
