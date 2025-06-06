"use strict";

/**
 * order service
 */
const strapiFactory = require("@strapi/strapi");
const { createCoreService } = strapiFactory.factories;

module.exports = createCoreService("api::order.order");
