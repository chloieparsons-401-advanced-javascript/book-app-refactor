'use strict';

/**
 * Delete Book Route Handler
 * @module src/api/route-handlers/deleteBook
 */

const errorHandler = require('./../../middleware/500');

/**
 * Delete a book from the database
 * @param {object} request
 * @param {object} response
 */

module.exports = (request, response) => {
  let _id = request.params.id;
  
  request.model.delete(_id)
    .then(response.redirect('/'))
    .catch(errorHandler);
}