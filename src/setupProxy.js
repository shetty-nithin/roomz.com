const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        '/v1',
        createProxyMiddleware({ target: "https://roomzapi.herokuapp.com/roomz/api", changeOrigin: true})
    )
}
