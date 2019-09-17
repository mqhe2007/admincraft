import ability from './ability/index'
export default function(Vue, { router, store }) {
  if (!router) return console.error('admincraft:', '必须传入router实例')
  if (!store) return console.error('admincraft:', '必须传入store实例')
  ability({ Vue, router, store })
}
