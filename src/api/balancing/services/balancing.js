'use strict';

/**
 * balancing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::balancing.balancing');
