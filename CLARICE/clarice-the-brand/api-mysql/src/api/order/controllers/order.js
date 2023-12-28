// @ts-nocheck
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
      for (const product of products) {
        const productSize = await strapi.entityService.findOne("api::product-size.product-size", product.sizeId, {
          fields: ["quantity"],
        });

        if (!productSize || productSize.quantity < product.quantity) {
          ctx.response.status = 400;
          return { error: `Product size out of stock: ${product.title}, size: ${product.size}` };
        }
      }

      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          const imageUrl = 'https://i.imgur.com/EHyR2nP.png';

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
        shipping_address_collection: { allowed_countries: ['MX'] },
        payment_method_types: ["card"],
        mode: "payment",
        metadata: {
          order: JSON.stringify(products)
        },
        success_url: process.env.CLIENT_URL + "/success?success=true",
        cancel_url: process.env.CLIENT_URL + "/success?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      console.log(error)
      return { error };
    }
  },

  async webhook(ctx) {
    const event = ctx.request.body;

    try {
      switch (event.type) {
        case 'checkout.session.completed':
          const session = event.data.object;

          let orderItems = [];
          if (session.metadata && session.metadata.order) {
            orderItems = JSON.parse(session.metadata.order);
          }

          for (const item of orderItems) {
            const productSizeId = item.sizeId;
            const quantityPurchased = item.quantity;

            console.log(`Processing product size ID ${productSizeId}, quantity ${quantityPurchased}`);

            const productSize = await strapi.entityService.findOne("api::product-size.product-size", productSizeId, {
              fields: ["quantity"],
            });

            if (productSize) {
              const updateQuantity = Math.max(0, productSize.quantity - quantityPurchased);
              console.log(`Updating product size ID ${productSizeId} from ${productSize.quantity} to ${updateQuantity}`);

              await strapi.entityService.update("api::product-size.product-size", productSizeId, {
                data: { quantity: updateQuantity },
              });

              console.log(`Updated product size ID ${productSizeId}`);
            } else {
              console.log(`Product size not found for ID ${productSizeId}`);
            }
          }
          break;
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
    } catch (error) {
      console.error('Error processing webhook:', error);
    }
    ctx.send({ received: true });
  }

}));