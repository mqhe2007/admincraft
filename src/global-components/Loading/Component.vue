<template>
  <div class="loading">
    <svg class="icon"
         aria-hidden="true">
      <use xlink:href="#icon-loading"></use>
    </svg>
    <!-- <span class="text">加载中...</span> -->
  </div>
</template>
<script>
export default {
  name: 'loading'
}
</script>
<style lang="stylus" scoped>
@keyframes rotate
  from
    transform rotate3d(0,0,1,0)

  to
    transform rotate3d(0,0,1,1turn)

.loading
  display flex
  align-items center
  position absolute
  bottom 30px
  right 10px
  background #fff
  padding 10px
  z-index 9
  .icon
    font-size 35px
    animation rotate 1.5s infinite linear

  .text
    margin-left 10px
</style>

