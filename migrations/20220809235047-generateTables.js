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

// If a table uses a foreign key, make sure it's dropped before
// dropping the other table. Order here does matter.
exports.down = function(db) {
  db.dropTable('recipes', (err) => {
    if (err) throw err;
    console.log("Recipe Table Dropped Successfully");
    return;
  });

  db.dropTable('users', (err) => {
    if (err) throw err;
    console.log("User Table Dropped Successfully");
    return;
  });

  return null;
};

exports._meta = {
  "version": 1
};
