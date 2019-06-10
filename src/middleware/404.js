'use strict';

/**
 * @module 404-Error
 */

/**
 * Handles 404 Error Response if file not found
 * @param {} req - request
 * @param {} res - response
 * @param {} next - goes to next piece of middleware
 */

module.exports = (req, res, next) => {
  let error = { error: 'Resource Not Found'};
  res.status(404).json(error).end();
};