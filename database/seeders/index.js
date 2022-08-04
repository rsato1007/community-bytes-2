// database/seeders index.js
/*
    This file executes all database seeders.
*/
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});
require('../../server/models/index');