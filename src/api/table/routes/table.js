"use strict";

const strapiFactory = require("@strapi/strapi");

/**
 * table router
 */

const { createCoreRouter } = strapiFactory.factories;

module.exports = createCoreRouter("api::table.table", {
  method: "POST",
  path: "/api/tables/create-and-open",
  handler: "tables.createAndOpenTable",
});
