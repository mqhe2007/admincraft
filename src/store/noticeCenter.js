export default {
  namespaced: true,
  state: {
    list: [],
    visible: false
  },
  mutations: {
    setVisible(state, value) {
      state.visible = value
    },
    addNotice(state, data) {
      state.list.push(data)
    },
    deleteItem(state, index) {
      state.list.splice(index, 1)
    },
    clean(state, cb) {
      let num = state.list.length
      let timer = setInterval(() => {
        if (num) {
          state.list.pop()
          num--
        } else {
          clearInterval(timer)
          cb()
        }
      }, 100)
    }
  }
}
