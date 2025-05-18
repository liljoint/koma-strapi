"use strict";

const { default: strapiFactory } = require("@strapi/strapi");

/**
 * request-order controller
 */

const { createCoreController } = strapiFactory.factories;

module.exports = createCoreController("api::request-order.request-order");
