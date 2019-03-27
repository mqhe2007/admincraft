<script>
export default {
  name: 'home',
  render(h) {
    if (this.component) {
      return h(this.component)
    } else {
      return h('h3', '默认首页内容, 可配置首页。')
    }
  },
  data() {
    return {
      component: null
    }
  },
  computed: {
    componentName() {
      return this.$store.state.app.homeRouteName
    }
  },
  created() {
    if (this.componentName && this.componentName !== 'home')
      this.getHomeComponent()
  },
  methods: {
    getHomeComponent() {
      let components = this.$router.getMatchedComponents({
        name: this.componentName
      })
      this.component = components[components.length - 1]
    }
  }
}
</script>
