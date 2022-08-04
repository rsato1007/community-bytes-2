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
    console.log("Connected!");
})