"use strict";

const { default: strapiFactory } = require("@strapi/strapi");

/**
 * table controller
 */

const { createCoreController } = strapiFactory.factories;
module.exports = createCoreController("api::table.table", ({ strapi }) => ({
  createAndOpenTable: async (ctx) => {
    ctx.body;
    const newOrder = await strapi.entityService.create("api::order.order", {
      data: {},
    });

    return { data: newOrder };
  },
}));
