const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
    target: "node",
    mode: "development",
    watch: true,
    devtool: 'source-map',
    optimization: {
        minimize: false,
        //防止在production下,模块被合并,导致类名出错
        concatenateModules: false,
        //不要把打包环境中的NODE_ENV直接定义到代码中
        nodeEnv: false
    },
    entry: {
        main: [
            'source-map-support/register',
            'webpack/hot/poll?1000',
            './src/server.ts'
        ],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }

        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: [
        nodeExternals({
            whitelist: ['webpack/hot/poll?1000']
        })
    ],
    plugins: [
        new CleanWebpackPlugin('dist'),
        new FriendlyErrorsWebpackPlugin({
            clearConsole: true
        }),
        new StartServerPlugin({
            name: 'main.js',
            nodeArgs: ['--inspect'],
            keyboard: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: true,
        })
    ]
};
