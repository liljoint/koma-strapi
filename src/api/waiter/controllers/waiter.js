"use strict";

/**
 * waiter controller
 */

const strapiFactory = require("@strapi/strapi");
const { createCoreController } = strapiFactory.factories;

module.exports = createCoreController("api::waiter.waiter", ({ strapi }) => ({
  validateWaiter: async (ctx) => {
    const data = ctx.request.body;

    const res = await strapi.documents("api::waiter.waiter").findFirst({
      filters: {
        password: data.password,
      },
    });

    return { user: res };
  },
}));
