<template>
  <div class="noticeCenterEntrance"
       @click="visible(true)">
    <span class="title">消息</span>
    <span class="badge"
          v-show="badgeNum > 0">{{badgeNum}}</span>
  </div>
</template>
<script>
export default {
  name: 'noticeCenterEntrance',
  data: () => ({}),
  computed: {
    badgeNum() {
      return this.$store.state.noticeCenter.list.length
    }
  },
  methods: {
    visible(value) {
      this.$store.commit('noticeCenter/setVisible', value)
    }
  }
}
</script>
<style lang="stylus">
.noticeCenterEntrance
  position relative

  .title
    font-size 13px

  .badge
    position absolute
    top 8px
    right 10px
    height 18px
    width 18px
    text-align center
    border-radius 50%
    background red
    color #ffffff
    line-height 19px
    font-size 12px
</style>

