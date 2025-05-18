"use strict";

const { default: strapiFactory } = require("@strapi/strapi");

/**
 * work-area controller
 */

const { createCoreController } = strapiFactory.factories;

module.exports = createCoreController("api::work-area.work-area");
