'use strict';

const client = require('../../../../index');
const postgresModel = require('../postgres-model');

class Books extends postgresModel {
  
  createShelf(shelf) {
    let normalizedShelf = shelf.bookshelf.toUpperCase();
    let SQL = `SELECT if from bookshelves where name =$1;`;
    let val = [normalizedShelf];

    return this.client.query(SQL, val)
      .then(results => {
        if (results.rowCount) {
          return results.rows[0].id;

        } else {
          let INSERT = `INSERT INTO bookshelves(name) VALUES($1) RETURNING id;`;
          let insertVal = [shelf.bookshelf];

          return this.client.query(INSERT, insertVal);
        }
      })
  }
}

const books = new Books(client);

module.exports = books;