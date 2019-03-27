<template>
  <span class="logo"
        @click="goHome">
    <img v-if="image"
         class="image"
         :src="image"
         alt="logo">
    <span class="text">
      {{text}}
    </span>
  </span>
</template>
<script>
export default {
  name: 'logo',
  computed: {
    image() {
      return this.$store.state.app.options.logo.image
    },
    text() {
      return this.$store.state.app.options.logo.text || this.$store.state.app.options.title
    }
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  display flex
  justify-content center
  align-items center
  flex 0 1 200px
  min-width 200px
  cursor pointer
  padding 10px

  .image
    height 100%
    margin-right 10px

  .text
    color #333
    line-height 1
    font-size 20px
    font-weight bold
    text-shadow 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25)
</style>
