"use strict";

/**
 * order controller
 */
const strapiFactory = require("@strapi/strapi");
const { createCoreController } = strapiFactory.factories;

module.exports = createCoreController("api::order.order");
