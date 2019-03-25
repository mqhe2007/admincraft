<template>
  <div id="app"
       v-cloak>
    <component v-show="layout"
               :is="layout"></component>
  </div>
</template>

<script>
import Default from './layout/Default.vue'
import Blank from './layout/Blank.vue'
import Error from './layout/Error.vue'
export default {
  name: 'app',
  components: {
    Default,
    Blank,
    Error
  },
  metaInfo() {
    return {
      title: `${this.$route.meta.title || '未命名页面'}`,
      titleTemplate: '%s | ' + this.$store.state.instance.options.title
    }
  },
  data() {
    return {
      layout: 'default'
    }
  },
  watch: {
    // 监听懒加载的路由对象，选择布局，不可用computed方法，因为懒加载是异步的。
    $route: {
      handler(n) {
        this.layout =
          n.meta.layout ||
          (n.matched[0] && n.matched[0].meta.layout) ||
          'default'
      },
      deep: true,
      immediate: true
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="stylus">
@import './style/theme'
@import './style/iconfont'

*
  margin 0
  padding 0
  box-sizing border-box

body
  margin 0
  overflow hidden

[v-cloak]
  display none

.icon
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow hidden

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #333
  width 100vw
  height 100vh
</style>

