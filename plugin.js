export default ({ app: { router } }) => {
  let ready = false

  router.onReady(() => {
    ready = true
  })

  function create () {
    const settings = {
      project: '<%= options.id %>',
      attributes_dataset: '<%= JSON.stringify(options.attributesDataset) %>'
    }
    try {
      // eslint-disable-next-line
      window.top100Counter = new window.top100(settings)
    } catch (e) {}

    router.afterEach((to, from) => {
      if (!ready) {
        return
      }
      window.top100Counter.trackPageview()
    })
  }

  if (window.top100) {
    create()
  } else {
    ;(function (w, c) {
      w[c] = w[c] || [].push(create)
    })(window, '_top100q')
  }
}
