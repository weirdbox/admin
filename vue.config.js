// webpack的配置
const path = require('path')
function getPath(src) {
  return path.join(__dirname, src)
}

console.log(getPath('src'), '张三')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 代理那些请求？ 网络的接口请求
      // 除了域名外以/api开头的网络请求都需要代理
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club/',
        // target的域名访问 开启一个代理服务器 解决跨域
        changOrigin: true
      },
      // 配置跨域
      '/api-local': {
        target: 'http://localhost:5000/',
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack(config) {
    const svg = config.module.rule('svg')
    // svg默认的loader 不解析某一个目录 这个目录必须是一个绝对路径
    // node如何获取绝对路径
    svg.exclude.add(getPath('src'))
    // 交给 自定义的svgloader解析
    // 1.新建了一个新的loader icons
    const icons = config.module.rule('icons')
    // 这个loader解析什么文件
    icons
      .test(/\.svg$/)
      .include.add(getPath('src'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
})
