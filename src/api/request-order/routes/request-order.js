'use strict';

const { default: strapiFactory } = require("@strapi/strapi");

/**
 * request-order router
 */

const { createCoreRouter } = strapiFactory.factories;

module.exports = createCoreRouter('api::request-order.request-order');
