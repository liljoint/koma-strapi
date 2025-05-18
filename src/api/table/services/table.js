"use strict";

const { default: strapiFactory } = require("@strapi/strapi");

/**
 * table service
 */

const { createCoreService } = strapiFactory.factories;

module.exports = createCoreService("api::table.table");
