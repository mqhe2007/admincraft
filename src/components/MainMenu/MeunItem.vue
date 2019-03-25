<template>
  <div class="menuItem"
       :class="{menuItemEnd: isEnd, active: itemData.active}">
    <div class="title"
         @click="clickTitle">
      <svg class="icon"
           aria-hidden="true">
        <use :xlink:href="'#icon-' + itemData.icon"></use>
      </svg>
      <span>{{itemData.title}}</span>
      <svg class="icon expandPointer"
           v-if="!isEnd"
           aria-hidden="true">
        <use xlink:href="#icon-down"></use>
      </svg>
    </div>
    <div v-if="!isEnd"
         class="menuList">
      <CMenuItem v-for="(item, index) in itemData.children"
                 :key="index"
                 :itemData="item"></CMenuItem>
    </div>
  </div>
</template>
<script>
export default {
  name: 'menuItem',
  props: ['itemData'],
  computed: {
    isEnd() {
      return !this.itemData.children || this.itemData.children.length === 0
    }
  },
  beforeCreate() {
    this.$options.components.CMenuItem = require('./MeunItem.vue').default
  },
  methods: {
    clickTitle() {
      if (this.itemData.children && this.itemData.children.length > 0) {
        if (!this.itemData.active) {
          this.$store.commit('mainMenu/resetActivation')
          this.$store.commit('mainMenu/active', this.itemData.name)
          // 复显当前路由
          this.itemData.children.forEach(item => {
            if (item.name === this.$route.name) {
              this.$store.commit('mainMenu/active', this.$route.name)
            }
          })
        } else {
          this.itemData.active = false
        }
      } else {
        // 当前菜单为导航菜单
        // 外链导航
        if (this.itemData.url) return window.open(this.itemData.url)
        // 站内导航
        this.$router.push({ name: this.itemData.name })
      }
    }
  }
}
</script>
<style lang="stylus">
.menuItem
  color #fff
  font-size 15px

  &.active
    &>.title
      .expandPointer
        transform rotateZ(180deg)

    &>.menuList
      display block
      padding-left 15px

  &.menuItemEnd
    &.active
      background linear-gradient(to right, #011526, #4192D9)

  .title
    padding 15px
    display flex
    justify-content flex-start
    align-items center
    cursor pointer

    &:hover
      background linear-gradient(to right, #011526, #4192D9)

    .icon
      font-size 17px
      margin-right 5px

    .expandPointer
      margin-left 10px
      font-size 12px
      transition transform 0.3s

  .menuList
    display none
</style>

