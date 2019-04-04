<template>
  <div id="app"
       v-cloak>
    <component v-if="layout"
               :is="layout"></component>
    <h2 v-else
         class="ac-nolayout-tip">未找到有效的布局，无法显示页面。<br>更多信息请参考：<a href="https://mqhe2007.github.io/admincraft/api/#app-addlayout" target="_blank">添加布局</a></h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo() {
    return {
      title: `${this.$route.meta.title || '未命名页面'}`,
      titleTemplate: '%s | ' + this.$store.state.app.options.title
    }
  },
  data() {
    return {
      layout: ''
    }
  },
  watch: {
    // 监听懒加载的路由对象，选择布局，不可用computed方法，因为懒加载是异步的。
    $route: {
      handler(n) {
        const defaultLayout = this.$store.state.app.options.hasUI
          ? 'acDefault'
          : ''
        this.layout =
          n.meta.layout ||
          (n.matched[0] && n.matched[0].meta.layout) ||
          defaultLayout
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
*
  margin 0
  padding 0
  box-sizing border-box

body
  margin 0
  overflow hidden

[v-cloak]
  display none

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #333
  width 100vw
  height 100vh
.ac-nolayout-tip
  margin-top 20%
  text-align center
</style>

