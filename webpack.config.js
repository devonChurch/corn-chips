const { resolve } = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = () => {

	return {

		entry: './src/',

		output: {

			path: resolve(__dirname, 'dist'),

			filename: 'corn-chips.js',

			// publicPath:

			library: 'cornChips',

			libraryTarget: 'umd', // 'commonjs',

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
