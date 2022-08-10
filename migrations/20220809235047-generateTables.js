'use strict';

var dbm;
var type;
var seed;
/* IMPORT SCHEMAS */
const userSchema = require('../server/models/User');
const recipeSchema = require('../server/models/Recipe');

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('users', userSchema, (err) => {
    if (err) throw err;
    console.log("User Table Successfully Created");
    return;
  });

  db.createTable('recipes', recipeSchema, (err) => {
    if (err) throw err;
    console.log("Recipe Table Successfully Created");
    return;
  });
  return null;
};

exports.down = function(db) {
  db.dropTable('users', (err) => {
    if (err) throw err;
    console.log("User Table Dropped Successfully");
    return;
  });

  db.dropTable('recipes', (err) => {
    if (err) throw err;
    console.log("Recipe Table Dropped Successfully");
    return;
  });
  return null;
};

exports._meta = {
  "version": 1
};
