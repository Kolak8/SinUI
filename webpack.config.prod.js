const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    mode: 'production',
    externals: {
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
    }
})