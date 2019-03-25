import Vue from 'vue'
import Vuex from 'vuex'
import dynamicComponent from './dynamicComponent'
import tabBar from './tabBar'
import user from './user'
import noticeCenter from './noticeCenter'
import mainMenu from './mainMenu'
import instance from './instance'



export default () => {
  Vue.use(Vuex)
  return new Vuex.Store({
    modules: {
      dynamicComponent,
      tabBar,
      user,
      noticeCenter,
      mainMenu,
      instance
    }
  })
}
