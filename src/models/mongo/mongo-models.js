'use strict';

/**
 * @Class Mongo Model 
 * @desc 
 */


class MongoModel {

  /**
   * Model constructor takes in schema
   * @param {} schema 
   */

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }
  /**
   * Posts a new record
   * @method post
   * @param {*} record
   * @desc
   */
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   * Updates a record based on its id
   * @method put
   * @param {integer} _id 
   * @param {string} record 
   * 
   * Updates record data
   * @desc
   */
  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   * Deletes record based on ID
   * @method delete
   * @param {integer} _id 
   * 
   * Deletes record
   * @desc
   */

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = MongoModel;
