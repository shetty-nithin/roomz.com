const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        '/v1',
        createProxyMiddleware({ target: "https://aqueous-tor-55678.herokuapp.com/roomz/api", changeOrigin: true})
    )
}
