// Models User.js
// Documentation for creating tables: https://db-migrate.readthedocs.io/en/latest/API/SQL/#createtabletablename-columnspec-callback
const userSchema = {
    id: { type: 'int', primaryKey: true, notNUll: true, autoIncrement: true },
    image: 'string',
    username: 'string',
    password: 'string',
    email: 'string',
    // Saved recipes
    // Reviews
}

module.exports = userSchema;