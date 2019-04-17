import vPermission from './v-permission'
export default (Vue, { store }) => {
  Vue.directive('permission', vPermission(store))
}
