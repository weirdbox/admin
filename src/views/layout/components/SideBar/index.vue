<template>
  <div :style="{ backgroundColor: varuables.menuBg }">
    <!-- 网站logo -->
    <div class="logo-container">
      <el-avatar shape="square" :src="logo"></el-avatar>
      <h2>后台管理系统</h2>
    </div>
    <!-- 菜单栏 -->
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="routePath"
      text-color="#fff"
      router
    >
      <template v-for="route in routes">
        <!-- 包含二级菜单 -->
        <el-sub-menu
          :index="route.path"
          v-if="route.children && route.children.length > 0"
          :key="route.name"
        >
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ route.name }}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item
            v-for="subRoute in route.children"
            :key="subRoute.name"
            :index="subRoute.path"
            >{{ subRoute.name }}</el-menu-item
          >
        </el-sub-menu>
        <!-- 不包含二级菜单 -->
        <el-menu-item v-else :key="route.name" :index="route.path">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>{{ route.name }}</span>
          </template>
        </el-menu-item>
      </template>

      <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>null</el-icon>
        <span>Navigator Two</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script setup>
import varuables from '@/styles/variables.module.scss'
import logo from '@/assets/logo.png'
import { useRouter, useRoute } from 'vue-router'
// userRouter获取全部路由|| useRoute获取当前路由
const router = useRouter()
// 如何获取路由表
const routes = router.options.routes

// 处理动态激活的菜单 当前路由的path
const route = useRoute()
const routePath = route.path
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  padding: 12.5px;
  :deep(.el-avatar) {
    --el-avatar-bg-color: none;
  }
}
</style>
