import merge from 'webpack-merge';
import webpack from 'webpack';
import path from 'path';
import commonConfig from './webpack.common.config';

const config: webpack.Configuration = merge(commonConfig, {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.[fullhash].min.js',
	},
	devtool: 'source-map',
	plugins: [],
});

export default config;
