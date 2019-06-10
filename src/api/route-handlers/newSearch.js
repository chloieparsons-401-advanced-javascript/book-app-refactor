'use strict';

/**
 * New Search Route Handler
 * @module src/api/route-handlers/newSearch
 */

/**
 * Render the search form to the client
 * @param {object} response
 */

module.exports = (response) => {
  response.render('pages/searches/new');
};