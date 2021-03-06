const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: ['@babel/polyfill', './src/app/index.js'],
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle.css',
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
