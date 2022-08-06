import router from '@/router/index.js'
// 注意 如果组件中使用sotre usestore 函数创建store 的引用
// 如果在js文件中脱离组件环境必须使用 @/store/index.js
import store from '@/store'
import { ElMessage } from 'element-plus'
import { getItem } from '@/utils/storage'
import { TOKEN } from './common'
// 路由前置守卫 判断是否登录
const whiteList = ['/login']
// 设置白名单 不需要登录就能访问的路由
router.beforeEach((to, from, next) => {
  // 检测 token 存在 跳转登录状态可以跳转首页
  if (getItem(TOKEN)) {
    // 请求当前登录用户的数据
    if (to.path === '/login') {
      const mes = ElMessage({ type: 'warning', message: '你已经登录过了' })
      const Time = setTimeout(() => {
        mes.close()
        clearInterval(Time)
      }, 750)
      next({ name: 'Layout' })
      return
    } else {
      if (!store.getters.hasUserInfo) {
        store.dispatch('user/getUserInfo')
        next()
        return
      }
    }
    next()
  } else {
    // token 不存在 只能访问登录页面
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
