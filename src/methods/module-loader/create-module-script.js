// 创建模块script
export default (moduleName, src) =>
  new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    document.body.appendChild(script)
    script.onload = () => {
      resolve(window[moduleName])
    }
    script.onerror = () => {
      reject('创建模块脚本元素失败。')
    }
  })
