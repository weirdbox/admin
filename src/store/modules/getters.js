// 定义全局的属性以获取

export default {
  getToken: (state) => state.user.token,
  // 用户信息
  userInfo: (state) => state.user.userInfo,
  // 判断用户信息是否存在 {}
  hasUserInfo: (state) => JSON.stringify(state.user.userInfo) !== '{}'
  // 主题相关
  // 错误信息
}
