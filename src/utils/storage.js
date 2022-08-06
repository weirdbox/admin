// 本地存储

export const getItem = (key) => {
  const value = localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}
export const setItem = (key, value) => {
  // 如果是数据或者是对象，转化为json 格式
  if (typeof value === 'object') {
    // 串行化
    value = JSON.stringify(value)
  }
  return localStorage.setItem(key, value)
}
// 删除单个本地存储
export const deleteItem = (key) => {
  localStorage.removeItem(key)
}
