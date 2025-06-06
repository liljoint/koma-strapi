"use strict";

const strapiFactory = require("@strapi/strapi");

/**
 * product service
 */

const { createCoreService } = strapiFactory.factories;

module.exports = createCoreService("api::product.product");
