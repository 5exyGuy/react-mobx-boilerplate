// development config
import merge from 'webpack-merge';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import commonConfig from './webpack.common.config';

const config: webpack.Configuration = merge(commonConfig, {
	mode: 'development',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.tsx',
	],
	devServer: {
		hot: true,
		open: true,
	},
	devtool: 'eval-cheap-module-source-map',
	plugins: [new webpack.HotModuleReplacementPlugin()],
});

export default config;
