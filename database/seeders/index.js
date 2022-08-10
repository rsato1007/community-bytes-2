// database/seeders index.js
/*
    This file executes all database seeders.
*/
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});
const mysql = require('mysql2');

const DB = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'expressdb',
    port: 3306
});

DB.connect((err) => {
    if (err) throw err;
    DB.query(`INSERT INTO users (image,username,password,email) VALUES('testing','testing','testing','testing')`, (err, results) => {
        if (err) throw err;
        console.log("Data inserted successfully");
        return results;
    });

    DB.end();
})