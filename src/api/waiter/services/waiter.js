"use strict";

/**
 * waiter service
 */
const strapiFactory = require("@strapi/strapi");
const { createCoreService } = strapiFactory.factories;

module.exports = createCoreService("api::waiter.waiter");
