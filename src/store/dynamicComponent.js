import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    HEADER_RIGHT_MENUS: {}
  },
  mutations: {
    // 注册插槽组件
    add(state, { position, component }) {
      if (position && component) {
        let componentName = component.name
        if (!state[position]) throw new Error(position + '插槽位置不存在')
        if (!state[position][componentName]) {
          Vue.set(state[position], componentName, component)
        }
      } else {
        throw new Error(
          '插槽添加方法接受一个对象，必须配置position, component属性。'
        )
      }
    },
    destroy(state, { position, name }) {
      if (position && name) {
        if (!state[position]) throw new Error(position + '插槽位置不存在')
        if (!state[position][name]) throw new Error(position + '插槽中不存在组件' + name)
        Vue.delete(state[position], name)
      } else {
        throw new Error(
          '插槽添加方法接受一个对象，必须配置position, name属性。'
        )
      }
    }
  }
}
