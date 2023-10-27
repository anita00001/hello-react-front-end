const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/v1/greetings/random',  // Specify the API endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://127.0.0.1:3000',  // URL of your Rails server
      changeOrigin: true,
    })
  );
};
