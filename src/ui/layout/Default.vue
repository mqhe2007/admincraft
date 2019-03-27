<template>
  <div class="dashboard">
    <CHeader></CHeader>
    <div class="body">
      <CSidebar></CSidebar>
      <div class="right">
        <CTabBar></CTabBar>
        <router-view class="pageWrapper"></router-view>
      </div>
      <CNoticeCenter></CNoticeCenter>
    </div>
    <CBackTop></CBackTop>
    <CFooter></CFooter>
  </div>
</template>

<script>
import CHeader from '../components/Header/index.vue'
import CFooter from '../components/Footer.vue'
import CSidebar from '../components/Sidebar.vue'
import CTabBar from '../components/TabBar.vue'
import CNoticeCenter from '../components/NoticeCenter/index.vue'
import CBackTop from '../components/BackTop.vue'
export default {
  name: 'layoutDefault',
  components: {
    CHeader,
    CFooter,
    CSidebar,
    CTabBar,
    CNoticeCenter,
    CBackTop
  }
}
</script>

<style lang="stylus">
.dashboard
  display flex
  flex-flow column
  width 100%
  height 100%

  .body
    display flex
    position relative
    flex auto
    width 100%

    .right
      display flex
      flex auto
      flex-flow column
      overflow hidden
    .pageWrapper
      flex auto
      padding 10px
      overflow auto
</style>
