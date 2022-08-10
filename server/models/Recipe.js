// Models Recipe.js
// Documentation for creating tables: https://db-migrate.readthedocs.io/en/latest/API/SQL/#createtabletablename-columnspec-callback
const recipeSchema = {
    id: { type: 'int', primaryKey: true, notNUll: true, autoIncrement: true },
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
}

module.exports = recipeSchema;