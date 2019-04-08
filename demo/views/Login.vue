<template>
  <div class="login">
    <div class="logo">Admincraft Logo</div>
    <div class="form">
      <input type="text"
             class="boxShadow"
             placeholder="请输入用户名"
             v-model="formData.userName">
      <input type="password"
             class="boxShadow"
             placeholder="请输入密码"
             v-model="formData.password">
      <button v-if="loginSubmitDisabled"
              disabled>正在登录...</button>
      <button @click="loginSubmit"
              class="boxShadow"
              v-else>登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      loginSubmitDisabled: false,
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    loginSubmit() {
      if (this.validate()) {
        this.loginSubmitDisabled = true
        this.$moduleLoader(this.$store.state.user.modules)
          .then(() => {
            this.$router.replace({ name: 'home' })
          })
          .catch(() => {})
      } else {
        this.$dialog.open({
          title: '提示：',
          render: h => h('p', '请在用户名和密码框中输入任意值模拟登录。')
        })
      }
    },
    validate() {
      if (this.formData.userName && this.formData.password) return true
      return false
    }
  }
}
</script>

<style lang="stylus">
.login
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  width: 100%
  height: 100%

  .logo
    flex: 0 0 30px
    font-size: 30px
    margin-bottom: 15px

  .form
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    width: 250px
    padding: 20px 10px 10px
    background: #f5f5f5

    *
      margin-bottom: 15px

    input, button
      height: 30px
      border-radius: 4px
      width: 100%
      border: none
      padding: 0 10px
      outline: none
      transition: all 0.3s

    input
      background: #fff

      &:focus
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5)

    button
      background: #999
      color: #fff
      cursor: pointer
      user-select: none

      &:hover
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5)
</style>
