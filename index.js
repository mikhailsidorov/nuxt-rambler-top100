const path = require('path')

module.exports = function ramblerTop100 (options) {
  if (this.options.dev && process.env.NODE_ENV !== 'production') {
    return
  }

  this.options.head.script.push({
    src: 'https://st.top100.ru/top100/top100.js',
    async: true,
    type: 'text/javascript'
  })

  this.addPlugin({ src: path.resolve(__dirname, 'plugin.js'), ssr: false, options })
}

module.exports.meta = require('./package.json')
