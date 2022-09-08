/* Models: index.ts */

/*
    Documentation:
    Serves as central hub for all model schema for better organization.
    Schema is defined here and utilized in migrations folder.
*/

/*
    Additional Documentation:
    - Column Configurations: https://db-migrate.readthedocs.io/en/latest/API/SQL/ 
    - Supported Data Types: https://github.com/db-migrate/shared/blob/master/data_type.js

*/

/* 
    CURRENT TODOS:
    - Create a Ingredient Schema
    - Create a Step Schema
    - Create a Tip Schema
*/

/* IMPORT INTERNAL MODULES */
import { ingredientSchema } from "./Ingredient";
import { recipeSchema } from "./Recipe";
import { reviewSchema } from "./Review";
import { stepSchema } from "./Step";
import { tipSchema } from "./Tip";
import { userSchema } from "./User";

export const dataSchema = {
    ingredient: ingredientSchema,
    recipe: recipeSchema,
    review: reviewSchema,
    step: stepSchema,
    tip: tipSchema,
    user: userSchema
}