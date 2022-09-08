/* ROUTES: recipes.ts */

/* IMPORT EXTERNAL MODULES */
import express, { Request, Response, NextFunction } from "express";
const recipeRouter = express.Router();

/* IMPORT INTERNAL MODULES */
import recipeController from "../Controllers/recipes";

recipeRouter.route(["/", "/:id"])
    .all((req: Request, res: Response, next: NextFunction) => {
        next();
    })
    /* 
        Most of this will be altered, but for now, we'll use it as a template.
    */
    .get(recipeController.list)
    .put(recipeController.update)
    .post(recipeController.create)
    .delete(recipeController.delete)

export default recipeRouter;