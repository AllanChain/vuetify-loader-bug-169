module.exports = {
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      progressiveImages: {
        sharp: true
      }
    }])
  },
  transpileDependencies: [
    'vuetify'
  ]
}
