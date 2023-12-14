// Path: ./src/api/order/routes/test.js

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/order/test',
      handler: 'test.testRoute',
      config: {
        auth: false,
      },
    },
  ],
};
