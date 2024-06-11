import htmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filePath = fileURLToPath(import.meta.url)
const __dirname = dirname(__filePath) // 当前文件所在目录绝对路径


export default {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'MicroApp1',
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_MicroApp1`,
        globalObject: 'window',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3001,
        hot: false,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        // watchContentBase: false,
        liveReload: false,
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'MicroApp1',
            template: path.resolve(__dirname, './index.html')
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "@src": path.resolve(__dirname, './src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_componenst)/,
                use: {
                    loader: 'babel-loader',
                    options: {},
                },
            },
            {
                test: /\.(tsx|ts)$/,
                exclude: /(node_modules|bower_componenst)/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
}