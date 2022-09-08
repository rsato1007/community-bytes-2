/* MODELS: Recipe.ts */

export const recipeSchema = {
    id: { type: 'int', primaryKey: true, notNUll: true, autoIncrement: true },
    name: { type: 'text', notNULL: true },
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
    description: 'text',
    image: 'string',
    time: 'string',
    serving: 'string',
    /* Convert to one to many relationships */
    step: 'string',
    tip: 'string',
    ingredient: 'string'
}