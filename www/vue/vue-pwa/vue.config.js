const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  configureWebpack: {
    devtool: 'source-map',
  },
  transpileDependencies: true,
  pwa: {
    name: 'Bouncy Red Ball',
    short_name: 'Bouncy',
    themeColor: '#5F5F5F',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    icons: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      msTileImage: 'img/icons/msapplication-icon-150x150.png',
    },
    display: 'standalone',
  },
});
