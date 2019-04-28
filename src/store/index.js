import dynamicComponent from './dynamicComponent'
import app from './app'

export default (Vuex, { Vue }) => {
  Vue.use(Vuex)
  return new Vuex.Store({
    modules: {
      dynamicComponent,
      app
    }
  })
}
