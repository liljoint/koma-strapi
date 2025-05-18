"use strict";

const { default: strapiFactory } = require("@strapi/strapi");

/**
 * product router
 */

const { createCoreRouter } = strapiFactory.factories;

module.exports = createCoreRouter("api::product.product");
