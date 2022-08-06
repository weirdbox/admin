import MyAxios from '@/utils/request'
// axios.config.headers[icode] = 'os2sd8sa'
// 登录
/*
  jsonp: 只能解决get 请求的跨域，必须服务器配合，服务器传递一个callback 函数，抢断调用callback函数
      在callback（‘数据’）实际开发中不会以这种方式解决跨域
  后台代理 ：设置在前端电脑上开启一个代理服务器（）
  cors: 后端
*/
export const login = (data) => {
  // axios.post44
  // 封装后 icode --> axios
  return MyAxios.request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
// 获取当前登录的用户信息
export const getUserInfo = () => {
  return MyAxios.request({
    url: 'sys/profile'
  })
}

// 退出

// 用户权限
