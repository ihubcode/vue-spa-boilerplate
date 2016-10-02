var path = require('path');
var config = require('./config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'development'
    ? config.dev.assetsSubDirectory
    : config.build.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function (options) {
  options = options || {};
  // generate loader string to be used with extract text plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar;
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?');
        extraParamChar = '&';
      } else {
        loader = loader + '-loader';
        extraParamChar = '?';
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
    }).join('!');

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader);
    } else {
      return ['vue-style-loader', sourceLoader].join('!');
    }
  }

//	{ css: 'vue-style-loader!css-loader',
//		postcss: 'vue-style-loader!css-loader',
//		less: 'vue-style-loader!css-loader!less-loader',
//		sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
//		scss: 'vue-style-loader!css-loader!sass-loader',
//		stylus: 'vue-style-loader!css-loader!stylus-loader',
//		styl: 'vue-style-loader!css-loader!stylus-loader' }

	// http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = [];
  var loaders = exports.cssLoaders(options);
  for (var extension in loaders) {
    var loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    });
  }
//	[ { test: /\.css$/, loader: 'vue-style-loader!css-loader' },
//		{ test: /\.postcss$/, loader: 'vue-style-loader!css-loader' },
//		{ test: /\.less$/,
//			loader: 'vue-style-loader!css-loader!less-loader' },
//		{ test: /\.sass$/,
//			loader: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' },
//		{ test: /\.scss$/,
//			loader: 'vue-style-loader!css-loader!sass-loader' },
//		{ test: /\.stylus$/,
//			loader: 'vue-style-loader!css-loader!stylus-loader' },
//		{ test: /\.styl$/,
//			loader: 'vue-style-loader!css-loader!stylus-loader' } ]
  return output;
};
