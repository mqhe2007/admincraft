<template>
  <div class="mainMenu"
       ref="mainMenu">
    <div class="menuContent"
         v-if="$store.state.mainMenu.menus.length > 0">
      <CMenuItem v-for="(item, index) in $store.state.mainMenu.menus"
                 :key="index"
                 :itemData="item"></CMenuItem>
    </div>
    <div class="menuContentEmpty"
         v-else>
      菜单未配置
    </div>
  </div>

</template>
<script>
import CMenuItem from './MeunItem'
export default {
  name: 'mainMenu',
  components: {
    CMenuItem
  },
  data: () => ({
    scroll: null
  }),
  watch: {
    '$route.name': {
      handler(value) {
        // console.log(value)
        // 复显当前路由
        this.resetActivation()
        if (value !== 'home') this.active(value)
      },
      immediate: true
    },
    '$store.state.mainMenu.menus': {
      handler() {
        if (this.scroll) this.scroll.refresh()
      },
      immediate: true
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new this.$Scroll(this.$refs.mainMenu, {
        click: true,
        mouseWheel: {
          speed: 1,
          easeTime: 1000
        }
      })
    })
  },
  methods: {
    active(name) {
      this.$store.commit('mainMenu/active', name)
    },
    resetActivation() {
      this.$store.commit('mainMenu/resetActivation')
    }
  }
}
</script>

<style lang="stylus">
.mainMenu
  height 100%
  overflow hidden
  background #011526

  .menuContentEmpty
    text-align center
    padding-top 30px
    color #eee
</style>
