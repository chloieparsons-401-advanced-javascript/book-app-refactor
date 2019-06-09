'use strict';

const MongoModel = require('../mongo-models');
const schema = require('./book-schema');

class Books extends MongoModel {}

const books = new Books(schema);

module.exports = books;