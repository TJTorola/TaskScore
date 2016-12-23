const path = require("path");
const webpack = require('webpack');

const PROD = JSON.parse(process.env.PROD_ENV || 'false');

module.exports = {
	context: __dirname,
	entry: "./src/entry.jsx",
	devtool: 'source-maps',

	output: {
		path: "./",
		filename: "bundle.js"
	},

	module: {
		loader: {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}
	},

	resolve: {
		root: path.resolve('./src'),
		extensions: ["", ".js", ".jsx" ]
	},

	plugins: PROD ? [
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: false
			}
		})] : []
};
