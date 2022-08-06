<template>
  <div v-if="isNetWorkSource" class="svg-icon svg-net-url"></div>
  <svg aria-hidden="true" class="svg-icon" v-else>
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { defineProps, computed, ref, watch } from 'vue'
const props = defineProps({
  iconName: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
})
const isNetWorkSource = ref(false)

const iconName = computed(() => `#icon-${props.iconName}`)

// 判断props.iconName 是否是一个网络资源
const SvgUrl = ref('')
watch(
  () => props.iconName,
  (curr, prev) => {
    isNetWorkSource.value = /^(http|https)/.test(curr)
    SvgUrl.value = `url("${curr}")`
    console.log(curr, 'watch')
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
* {
  color: white;
}
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  overflow: hidden;
}
.svg-net-url {
  background: white;
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
  mask: v-bind(SvgUrl) no-repeat 50% 50%;
}
</style>
