import Vue from 'vue'
Vue.prototype.$tool = {
  isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]'
  }
}
