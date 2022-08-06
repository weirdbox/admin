import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 设置element-plus 的语言包
import locale from 'element-plus/lib/locale/lang/zh-cn'
export default function (app) {
  app.use(ElementPlus, { locale })
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
