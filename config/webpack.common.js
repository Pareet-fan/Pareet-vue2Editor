const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename:'[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // options: {
                    // presets: [['@babel/preset-env',{  // 只是业务代码的时候用这部分处理es6，如果有写类库，则用.babelrc里的第一部分
                    //     useBuiltIns: 'usage' // 根据es6业务代码用到的语法，添加兼容处理
                    // }]]
                    
                // }
            },
            {
                test:/\.(png|jpg|gif|jpeg)/,  // 是匹配图片文件后缀名称
                use:[{
                    loader:'url-loader', // 是指定使用的loader和loader的配置参数
                    options:{
                        name: '[name].[ext]',    // 打包后的文件名字和原來一樣，ext表示原始文件后缀
                        publicPath: './images/',
                        outputPath: 'images/',// 打包后的图片放到images文件夹下
                        limit:10240  // 是把小于10KB的文件打成Base64的格式，写入JS
                    }
                }]
            },
            {
                test: /\.(eot|ttf|svg|woff)$/,   // 具体方法在印象笔记
                use: {
                    loader: 'file-loader',  
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'font/'
                    }
                }
            },
            {
                test: /\.(htm|html)$/i,
                 use:[ 'html-withimg-loader'] 
            },
            {
                test:/\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader',
                }
            }
        ]
    }
    ,
    optimization: {
        // usedExports: true,   不知道什么意思
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]common[\\/]|[\\/]utils[\\/]/,  // 可以修改 线上环境可用
                    chunks: 'initial',
                    name: 'commons',
                    priority: 10, // 优先
                    enforce: true
                    // chunks: 'initial',
                    // minChunks: 2,
                    // maxInitialRequests: 5,
                    // minSize: 0
                },
                vendor: { // 将第三方模块提取出来
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10, // 优先
                    enforce: true,
                    // minSize: 30000
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
        },
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{ // 是对html文件进行压缩
                removeAttributeQuotes:true  // removeAttrubuteQuotes是却掉属性的双引号。
            },
            hash:true, // 为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/index.html' // 是要打包的html模版路径和文件名称。
           
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    performance: {
        hints:false
    }
}