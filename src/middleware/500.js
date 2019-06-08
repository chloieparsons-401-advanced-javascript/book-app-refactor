'use strict';

/**
 * @module 500-Error
 */

 /**
  * Handles 500-Error (Server Error)
  * @param {} err
  * @param {} req
  * @param {} res
  * @param {} next - goes to next piece of middleware
  */

  module.exports = (err, req, res, next) => {
    let error = { error: err};
    res.status(500).json(error).end();
  };