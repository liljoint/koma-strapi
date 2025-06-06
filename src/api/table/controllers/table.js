"use strict";

const strapiFactory = require("@strapi/strapi");

/**
 * table controller
 */

const { createCoreController } = strapiFactory.factories;
module.exports = createCoreController("api::table.table", ({ strapi }) => ({
  createAndOpenTable: async (ctx) => {
    const {
      data: { documentId },
    } = ctx.request.body;

    const table = await strapi
      .documents("api::table.table")
      .findOne({ documentId });
    const openedTable = await strapi.documents("api::table.table").update({
      documentId,
      data: { tableAvailable: false },
      status: "published",
    });

    const orderData = {
      table: table,
      isCompleted: false,
    };
    const res = await strapi
      .documents("api::request-order.request-order")
      .create({ data: orderData, status: "published" });

    return openedTable;
  },
}));
