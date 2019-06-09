'use strict';

/**
 * Get Books Route Handler
 */

require('dotenv').config();

let db = process.env.DATABASE;

const errorHandler = require('./../../middleware/500');

/**
 * Gets all books from the database
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */

 module.exports = (request, response, next) => {
   request.model.get()
    .then(results => {
      if(db === 'pg') {

        if (results.rows.rowCount === 0) {
          response.render('pages/searches/new');

        } else {
          response.render('pages/index', { books: results.rows });
        }
      }
      else {
        if(results.length === 0) {
          response.render('pages/searches/new');

        } else {
          response.render('pages/index', { books: results });
        }
      }
    })

    .catch(errorHandler);
 }