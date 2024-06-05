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
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: './dist',
        port: 3000,
        hot: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'QianKun',
            template: path.resolve(__dirname, './index.html')
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
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