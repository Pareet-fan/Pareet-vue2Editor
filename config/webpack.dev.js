const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        publicPath: '/',
    },
    devServer:{
        contentBase:path.resolve(__dirname,'../dist'), // 基本目录结构
        host:'localhost',  // 服务器IP地址
        compress:true, // 服务端压缩是否开启
        port:3000,  // 服务器端口号
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://192.168.0.111', 
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                       loader: "style-loader" // creates style nodes from JS strings
                    }, 
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    },{
                        loader:"postcss-loader"
                    }]
            }
        ]
    }
})