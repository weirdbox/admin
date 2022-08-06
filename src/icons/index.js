import SvgIcon from './SvgIcon.vue'
// 注册一个全局组件
export default function (app) {
  app.component('SvgIcon', SvgIcon)
  const files = require.context('./svg', false, /\.svg$/)
  files.keys().map(files)
}
// import svg所有资源
