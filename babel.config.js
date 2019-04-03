module.exports = function(api) {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage'
      }
    ]
  ]
  const plugins = ['@babel/plugin-syntax-dynamic-import']
  return {
    presets,
    plugins
  }
}
