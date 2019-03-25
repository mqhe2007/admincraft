<template>
  <div class="sidebar">
    <CMainMenu></CMainMenu>
  </div>

</template>
<script>
import CMainMenu from './MainMenu/index.vue'
export default {
  name: 'sidebar',
  components: {
    CMainMenu
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.sidebar
  flex 0 0 200px
  background #ddd
</style>
