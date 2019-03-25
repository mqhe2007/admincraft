let routesToMenus = arr => {
  let menuItemArr = []
  arr.forEach(item => {
    if (item.meta && item.meta.NonMenu) return false
    let menuItem = {
      active: false,
      children: [],
      index: item.index || (item.meta && item.meta.index) || 0,
      name: item.name,
      title: item.title || item.meta.title,
      url: item.url || '',
      icon: item.icon || (item.meta && item.meta.icon) || '',
      parents: item.parents || (item.meta && item.meta.parents) || ''
    }
    if (item.children && item.children.length > 0) {
      menuItem.children = routesToMenus(item.children)
    }
    menuItemArr.push(menuItem)
  })
  return menuItemArr
}

export default store => (arr, cb) => {
  store.commit('mainMenu/add', routesToMenus(arr))
  if (cb && typeof cb === 'function') cb()
}
