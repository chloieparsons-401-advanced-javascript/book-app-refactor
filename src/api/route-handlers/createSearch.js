'use strict';

/**
 * Create Search Route Handler
 * @module src/api/route-handlers/createSearch
 */

const errorHandler = require('./../../middleware/500');
const superagent = require('superagent');
const Book = require('../../models/book-class.js');

/**
 * Search the database
 * @param {object} request
 * @param {object} response
 */

 module.exports = (request, response) => {

  let url = 'https://wwww.googleapis.com/books/v1/volumes?q=';

  if (request.body.search[1] === 'title') { url += `+intitle:${request.body.search[0]}`; }
  if (request.body.search[1] === 'author') { url += `+inauthor:${request.body.search[0]}`; }

  superagent.get(url)
    .then(apiResponse => 
      apiResponse.body.items.map(bookResult => new Book(bookResult.volumeInfo)))

    .then(results => 
      response.render('pages/searches/show', { results: results }))

    .catch(errorHandler);
}