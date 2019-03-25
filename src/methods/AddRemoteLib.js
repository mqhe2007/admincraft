export default () => libArray =>
  new Promise((resolve, reject) => {
    let promiseAll = []
    libArray.forEach(item => {
      promiseAll.push(
        new Promise((resolve, reject) => {
          if (/\.js$/.test(item)) {
            let script = document.createElement('script')
            script.src = item
            document.body.appendChild(script)
            script.onload = () => {
              resolve()
            }
            script.onerror = () => {
              reject()
            }
          } else {
            let link = document.createElement('link')
            link.href = item
            link.rel = 'stylesheet'
            document.head.appendChild(link)
            link.onload = () => {
              resolve()
            }
            link.onerror = () => {
              reject()
            }
          }
        })
      )
    })
    Promise.all(promiseAll)
      .then(() => {
        resolve()
      })
      .catch(() => {
        reject()
      })
  })
