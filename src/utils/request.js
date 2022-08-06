// 封装一个axios出去
import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 创建一个请求axios对象
// 线上 /prod-api 线下 /api
const baseURL = process.env.VUE_APP_BASE_API
console.log(baseURL)
const MyAxios = axios.create({
  baseURL,
  timeout: 5000 // 设置超时5秒
})

// 请求拦截  icode
MyAxios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers.icode = 'E04872F0DF0664C7'
    // token
    if (store.getters.getToken) {
      console.log('tokens')
      // 请求头中加入token， 服务器根据token 检验用户身份
      config.headers.Authorization = `Bearer ${store.getters.getToken} `
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 拦截响应请求
MyAxios.interceptors.response.use(
  (response) => {
    console.log(response, 'response')
    const { success, message } = response.data
    if (response.status === 200) {
      if (!success) {
        ElMessage({
          type: 'warning',
          message: message
        })
      }
    }
    return response
  },
  (error) => {
    console.log(error, 'err')
    return Promise.reject(error)
  }
)

export default MyAxios
