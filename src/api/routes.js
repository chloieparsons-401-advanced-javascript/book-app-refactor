'use strict';

/**
 * Router Module
 * @module src/api/routes
 */

// 3rd Party Resources
const cwd = process.cwd();
const express = require('express');
const methodOverride = require('method-override');
const router = express.Router();
const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);

//Route Handlers
const getBooks = require('./route-handlers/getBooks.js');
const createSearch = require('./route-handlers/createSearch.js');
const newSearch = require('./route-handlers/newSearch.js');
const getBook = require('./route-handlers/getBook.js');
const createBook = require('./route-handlers/createBook.js');
const updateBook = require('./route-handlers/updateBook.js');
const deleteBook = require('./route-handlers/deleteBook.js');

//Application Middleware
router.use(express.urlencoded({extended:true}));
router.use(express.static('public'));

/**
 * Method Override
 * @param {object} req
 */
router.use(methodOverride ((request, response) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body){
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}));

// API Routes (route definitions moved here per lab specs)
router.get('/', getBooks);
router.post('/searches', createSearch);
router.get('/searches/new', newSearch);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

router.use(modelFinder);

module.exports = router;
