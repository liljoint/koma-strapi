"use strict";

/**
 * waiter router
 */

const strapiFactory = require("@strapi/strapi");
const { createCoreRouter } = strapiFactory.factories;

module.exports = createCoreRouter("api::waiter.waiter");
