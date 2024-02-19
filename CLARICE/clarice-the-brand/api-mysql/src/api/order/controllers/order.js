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
      let productIdsForMetadata = [];
      for (const product of products) {
        const productSize = await strapi.entityService.findOne("api::product-size.product-size", product.sizeId, {
          fields: ["quantity"],
        });

        if (!productSize || productSize.quantity < product.quantity) {
          ctx.response.status = 400;
          return { error: `Product size out of stock: ${product.title}, size: ${product.size}` };
        }
        productIdsForMetadata.push(product.id);
      }

      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          // const imageUrl = 'https://i.imgur.com/EHyR2nP.png';

          return {
            price_data: {
              currency: "mxn",
              product_data: {
                name: `${item.title}`,
                description: `Size - ${product.size.replace('size', '')}`,
                // images: [imageUrl],
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const orderRecord = await strapi.service("api::order.order").create({
        data: { products, status: 'pending' },
      });

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ['MX'] },
        payment_method_types: ["card"],
        mode: "payment",
        metadata: {
          orderId: orderRecord.id.toString(),
        },
        success_url: process.env.CLIENT_URL + "/success",
        cancel_url: process.env.CLIENT_URL + "/cancelled",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      console.error('Stripe session creation error:', error.message);
      ctx.response.status = 500;
      return { error: error.message };
    }
  },

  async webhook(ctx) {
    const event = ctx.request.body;

    try {
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        // retrieve the order ID stored in the Stripe session's metadata
        const orderId = session.metadata.orderId;

        // fetch the order details, including populated products, from your database
        const order = await strapi.entityService.findOne("api::order.order", orderId, {
          fields: ['products'],
          populate: { path: 'products', populate: { path: 'sizeId' } },
        });

        if (!order || !order.products) {
          console.error(`Order with ID ${orderId} not found or contains no products.`);
          return;
        }

        // iterate over each product in the order to process inventory updates
        for (const item of order.products) {
          const productSizeId = item.sizeId;
          const quantityPurchased = item.quantity;

          console.log(`Processing product size ID ${productSizeId}, quantity ${quantityPurchased}`);

          // fetch the current product size details to check and update inventory
          const productSize = await strapi.entityService.findOne("api::product-size.product-size", productSizeId, {
            fields: ["quantity"],
          });

          if (productSize && productSize.quantity >= quantityPurchased) {
            // ff enough stock is available, proceed to update the quantity
            const updateQuantity = productSize.quantity - quantityPurchased;
            await strapi.entityService.update("api::product-size.product-size", productSizeId, {
              data: { quantity: updateQuantity },
            });

            console.log(`Updated product size ID ${productSizeId} from ${productSize.quantity} to ${updateQuantity}`);
          } else {
            // log if the product size is not found or stock is insufficient
            console.error(`Product size not found or stock insufficient for ID ${productSizeId}`);
          }
        }
      } else {
        console.log(`Unhandled event type ${event.type}`);
      }
    } catch (error) {
      console.error('Error processing webhook:', error);
    }
    ctx.send({ received: true });
  }
}));