import { print } from '../tool/'
export default context => moduleData => {
  if (typeof moduleData === 'object') {
    /** 通过模块清单加载模块 */
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
                print(moduleName, '模块加载完毕')
              } else {
                console.warn(
                  moduleName,
                  '模块注册失败，请检查模块名称和地址是否匹配。'
                )
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
    /** 通过模块函数加载模块 */
    moduleData(context)
  } else {
    console.error('参数错误')
  }
}