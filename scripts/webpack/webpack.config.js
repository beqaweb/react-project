const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist')
    },
    resolve: {
        extensions: [
            '.js'
        ],
        alias: {
            components: path.resolve(__dirname, '../../src/components/'),
            db: path.resolve(__dirname, '../../src/db/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Spd React Project',
            inject: true,
            template: path.resolve(__dirname, '../../src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash].css'
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i
        }),
        new webpack.DefinePlugin({
            'process.env': {
                FB_API_KEY: JSON.stringify(process.env.FB_API_KEY)
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../../src')
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true // webpack@2.x and newer
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    }
};
