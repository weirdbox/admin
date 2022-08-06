import { login, getUserInfo } from '@/api/user'
import md5 from 'js-md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN, USERINFO } from '@/common'
export default {
  namespaced: true,
  state: {
    token: '' || getItem(TOKEN),
    userInfo: getItem(USERINFO) || {}
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      setItem(TOKEN, token)
      state.token = token
    },
    setUserInfo(state, user) {
      // 将用户数据保存到本地
      setItem(USERINFO, user)
      state.userInfo = user
    }
  },
  actions: {
    login(store, formData) {
      // axios发送请求
      return new Promise((resolve, reject) => {
        const password = md5(formData.password)
        login({ username: formData.username, password })
          .then((res) => {
            store.commit('setToken', res.data.data.token)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo({ commit }) {
      const user = await getUserInfo()
      console.log(user, 'user')
      commit('setUserInfo', user)
    }
  }
}
