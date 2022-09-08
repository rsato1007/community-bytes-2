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
    .get(recipeController.list)
    .put((req: Request, res: Response, next: NextFunction) => {
        return;
    })
    .post((req: Request, res: Response, next: NextFunction) => {
        return;
    })
    .delete((req: Request, res: Response, next: NextFunction) => {
        return;
    })

export default recipeRouter;