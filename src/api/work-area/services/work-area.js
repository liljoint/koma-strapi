"use strict";

const strapiFactory = require("@strapi/strapi");

/**
 * work-area service
 */

const { createCoreService } = strapiFactory.factories;

module.exports = createCoreService("api::work-area.work-area");
