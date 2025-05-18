"use strict";

const { default: strapiFactory } = require("@strapi/strapi");

/**
 * product controller
 */

const { createCoreController } = strapiFactory.factories;

module.exports = createCoreController("api::product.product");
