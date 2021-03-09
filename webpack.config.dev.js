const path = require('path')  //node 的文件路径模块，为了兼容入口路径
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动添加一个html文件
const base = require('./webpack.config')

module.exports = Object.assign({}, base, { // 把base的属性赋值到 空对象  {} 上
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html' // 原来的html文件
        })
    ],
})