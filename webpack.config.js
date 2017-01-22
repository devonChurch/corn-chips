const { resolve } = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = () => {

	return {

		entry: './src/',

		output: {

			path: resolve(__dirname, 'dist'),

			filename: 'index.js',

			// publicPath:

			library: 'corn-chips',

			libraryTarget: 'commonjs',

			// pathinfo

		},

		module: {

			rules: [

				{
					enforce: 'pre',
					test: /\.js$/,
					include: [resolve(__dirname, 'src')],
					loader: 'eslint-loader',
				},

				{
					test: /\.js$/,
					include: [resolve(__dirname, 'src')],
					loader: ['babel-loader'],

				},

			],

		},

		devtool: isProduction ? 'source-map' : 'eval',

		context: __dirname,

		target: 'web',

	};

};
