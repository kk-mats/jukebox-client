const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	devtool: "inline-source-map",
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
				loader: "ts-loader",
				test: /\.tsx?$/,
				exclude: [/node_modules/],
				options: {
					configFile: "tsconfig.dev.json"
				}
			}
		]
	},
	devServer: {
		historyApiFallback:{
			disableDotRule: true
		},
		inline: true,
		open: true,
		host: "localhost",
		port: 8080,
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				pathRewrite: {'^/api' : ''},
				secure: false,
				logLevel: "debug"
			}
		}
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			'react-dom$': 'react-dom/profiling',
			'scheduler/tracing': 'scheduler/tracing-profiling',
		}
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