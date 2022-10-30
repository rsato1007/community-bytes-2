/* CONFIGS: db.config.ts */
/*
    RESOURCES FOR LATER
    -------------------
    Pagination: https://blog.logrocket.com/build-rest-api-node-express-mysql/
*/

import mysql from "mysql2";

// Create mysql connection by passing an object of configurations
const DB: mysql.Connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'expressdb',
    port: 3306
});

// Database Connection
DB.connect((err): void => {
    if (err) throw err;
    console.log("Database Connection Successful");
});