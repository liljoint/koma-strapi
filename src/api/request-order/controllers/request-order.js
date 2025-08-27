"use strict";

const strapiFactory = require("@strapi/strapi");
const order = require("../../order/controllers/order");

/**
 * request-order controller
 */

const { createCoreController } = strapiFactory.factories;

module.exports = createCoreController(
  "api::request-order.request-order",
  ({ strapi }) => ({
    getCurrentRequestOrder: async (ctx) => {
      const data = ctx.request.body;
      const table = await strapi
        .documents("api::table.table")
        .findOne({ documentId: data.documentId });
      const res = await strapi
        .documents("api::request-order.request-order")
        .findFirst({
          filters: {
            isCompleted: { $eq: false },
            table: table,
          },
          populate: {
            orders: {
              populate: {
                product: true,
                table: true,
              },
            },
            table: true,
          },
        });

      return res;
    },
    updateRequestOrder: async (ctx) => {
      try {
        const {
          data: { table, products },
        } = ctx.request.body;
        const tableFinded = await strapi
          .documents("api::table.table")
          .findOne({ documentId: table.documentId });
        const orderRequest = await strapi
          .documents("api::request-order.request-order")
          .findFirst({
            filters: {
              isCompleted: { $eq: false },
              table: tableFinded,
            },
            populate: {
              orders: {
                populate: {
                  product: true,
                  table: true,
                },
              },
            },
          });
        const newProducts = [];
        await Promise.all(
          products.map(async (product) => {
            const orderFounded = orderRequest.orders.find(
              (order) => order.product.productName === product.name,
            );
            if (!orderFounded) {
              newProducts.push(product);
            } else {
              orderFounded.quantity += Number(product.quantity);
              orderFounded.observation = product?.observation;
              orderFounded.totalPrice =
                orderFounded.quantity * orderFounded.unitPrice;
              await strapi.documents("api::order.order").update({
                documentId: orderFounded.documentId,
                data: orderFounded,
                status: "published",
              });
            }
          }),
        );
        await newProducts?.reduce(async (arr, product) => {
          const currentProduct = await strapi
            .documents("api::product.product")
            .findFirst({
              filters: {
                documentId: product.documentId,
              },
            });
          const newOrder = {
            product: currentProduct,
            totalPrice:
              Number(product.quantity) * Number(currentProduct.productPrice),
            unitPrice: currentProduct.productPrice,
            quantity: product.quantity,
            table: tableFinded,
            observation: product?.observation,
          };
          const data = await strapi.documents("api::order.order").create({
            data: newOrder,
            status: "published",
            populate: {
              product: true,
              table: true,
            },
          });
          orderRequest.orders.push(data);
          return arr;
        }, Promise.resolve([]));
        const totalAmount = orderRequest.orders.reduce((sum, order) => {
          sum += Number(order.totalPrice);
          return sum;
        }, 0);
        await strapi.documents("api::request-order.request-order").update({
          documentId: orderRequest?.documentId,
          data: {
            totalAmount,
            orders: orderRequest.orders,
          },
          status: "published",
        });
        return { ...orderRequest, totalAmount };
      } catch (e) {
        console.log(e);
      }
    },
    updateFullOrder: async (ctx) => {
      try {
        const { data } = ctx.request.body;

        const orderRequestFull = await strapi
          .documents("api::request-order.request-order")
          .update({
            documentId: data?.documentId,
            data: data,
            status: "published",
            populate: {
              orders: {
                populate: {
                  product: true,
                  table: true,
                },
              },
              table: true,
            },
          });
        if (orderRequestFull.isCompleted) {
          await strapi.documents("api::table.table").update({
            documentId: orderRequestFull?.table?.documentId,
            data: {
              tableAvailable: true,
            },
            status: "published",
          });
        }
        return orderRequestFull;
      } catch (e) {
        console.log(e);
      }
    },
  }),
);
