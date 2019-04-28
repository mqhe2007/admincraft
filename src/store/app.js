export default {
  namespaced: true,
  state: {
    config: {}
  },
  mutations: {
    setConfig(state, config) {
      state.config = { ...state.config, ...config }
    }
  }
}
