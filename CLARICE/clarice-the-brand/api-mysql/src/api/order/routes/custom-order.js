// path: ./src/api/order/routes/custom-order.js

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/orders/webhook',
      handler: 'order.webhook',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      }
    }
  ]
}