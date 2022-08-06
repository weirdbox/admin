<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <div class="block">
            <el-avatar shape="square" size :src="logo" />
          </div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人资料 </el-dropdown-item>
            <el-dropdown-item @click="exitDown">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/logo.png'
import { deleteItem } from '@/utils/storage'
import { TOKEN, USERINFO } from '@/common.js'
import { useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
import { ElMessage } from 'element-plus'
const router = useRouter()
let TimeRouter = null
function exitDown() {
  deleteItem(TOKEN)
  deleteItem(USERINFO)
  const elmessage = ElMessage({ type: 'error', message: '已退出登录' })
  TimeRouter = setTimeout(() => {
    router.push({ name: 'login' })
    elmessage.close()
  }, 650)
}
onMounted(() => {
  clearInterval(TimeRouter)
})
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 5px 0;
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    :deep(.el-avatar) {
      --el-avatar-bg-color: none;
    }
  }
}
</style>
