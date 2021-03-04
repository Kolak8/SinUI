const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        SinUI: './lib/index.tsx'
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
    }
}