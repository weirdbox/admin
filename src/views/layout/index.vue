<template>
  <div class="app-wrapper">
    <!-- 左侧 -->
    <SideBar class="sidebar-container" />
    <!-- 右边 -->
    <div class="main-container">
      <div class="fixed-header">
        <NavBar />
      </div>
      <AppMain />
    </div>
  </div>
</template>
<script setup>
import AppMain from './components/AppMain/index.vue'
import SideBar from './components/SideBar/index.vue'
import NavBar from './components/NavBar/index.vue'
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background: red;
  width: calc(100% - #{$sideBarWidth});
}
</style>
