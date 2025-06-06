"use strict";

/**
 * order router
 */
const strapiFactory = require("@strapi/strapi");
const { createCoreRouter } = strapiFactory.factories;

module.exports = createCoreRouter("api::order.order");
