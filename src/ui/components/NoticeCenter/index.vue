<template>
  <div class="noticeCenter"
       ref="noticeCenter"
       v-show="$store.state.noticeCenter.visible">
    <div class="header">
      <p class="title">消息中心</p>
      <span class="clean"
            @click="clearAll">清除全部</span>
    </div>
    <div class="body"
         ref="scrollWrapper">
      <div class="content">
        <div class="noticeItem"
             ref="noticeItem"
             v-for="(item, index) in $store.state.noticeCenter.list"
             :key="item.text">
          <div class="metaBar">
            <span class="time">{{item.title}}</span>
            <span :size="15"
                  class="deleteBtn"
                  @click="deleteItem(index)">
              <svg class="icon"
                   aria-hidden="true">
                <use xlink:href="#icon-delete"></use>
              </svg>
            </span>
          </div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Entrance from './Entrance.vue'
export default {
  name: 'noticeCenter',
  data() {
    return {
      scroll: null
    }
  },
  watch: {
    '$store.state.noticeCenter.visible'(value) {
      if (value) {
        document.addEventListener('click', this.listenClick, true)
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new this.$Scroll(this.$refs.scrollWrapper, {
              click: true,
              mouseWheel: {
                speed: 1,
                easeTime: 1000
              }
            })
          }
        })
      } else {
        document.removeEventListener('click', this.listenClick, true)
      }
    }
  },
  beforeCreate() {
    this.$dynamicComponent.add('HEADER_RIGHT_MENUS', Entrance)
  },
  methods: {
    listenClick(e) {
      if (!this.$refs.noticeCenter.contains(e.target)) {
        this.close()
      }
    },
    close() {
      this.$store.commit('noticeCenter/setVisible', false)
    },
    deleteItem(index) {
      this.$store.commit('noticeCenter/deleteItem', index)
    },
    clearAll() {
      this.$store.commit('noticeCenter/clean', this.close)
      this.$eventBus.emit('NOTICE_CENTER_CLEAN_ALL')
    }
  }
}
</script>

<style lang="stylus">
.noticeCenter
  display flex
  flex-flow column
  width 20vw
  min-width 200px
  height 100%
  position absolute
  right 0
  top 0
  background rgba(#000, 0.8)
  color #fff

  .header
    display flex
    justify-content space-between
    align-items center
    font-size 14px
    flex 0 0 35px
    padding 10px
    background rgba(#000, 0.5)

    .clean
      font-size 13px
      color red
      cursor pointer

  .body
    flex-flow column
    overflow hidden
    font-size 13px

    .content
      padding 10px

    .noticeItem
      display inline-block
      position relative
      width 100%
      margin-bottom 15px
      cursor pointer
      transition all 1s
      background rgba(#000, 0.3)
      border-radius 5px

      &:hover
        background rgba(#000, 0.5)

      .metaBar
        display flex
        justify-content space-between
        align-items center
        height 30px
        padding 0 10px
        font-size 12px

        .time
          line-height 1

        .deleteBtn
          display none

          .icon
            font-size 12px

      &:hover
        .deleteBtn
          display block

      .content
        padding 0 10px 10px 10px

  .listMove
    position absolute
    left 16px
</style>
