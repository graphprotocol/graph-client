module.exports = new Proxy(
  {},
  {
    get: function (target, key) {
      if (key === 'promises') {
        return new Proxy(
          {},
          {
            get: function (target, key) {
              return () => Promise.resolve({})
            },
          },
        )
      }
      return () => {}
    },
  },
)
