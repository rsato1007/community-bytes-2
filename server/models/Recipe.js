// Models Recipe.js
const recipeSchema = {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    user: {
        type: 'int',
        foreignKey: {
            name: 'user_id_fk',
            table: 'users',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT'
            },
            mapping: 'id'
        }
    },
    description: 'string',
    ingredient: 'string',
    image: 'string',
    time: 'string',
    serving: 'string',
    step: 'string',
    tip: 'string'

    // TODO:
    // reviews
    // ingredients as another table
}

module.exports = recipeSchema;