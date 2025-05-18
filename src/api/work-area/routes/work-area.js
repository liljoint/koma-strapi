"use strict";

const { default: strapiFactory } = require("@strapi/strapi");

/**
 * work-area router
 */

const { createCoreRouter } = strapiFactory.factories;

module.exports = createCoreRouter("api::work-area.work-area");
