("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          // const imageUrl = `http://localhost:1337${product.img}`;
          const imageUrl = 'https://i.imgur.com/EHyR2nP.png';
          // const imageUrl = '/public/uploads/clarice_silver_stiletto_boots_fca57244be.jpeg'

          return {
            price_data: {
              currency: "mxn",
              product_data: {
                name: `${item.title}`,
                description: `Size - ${product.size.replace('size', '')}`,
                images: [imageUrl],
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {allowed_countries: ['MX']},
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL+"/success?success=true",
        cancel_url: process.env.CLIENT_URL+"/success?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: {  products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      console.log(error)
      return { error };
    }
  },
}));