const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
	mode: "production",
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				enforce: "pre",
				loader: "eslint-loader",
				test: /\.tsx?$/,
				exclude: [/node_modules/],
				options: {
					emitErrors: true
				}
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: [/node_modules/],
				options: {
					configFile: "tsconfig.prod.json"
				}
			}
		]
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".ts", ".tsx", ".js"]
	},
	output: {
		publicPath: ASSET_PATH,
		filename: "static/js/bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.ASSET_PATH": JSON.stringify(ASSET_PATH)
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
};
