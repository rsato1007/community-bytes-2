// Models User.js
const userSchema = {
    id: { type: 'int', primaryKey: true },
    image: 'string',
    username: 'string',
    password: 'string',
    email: 'string',
    // Saved recipes
}

module.exports = userSchema;