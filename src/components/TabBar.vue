<template>
  <div class="tabBar">
    <div class="scrollWrapper"
         id="tabBarScrollWrapper">
      <div id="tabBarContent"
           class="content">
        <div v-for="tab in tabs"
             class="item"
             :class="$route.path === tab.path ? 'active':''"
             :key="tab.path"
             @click="toRouter(tab.path)">
          {{tab.meta.title || '未命名页面'}}
          <span class="closeBtn"
                @click.stop="deleteOne(tab)"><i class="iconfont icon-delete"></i></span>
        </div>
      </div>
      <div class="tools">
        <span class="item"
              @click="clearTabs"
              title="删除全部"><i class="iconfont icon-clear"></i></span>
        <!-- <span class="item"><i class="iconfont icon-Fullscreen"></i></span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      scroll: null
    }
  },
  computed: {
    loading() {
      return this.$store.state.tabBar.loading
    },
    tabs() {
      return this.$store.state.tabBar.tabs
    }
  },
  watch: {
    '$route.name': {
      handler() {
        let route = { ...this.$route }
        if (!route.matched[0]) return
        if (route.matched[0].meta.NonTab) return
        route.active = true
        this.$store.commit('tabBar/addTab', route)
      },
      immediate: true
    },
    tabs() {
      this.$nextTick(() => {
        let scrollX =
          document.querySelector('#tabBarScrollWrapper').offsetWidth -
          document.querySelector('#tabBarContent').offsetWidth
        this.scroll.refresh()
        this.scroll.scrollTo(scrollX > 0 ? 0 : scrollX, 0, 300)
      })
    }
  },
  created() {
    this.$eventBus.on('logout', () => {
      this.clearTabs()
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new this.$Scroll(
        document.querySelector('#tabBarScrollWrapper'),
        {
          click: true,
          scrollX: true,
          scrollY: false,
          mouseWheel: {
            speed: 1,
            easeTime: 1000
          }
        }
      )
    })
  },
  methods: {
    deleteOne(route) {
      // console.log(route.path, this.$route.path)
      if (route.path === this.$route.path) {
        let deleteIndex = this.tabs.findIndex(item => item.path === route.path)
        // console.log(deleteIndex)
        if (deleteIndex === 0) {
          this.toRouter('/', route)
        } else {
          this.toRouter(this.tabs[deleteIndex - 1].path, route)
        }
      } else {
        this.$store.commit('tabBar/deleteTab', route)
      }
    },
    toRouter(routePath, deleteRoute) {
      this.$router.push({ path: routePath }, () => {
        if (deleteRoute) {
          this.$store.commit('tabBar/deleteTab', deleteRoute)
        }
      })
    },
    clearTabs() {
      if (this.tabs.length === 1 && this.tabs[0].name === 'home')
        return alert('没有可清空的内容。')
      this.$store.commit('tabBar/clearTabs')
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus">
.tabBar
  flex 0 0 35px
  width 100%
  background #eee

  .scrollWrapper
    display flex
    flex auto
    height 100%
    white-space nowrap
    overflow hidden
    position relative

    .content
      display flex
      align-items flex-end
      height 100%
      padding-right 100px

      .item
        font-size 13px
        padding 6px 15px 5px 15px
        border-radius 6px 6px 0 0
        cursor pointer
        user-select none
        border-right 1px solid #ddd

        &:hover
          background #f5f5f5
          border-right 1px solid #f5f5f5

        &.active
          background #fff
          border-right 1px solid #fff

        .closeBtn
          margin-left 5px

          .iconfont
            font-size 12px
            color #999

    .tools
      display flex
      align-items center
      position absolute
      right 0
      top 0
      height 100%
      background #eee

      .item
        display flex
        align-items center
        padding 10px
        height 100%
        cursor pointer

        &:hover
          background #fff
</style>
