module.exports = {
  devServer: {
    proxy: {
      "/my-web": {
        target: 'http://localhost:4000',
        changeOrigin: true
      }
    }
  }
}
