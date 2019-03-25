<template>
  <div id="footer">
    <p class="copyright">{{title + ' 由 Admincraft 驱动'}}</p>
  </div>
</template>
<script>
export default {
  name: 'c-footer',
  computed: {
    title() {
      return this.$store.state.instance.options.title || require('../../package.json').name
    }
  }
}
</script>

<style lang="stylus">
#footer
  display flex
  justify-content center
  align-items center
  height 30px
  flex 0 0 30px
  width 100%
  padding 0 15px
  font-size 13px
  border-top 1px solid #eee
</style>
