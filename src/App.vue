<template>
  <div class="app"
       v-cloak>
    <component v-if="layout"
               :is="layout"></component>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo() {
    return {
      title: `${this.$route.meta.title || '未命名页面'}`,
      titleTemplate: '%s | ' + this.$store.state.app.config.title
    }
  },
  data() {
    return {
      layout: 'layoutDefault'
    }
  },
  watch: {
    // 监听懒加载的路由对象，选择布局，不可用computed方法，因为懒加载是异步的。
    $route: {
      handler(n) {
        // console.log(n)
        // 当前路由未匹配到组件，布局为空
        if (!n.matched.length) return (this.layout = '')
        this.layout =
          n.meta.layout ||
          (n.matched[0] && n.matched[0].meta.layout) ||
          'layoutDefault'
      },
      deep: true,
      immediate: true
    }
  },
  created() {},
  methods: {}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  overflow: hidden;
}
[v-cloak] {
  display: none;
}
.app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>

