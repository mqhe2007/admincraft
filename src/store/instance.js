// import stores from '../router/routes'
export default {
  namespaced: true,
  state: {
    homeRouteName: '',
    options: {
      logo: {
        
      }
    }
  },
  mutations: {
    setOptions(state, options) {
      state.options = {...state.options, ...options}
    },
    setHomeRouteName(state, value) {
      state.homeRouteName = value
    },
  }
}
