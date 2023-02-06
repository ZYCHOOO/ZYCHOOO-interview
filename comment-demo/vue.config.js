const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      // provide global variables
      sass: {
        prependData: `
          @import "~@/styles/mixins.scss";
        `
      }
    }
  }
}
