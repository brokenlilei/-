const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const minCssPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const obj = {
    mode:'production',
    // entry:'./1.js',
    entry:{
        index:'./1.js'
    },
    ooutput:{
        path:path.resolve(__dirname,'./bulid'),
        filename:'bulid.js'
    },
    module:{
        rules:[
            // 你要处理什么文件
            {
                test:/\.css$/,
                use:[{
                    loader: miniCssPlugin.loader
                },'css-loader'],
                // 排除node_module
                exclude: [
                    path.resolve(__dirname,'node_modules')
                ],
                // use:[
                    // 'style-loader',
                    // 'css-loader'
                // ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            title:'哈哈',
            minify:{
                removeComments: true,  //去除html中的注释
                collapseWhitespace: true, //删除空白符与换行符
                collapseBooleanAttributes: true,  //是否简写bollean格式的属性，比如：disabled="disabled" 简写为disabled  默认false
                removeAttributeQuotes: true, //是否移出属性的引号 默认为false
            }
        }),
        new miniCssPlugin({
            filename:'./css/[name].css'
        }),
        //new UglifyJsPlugin(),
        //  new OptimizeCSSAsstsPlugin({})
    ],
    optimization:[
        minimizer: [
            // new UglifyJsPlugin({
            //     cache: true,//缓冲
            //     parallel: true, //并发打包,一次打包多个
            //     sourceMap:true,//源码调试
            // }),

            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                  // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
              }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}







//导出配置项
module.exports = obj;