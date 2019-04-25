export default context => moduleData => {
  if (typeof moduleData === 'object') {
    let promiseAll = []
    for (let moduleName in moduleData) {
      if (!window[moduleName]) {
        promiseAll.push(
          new Promise((resolve, reject) => {
            let script = document.createElement('script')
            script.src = moduleData[moduleName]
            script.onload = () => {
              if (window[moduleName]) {
                window[moduleName](context)
              } else {
                console.warn(moduleName, '模块注册失败，请检查模块名称和地址是否匹配。')
              }
              resolve()
            }
            script.onerror = () => {
              reject('创建模块脚本元素失败。')
            }
            document.body.appendChild(script)
          })
        )
      }
    }
    return Promise.all(promiseAll)
  } else if (typeof moduleData === 'function') {
    moduleData(context)
  } else {
    console.error('参数错误')
  }
}
