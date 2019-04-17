export default function(moduleResourceMap) {
  let promiseAll = []
  for (let moduleName in moduleResourceMap) {
    if (!window[moduleName]) {
      promiseAll.push(
        new Promise((resolve, reject) => {
          let script = document.createElement('script')
          script.src = moduleResourceMap[moduleName]
          script.onload = () => {
            window[moduleName](this)
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
}
