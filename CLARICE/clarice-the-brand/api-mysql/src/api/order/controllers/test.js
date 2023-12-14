// Path: ./src/api/order/controllers/test.js

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', () => ({
  async testRoute(ctx) {
    try {
      ctx.body = 'This is a test route response';
    } catch (err) {
      ctx.throw(500, 'Internal Server Error');
    }
  },
}));
