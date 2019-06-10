'use strict';

/**
 * Create Book Route Handler
 * @module src/api/route-handlers/createBook
 */

require('dotenv').config();

let db = process.env.DATABASE;

const errorHandler = require('./../../middleware/500');

/**
 * Create a book in the database
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */

module.exports = (request, response) => {
  if(db === 'pg') {
    request.model.createShelf(request.body)
      .then(result => {

        request.model.post(request.body, result)
          .then(res => response.redirect(`/books/${res.rows[0].id}`));
      })
      .catch(errorHandler);
  }

  else {
    request.model.post(request.body)
      .then(response.redirect('/'))
      .catch(errorHandler);
  }
};