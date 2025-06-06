"use strict";

const strapiFactory = require("@strapi/strapi");

/**
 * request-order service
 */

const { createCoreService } = strapiFactory.factories;

module.exports = createCoreService("api::request-order.request-order");
