// Models User.js
const userSchema = {
    id: { type: 'int', primaryKey: true },
    image: 'string',
    username: 'string',
    // Reviews
    // Recipes
    password: 'string',
    email: 'string',
    // Saved recipes
}

module.exports = userSchema;