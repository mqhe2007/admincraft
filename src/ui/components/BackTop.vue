<template>
  <transition enter-active-class="fadeIn"
              leave-active-class="dadeOut">
    <div v-show="show"
         id="back-top"
         @click="scrollStart">UP</div>
  </transition>
</template>
<script>
export default {
  name: 'backTop',
  data() {
    return {
      el: null,
      show: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.el = this.$el.parentNode
      this.el.onscroll = () => {
        if (this.el.scrollTop > 400) {
          this.show = true
        } else {
          this.show = false
        }
      }
    })
  },
  methods: {
    scrollStart() {
      this.scrollTop(this.el, this.el.scrollTop, 0)
    },
    // scrollTop animation
    scrollTop: (el, from = 0, to, duration = 500, endCallback) => {
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame =
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            return window.setTimeout(callback, 1000 / 60)
          }
      }
      const difference = Math.abs(from - to)
      const step = Math.ceil((difference / duration) * 50)

      function scroll(start, end, step) {
        if (start === end) {
          endCallback && endCallback()
          return
        }

        let d = start + step > end ? end : start + step
        if (start > end) {
          d = start - step < end ? end : start - step
        }

        if (el === window) {
          window.scrollTo(d, d)
        } else {
          el.scrollTop = d
        }
        window.requestAnimationFrame(() => scroll(d, end, step))
      }
      scroll(from, to, step)
    }
  }
}
</script>
<style lang="stylus" scoped>
#back-top
  position absolute
  width 60px
  height 50px
  color #fff
  background $color-sub
  bottom 40px
  right 30px
  border-radius 4px
  z-index 3
  cursor pointer

@keyframes fadeIn
  from
    opacity 0

  to
    opacity 1

@keyframes fadeOut
  from
    opacity 1

  to
    opacity 0

.fadeIn
  animation fadeIn 0.5s

.fadeOut
  animation fadeOut 0.5s
</style>
