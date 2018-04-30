const path = require('path');

module.exports = {
	entry: './src/client/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						[
							'env',
							{
								targets: {
									browsers: [ 'last 2 versions' ],
								},
							},
						],
					],
				},
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
			},

			{
				test: /\.(png|woff|eot|ttf|swf)/,
				loader: 'url-loader?limit=1',
			},
			{
				test: /\.svg/,
				loader: 'file-loader',
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
						},
					},
				],
			},
		],
	},
};
