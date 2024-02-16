'use strict';

/**
 * request-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request-order.request-order');
