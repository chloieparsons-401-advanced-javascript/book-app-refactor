'use strict';

/**
 * Update Book Route Handler
 * @module src/api/route-handlers/updateBook
 */

require('dotenv').config();

let db = process.env.DATABASE;

const errorHandler = require('./../../middleware/500');

/**
 * Update a book in the database
 * @param {object} request
 * @param {object} response
 * @param {object} request.model.put
 * @param {object} request.body
 */

module.exports = (request, response) => {
  if (db === 'pg') {
    request.model.put(request)
      .then(response.redirect(`/books/${request.params.id}`))
      .catch(errorHandler);
  }
  else {
    request.model.put(request.params.id, request.body)
      .then(response.redirect(`/books/${request.params.id}`))
      .catch(errorHandler);
  }
}
