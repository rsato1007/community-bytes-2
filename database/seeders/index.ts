/* SEEDERS: index.ts */

/* IMPORT EXTERNAL MODULES */
import path from "path";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config({path: path.resolve(__dirname, '../.env')});

/* IMPORT INTERNAL MODULES */
// import users from "./userSeeder";

// Currently template for MYSQL table looks like.
const tables = [
    // {name: 'users', columns: users.columns, rows: users.rows}
]

// g
const DB = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'expressdb',
    port: 3306
});

/**
 * Iterates through each database seeder and populates database.
 */
// DB.connect((err) => {
//     if (err) throw err;
//     tables.forEach((table) => {
//         DB.query(`INSERT INTO ${table.name}${table.columns} VALUES ?`, [table.rows], (err, results) => {
//             if (err) throw err;
//             console.log(`${table.name} data successfully inserted`);
//             return results;
//         });
//     });

//     DB.end();
// })