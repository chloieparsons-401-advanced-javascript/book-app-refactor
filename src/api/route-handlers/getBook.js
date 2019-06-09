'use strict';

/**
 * Get A Single Book Route Handler
 * @module src/api/route-handlers/getBook
 */

require('dotenv').config();

let db = process.env.DATABASE;

const errorHandler = require('./../../middleware/500');

/**
 * Gets all books from the database
 * @param {object} request
 * @param {object} response
 * @param {object} next
 */

module.exports = (request, response) => {
  let id = [request.params.id];

  request.model.get(id)
    .then(result => {
      if(db ==='pg') {
        response.render('pages/books/show', { book: result.rows[0], bookshelves: request.model.shelves.rows});
      
      }
      else {
        response.render('pages/books/show', { book: result[0], bookshelves: result});
      }
    })
    .catch(errorHandler);
}