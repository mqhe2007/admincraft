<template>
  <!-- 用户信息面板 -->
  <div class="userCenterEntry">
    <div class="avatar">
      <i class="iconfont icon-avatar"></i>
    </div>
    <div class="panel boxShadow">
      <p class="userName">{{$store.state.user.info.userName}}</p>
      <div class="logoutBtn"
           @click="logout">注销登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userCenterEntry',
  methods: {
    logout() {
      //TODO: 模拟注销
      this.$eventBus.clean()
      sessionStorage.modules = '[]'
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style lang="stylus">
.userCenterEntry
  position relative

  .avatar
    text-align center

    .iconfont
      font-size 35px

  .panel
    display none
    text-align center
    position absolute
    top 100%
    right 0
    z-index 2
    background #fff
    border-radius 5px 0 5px 5px
    padding 20px
    white-space nowrap

  .userName
    font-size 15px
    font-weight bold

  .logoutBtn
    margin-top 12px
    color red

  &:hover
    .panel
      display flex
      flex-flow column
</style>


