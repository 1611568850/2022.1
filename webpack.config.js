const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 模式: 生产环境
    mode: 'production',
    // 入口
    entry: {
      app: path.resolve(__dirname, 'src/index.js')
    },
    // 出口(打包生成js)
    output: {
      filename: 'static/js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    // 模块加载器
    module: {
      rules: [
        {
            test: /\.js$/,
            //exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, 'src'),
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
      ]
    },
    // 插件
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html'
      })
    ]
  }