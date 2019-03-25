<template>
  <div class="notice boxShadow">
    <div class="left">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
    </div>
    <div class="right">
      <span class="iconfont icon-delete"
            @click="close"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'notice',
  props: ['title', 'content', 'onClosed'],
  data: () => ({
    closeTimer: null
  }),
  created(){
    this.$store.commit('noticeCenter/addNotice', {
      title: this.title,
      content: this.content
    })
  },
  mounted() {
    // this.closeTimer = setTimeout(() => {
    //   this.close()
    // }, 3000)
  },
  destroyed() {
    if (this.onClosed) {
      this.onClosed()
    }
    clearTimeout(this.closeTimer)
  },
  methods: {
    close() {
      this.$Notice.close(this.$root)
    }
  }
}
</script>
<style lang="stylus">
@keyframes slideIn
  from
    right -310px

  to
    right 10px

.notice
  display flex
  position absolute
  right 10px
  z-index 9
  width 300px
  max-height 130px
  color #555
  padding 15px
  border-radius 4px
  background #fff
  transition top 0.3s
  animation slideIn 0.5s

  .left
    flex auto

  .right
    flex 0 0 30px
    text-align right

  .title
    margin-bottom 15px

  .content
    font-size 14px
</style>


