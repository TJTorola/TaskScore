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
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel']
		}]
	},

	resolve: {
		root: path.resolve("./src"),
		extensions: ["", ".js", ".jsx" ]
	},

	plugins: PROD ? [
		new webpack.DefinePlugin({
			"process.env":{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: false
			}
		})] : []
};
