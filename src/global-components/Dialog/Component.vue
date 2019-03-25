<template>
  <div class="dialog boxShadow">
    <div class="top">
      <span class="title">{{title}}</span>
      <svg class="icon"
           @click="close"
           aria-hidden="true">
        <use xlink:href="#icon-delete"></use>
      </svg>
    </div>
    <div class="content">
      <component :is="{render}"></component>
    </div>

  </div>
</template>
<script>
export default {
  name: 'ACDialog',
  props: ['title', 'render', 'onClosed'],
  data: () => ({
    closeTimer: null
  }),
  computed: {
    componentDefinition() {
      return { render: this.render }
    }
  },
  destroyed() {
    if (this.onClosed) {
      this.onClosed()
    }
  },
  methods: {
    close() {
      this.$Dialog.close(this.$root)
    }
  }
}
</script>
<style lang="stylus">
@keyframes zoomIn
  from
    transform scale3d(0, 0, 0) translate3d(50%, -50%, 0)

  to
    transform scale3d(1, 1, 1) translate3d(50%, -50%, 0)

.dialog
  display flex
  flex-flow column
  position absolute
  top 50%
  right 50%
  transform translate3d(50%, -50%, 0)
  transform-origin right top
  z-index 9
  min-width 300px
  min-height 130px
  padding 15px
  border-radius 4px
  background #fff
  animation zoomIn 0.3s
  box-shadow 0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 100px 0 rgba(0, 0, 0, 0.2)

  .top
    display flex
    justify-content space-between
    align-items center
    margin-bottom 15px

  .title
    font-size 20px

  .content
    font-size 14px
</style>


