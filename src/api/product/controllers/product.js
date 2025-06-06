"use strict";

const strapiFactory = require("@strapi/strapi");

/**
 * product controller
 */

const { createCoreController } = strapiFactory.factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  addProduct: async (ctx) => {
    const { data } = ctx.request.body;
    console.log(data);
    return null;
  },
}));
