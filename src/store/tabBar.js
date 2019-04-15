export default {
  namespaced: true,
  state: {
    loading: false,
    tabs: []
  },
  mutations: {
    // 加载状态
    loading(state, payload) {
      state.loading = payload
    },
    // 加入路由导航
    addTab(state, route) {
      if (route) {
        let has = state.tabs.find(item => item.path === route.path)
        if (!has) {
          state.tabs.push(route)
        }
      }
    },
    // 删除路由导航
    deleteTab(state, route) {
      let hasIndex = state.tabs.findIndex(item => item.name === route.name)
      // console.log(hasIndex)
      if (hasIndex > -1) {
        state.tabs.splice(hasIndex, 1)
      }
    },
    // 清空路由导航
    clearTabs(state) {
      state.tabs = []
    }
  }
}
