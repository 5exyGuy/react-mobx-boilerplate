import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
						plugins: [
							[
								'@babel/plugin-proposal-decorators',
								{
									legacy: true,
								},
							],
							[
								'@babel/plugin-proposal-class-properties',
								{
									loose: true,
								},
							],
						],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html.ejs',
		}),
	],
};

export default config;
