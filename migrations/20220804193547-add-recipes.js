'use strict';

var dbm;
var type;
var seed;
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
  db.createTable('recipes', recipeSchema, () => console.log("Recipe Table Created"));
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
