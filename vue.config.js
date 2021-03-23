module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/app.scss";`
      }
    }
  },
  pwa: {
    name: "Ytmdl",
    start_url: "/",
    workboxOptions: {
      exclude: [/_redirects/, /^.*map$/],
      swDest: "sw.js",
      navigateFallback: "index.html",
      cleanupOutdatedCaches: true
    },
    ignoreUrlParametersMatching: [/./]
  }
};
