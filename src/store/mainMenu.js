// import stores from '../router/routes'
export default {
  namespaced: true,
  state: {
    menus: []
  },
  mutations: {
    // 添加菜单
    add(state, menuItem) {
      // 菜单排序
      let MenusSort = menus => {
        menus.sort((a, b) => {
          return a.index - b.index
        })
        return menus.map(menu => {
          if (menu.children && menu.children.length > 0) {
            menu.children = MenusSort(menu.children)
          }
          return menu
        })
      }
      // 通过parent查找到目标菜单对象
      let findMenuByParent = (parents, i, menus) => {
        for (let j = 0; j < menus.length; j++) {
          if (menus[j].name === parents[i]) {
            if (!parents[i + 1]) return menus[j]
            if (menus[j].children && menus[j].children.length > 0)
              return findMenuByParent(parents, i + 1, menus[j].children)
          } else {
            if (menus[j].children && menus[j].children.length > 0)
              return findMenuByParent(parents, i, menus[j].children)
          }
        }
      }
      menuItem.forEach(item => {
        if (!item.parents) {
          state.menus.push(item)
        } else {
          // 解析菜单路径
          let parents = item.parents.split('/')
          let target = findMenuByParent(parents, 0, state.menus)
          if (target) {
            target.children.push(item)
          } else {
            console.warn('父级菜单' + item.parents + '未找到！菜单将被丢弃。')
          }
        }
      })
      state.menus = MenusSort(state.menus)
    },
    // 激活菜单
    active(state, menuName) {
      let findByName = (name, menus, parent) => {
        for (let i = 0; i < menus.length; i++) {
          let item = menus[i]
          if (item.name === name) {
            item.active = true
            if (parent) {
              parent.active = true
              findByName(parent.name, state.menus)
            }
            break
          } else if (item.children) {
            findByName(name, item.children, item)
          }
        }
      }
      findByName(menuName, state.menus)
    },
    // 重置激活状态
    resetActivation(state) {
      let doIt = menus => {
        menus.forEach(item => {
          item.active = false
          if (item.children) {
            doIt(item.children)
          }
        })
      }
      doIt(state.menus)
    },
    clear(state) {
      state.menus = []
    }
  }
}
