// database/seeders index.js
/*
    This file executes all database seeders.
*/
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});
const mysql = require('mysql2');
const users = require("./userSeeder");
const tables = [
    {name: 'users', columns: users.columns, rows: users.rows}
]

const DB = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'expressdb',
    port: 3306
});

DB.connect((err) => {
    if (err) throw err;
    tables.forEach((table) => {
        DB.query(`INSERT INTO ${table.name}${table.columns} VALUES ?`, [table.rows], (err, results) => {
            if (err) throw err;
            console.log("Data inserted successfully");
            return results;
        });
    });

    DB.end();
})