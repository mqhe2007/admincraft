<template>
  <div id="header"
       class="header">
    <CLogo @click="goHome"></CLogo>
    <div class="rightMenus">
      <component class="item"
                 v-for="(value, key) in $store.state.dynamicComponent.HEADER_RIGHT_MENUS"
                 :key="key"
                 :is="value"></component>
      <CUserCenterEntry class="item"></CUserCenterEntry>
    </div>
  </div>
</template>
<script>
import CLogo from '../Logo'
import CUserCenterEntry from '../UserCenterEntry'
export default {
  name: 'Cheader',
  components: {
    CLogo,
    CUserCenterEntry
  },
  data: () => ({}),
  created() {
    // this.$options.components
    this.$eventBus.on('showCase/event/demo1', data => {
      this.$notice.open({
        title: '监听到一个实时事件',
        content: data
      })
    })
    this.$eventBus.on('showCase/event/demo2', data => {
      this.$notice.open({
        title: '监听到一个异步事件',
        content: data
      })
    })
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
.header
  display flex
  height 60px
  flex 0 0 60px
  width 100%
  user-select none
  background #fff

  .rightMenus
    display flex
    justify-content flex-end
    flex auto

  .item
    display flex
    align-items center
    font-size 14px
    cursor pointer
    padding 0 20px

    &:hover
      background #f5f5f5
</style>
