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
        state[position] = {}
      }
      if (!state[position][componentName]) {
        state[position][componentName] = component
      }
    },
    destroy(state, { name, position = 'GLOBAL' }) {
      if (!state[position])
        throw new Error('欲删除组件的插槽位置错误：' + position)
      if (!state[position][name])
        throw new Error(position + '插槽中不存在组件' + name)
      delete state[position].name
    }
  }
}
