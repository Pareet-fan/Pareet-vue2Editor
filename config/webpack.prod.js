// const glob = require('glob'); 
// const path = require('path'); 
// const PurifyCSSPlugin = require("purifycss-webpack"); // 配合glob去除没用的css，比如第三方包

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");//CSS模块资源优化插件
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        // publicPath: '127.0.0.1:8080/'
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader  // 建议生产环境采用此方式解耦CSS文件与js文件
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader  // 建议生产环境采用此方式解耦CSS文件与js文件
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    },{
                        loader:"postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            allChunks: true
          }),// 为抽取出的独立的CSS文件设置配置参数
        // new PurifyCSSPlugin({   // 暂时关闭
        //     //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
        //     paths: glob.sync(path.join(__dirname, 'src/*.html')),
        // }),
    ],
    optimization:{
        //对生成的CSS文件进行代码压缩 mode='production'时生效
        minimizer:[
           new OptimizeCssAssetsPlugin(),
           new TerserPlugin() // js压缩
        ]
    }
})