'use strict';

require('dotenv').config();

/**
 * This model tells the server which database to use.
 * @param {} req
 * @param {} res
 * @param {} next
 */

 module.exports = (req, res, next) => {
   let db = process.env.DATABASE;
   req.model = require(`../models/${db}models/books/book-model.js`);

   next();
 };