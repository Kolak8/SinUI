const path = require('path')  //node 的文件路径模块，为了兼容入口路径

module.exports = {
    // mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: {
        SinUI: './lib/index.tsx' //兼容入口路径
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'SinUI',
        libraryTarget: 'umd',// 封装成什么样的模块定义 有 AMD、Common.js、umd兼容两种 
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
/*     plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html' // 原来的html文件
        })
    ], */
/*     externals: {
        react: { // 配置依赖的名称
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    } */
}