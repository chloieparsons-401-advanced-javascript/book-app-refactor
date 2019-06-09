'use strict';

const bookshelvesSchema = require('./bookshelves-schema');
const MongoModel = require('../mongo-models');

class Bookshelves extends MongoModel {}

module.exports = new Bookshelves(bookshelvesSchema);