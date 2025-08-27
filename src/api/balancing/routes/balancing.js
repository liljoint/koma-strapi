'use strict';

/**
 * balancing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::balancing.balancing');
