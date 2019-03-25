<template>
  <div class="errorPage">
    <h2>路由地址错误</h2>
    <div>{{secont}}秒后将自动返回首页，您也可以手动 <span class="goback"
            @click="goBack">返回</span></div>
  </div>

</template>
<script>
export default {
  name: 'errorPage',
  data: () => ({
    timer: null,
    secont: 5
  }),
  created() {
    this.timer = setInterval(() => {
      if (this.secont > 0) return this.secont--
      this.goBack()
    }, 1000)
  },
  methods: {
    goBack() {
      clearInterval(this.timer)
      this.$router.replace({name: 'home'})
    }
  }
}
</script>

<style lang="stylus">
.errorPage
  display flex
  flex-flow column
  justify-content center
  align-items center
  height 100vh
  width 100vw

  .goback
    cursor pointer
    font-weight bold
</style>

