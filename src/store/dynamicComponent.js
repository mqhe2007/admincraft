import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    GLOBAL: {}
  },
  mutations: {
    // 注册插槽组件
    add(state, { component, position = 'GLOBAL' }) {
      let componentName = component.name
      if (!state[position]) {
        Vue.set(state, position, {})
      }
      if (!state[position][componentName]) {
        Vue.set(state[position], componentName, component)
      }
    },
    destroy(state, { name, position = 'GLOBAL' }) {
      if (!state[position]) throw new Error(position + '插槽位置不存在')
      if (!state[position][name])
        throw new Error(position + '插槽中不存在组件' + name)
      Vue.delete(state[position], name)
    }
  }
}
