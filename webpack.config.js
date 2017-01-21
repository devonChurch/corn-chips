const {resolve} = require('path');

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

		// module: {
		//
		// }

	};

};
