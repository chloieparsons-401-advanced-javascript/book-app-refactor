'use strict';

class postgresModel {

  /**
   * Model constructor takes in schema
   * @param {} schema 
   */

  constructor(client) {
    this.client = client;
  }

  get(id) {
    if(id) {
      let SQL = 'SELECT books.*, bookshelves.name FROM books INNER JOIN bookshelves on books.bookshelf_id=bookshelves.id WHERE books.id=$1;';
      return this.client.query(SQL);

    } else { 
      let SQL = 'SELECT * FROM books;';
      return this.client.query(SQL);
    }
  }

  getBookshelves() {
    let SQL = 'SELECT DISTINCT id, name FROM bookshelves ORDER BY name;';
    return this.client.query(SQL);
  }

  post(body, id){
    let { title, author, isbn, image_url, description } = body;
    let SQL = 'INSERT INTO books(title, author, isbn, image_url, description, bookshelf_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING id;';
    let values = [title, author, isbn, image_url, description, id];

    return this.client.query(SQL, values);
  }

  put(values) {
    let SQL = `UPDATE books SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5, bookshelf_id=$6 WHERE id=$7;`;
    return this.client.query(SQL, values);
  }

  delete(id) {
    let SQL = 'DELETE FROM books WHERE id=$1;';
    return this.client.query(SQL, id);
  }
}

module.exports = postgresModel;
