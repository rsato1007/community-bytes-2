// Models Recipe.js
const recipeSchema = {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    description: 'string',
    ingredient: 'string',
    image: 'string',
    time: 'string',
    serving: 'string',
    step: 'string',
    tip: 'string'

    // TODO:
    // reviews
    // users
    // ingredients as another table
}

module.exports = recipeSchema;