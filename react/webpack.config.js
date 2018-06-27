const path = require('path');

const config = {
	entry: {
		path: path.join(__dirname, 'src/main.js')
	},
	output: {
		path: path.join(__dirname, '../public'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
			}
		]
	},
	devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	delete config.devtool;
	const webpack = require('webpack');
	config.plugins = [
		new webpack.DefinePlugin( {'process.env.NODE_ENV': '"production"'} )
	];
}

module.exports = config;