export default {
  namespaced: true,
  state: {
    info: {
      userName: '张三'
    },
    permissions: ['showcase_error'],
    modules: {}
  },
  mutations: {
    setUserInfo(state, data) {
      state.info = { ...state.info, ...data }
    },
    addUserPermissionTag(state, value) {
      if (!state.permissions.find(item => item === value))
        state.permissions.push(value)
    },
    setModules(state, data) {
      state.modules = { ...state.modules, ...data }
    }
  }
}
