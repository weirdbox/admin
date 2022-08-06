<template>
  <div class="login-container">
    <el-form class="login-form" :rules="rules" :model="formData" ref="formEl">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- username -->
      <el-form-item prop="username">
        <el-input
          placeholder="username"
          prefix-icon="Avatar"
          v-model="formData.username"
        ></el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item prop="password">
        <el-input
          placeholder="password"
          prefix-icon="Lock"
          v-model="formData.password"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <!-- login -->
      <el-button type="primary" class="button" @click="login">登录</el-button>
      <!-- <SvgIcon className="test" iconName="http://user" /> -->
      <!-- <SvgIcon className="test" iconName="cai" /> -->
      <!-- <SvgIcon
        className="test"
        iconName="https://res.lgdsunday.club/user.svg"
      /> -->
    </el-form>
  </div>
</template>

<script setup>
import { onUnmounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
onUnmounted(() => {
  clearTimeout(TimeOut)
})
// 表单的校验
const formData = reactive({
  username: 'super-admin',
  password: '123456'
})
const rules = reactive({
  username: [{ required: true, trigger: 'blur', message: '需要填写用户名' }],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule, value, callback) => {
        if (value.length >= 6) {
          callback()
        } else {
          callback(new Error('密码不可低于6位'))
        }
      }
    }
  ]
})
// 提交表单
const formEl = ref()
const store = useStore()
const router = useRouter()
let TimeOut = ''
const login = () => {
  formEl.value.validate((valid) => {
    // valid 参数检测表单提交规则是否通过，返回Boolean值
    store
      .dispatch('user/login', formData)
      .then((res) => {
        // 跳转到首页 最好不用 path 要用name
        const elmessage = ElMessage({
          type: 'success',
          message: res.data.message
        })
        TimeOut = setTimeout(() => {
          elmessage.close()
          router.push({ name: 'Layout' })
        }, 650)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  .login-form {
    position: relative;
    width: 500px;
    max-width: 100%;
    padding: 16px 35px;
    overflow: hidden;
    background: rgba($color: #151e3d, $alpha: 1);
    margin: 100px auto;
    border-radius: 3px 5px;
    .test {
      color: #151e3d;
    }
    .button {
      width: 100%;
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: white;
        margin: 0 auto 30px auto;
        text-align: center;
      }
    }
    :deep(.el-input) {
      width: 100%;
    }
  }
}
</style>
