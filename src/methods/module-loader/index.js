import createModuleScript from './create-module-script'
export default moduleResourceMap =>
  new Promise((resolve, reject) => {
    let promiseAll = []
    for (let key in moduleResourceMap) {
      if (!window[key]) {
        promiseAll.push(
          new Promise((resolve, reject) => {
            createModuleScript(key, moduleResourceMap[key])
              .then(moduleInit => {
                moduleInit(Vue)
                  .then(() => {
                    resolve()
                  })
                  .catch(() => {
                    reject('模块初始化失败')
                  })
              })
              .catch(error => {
                reject(error)
              })
          })
        )
      }
    }
    Promise.all(promiseAll)
      .then(() => {
        resolve()
      })
      .catch(() => {
        reject()
      })
  })