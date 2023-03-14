<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      ref="ruleFormRef"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">{{ channel }}微趣GM平台登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <input
          class="LoginInput"
          ref="username"
          v-model="ruleForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <input
          class="LoginInput"
          placeholder="Password"
          :key="passwordType"
          ref="password"
          v-model="ruleForm.password"
          :type="passwordType"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
          autocomplete="new-password"
        />
        <!-- <span class="show-pwd" @click="showPwd"> -->
        <span class="show-pwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import store from '@/store/modules/users'
  import { useRouter } from 'vue-router'
  import type { FormInstance } from 'element-plus'
  const ruleFormRef = ref<FormInstance>()
  const router = useRouter()
  const channel = ref('')
  const ruleForm = reactive({
    username: '',
    password: '',
  })
  const validateUsername = (rule, value, callback) => {
    if (!value) {
      callback(new Error('Please enter the correct user name'))
    } else {
      callback()
    }
  }
  const validatePassword = (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('The password can not be less than 6 digits'))
    } else {
      callback()
    }
  }
  const loginRules = reactive({
    username: [{ required: true, trigger: 'blur', validator: validateUsername }],
    password: [{ required: true, trigger: 'blur', validator: validatePassword }],
  })
  const passwordType = ref('passwordType')
  const loading = ref(false)
  const handleLogin = () => {
    setTimeout(async () => {
      await store.actions.login(ruleForm)
      await router.push({
        path: '/games',
      })
    }, 1000)
  }
</script>

<style lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg: #283443;
  $light_gray: #fff;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }
  body {
    color: #000;
  }
  /* reset element-ui css */
  .login-container {
    .el-input {
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        z-index: 999;
        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
  .LoginInput {
    width: 420px;
    height: 47px;
    padding: 0 15px;
    background-color: #283443;
    border: 0;
    color: #fff;
    font-size: 16px;
  }
</style>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
</style>
