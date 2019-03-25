export default (Vue) => (CONST, cb) => {
  if (!CONST) return console.error('CONST参数错误')
  if (Vue.prototype.$const) {
    Vue.prototype.$const = {...Vue.prototype.$const, ...CONST}
  } else {
    Vue.prototype.$const = CONST
  }
  if (cb) cb()
}
