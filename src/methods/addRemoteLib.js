export default libArray => {
  libArray.forEach(item => {
    if (/\.js$/.test(item)) {
      document.write(`<script src="${item}" defer></script>`)
      // let script = document.createElement('script')
      // script.setAttribute('src', item)
      // document.head.appendChild(script)
      // script.onload = () => {
      //   resolve()
      // }
      // script.onerror = () => {
      //   reject()
      // }
    } else {
      let link = document.createElement('link')
      link.href = item
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
  })
}
