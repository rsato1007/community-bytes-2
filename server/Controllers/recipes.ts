/* CONTROLLERS: recipes.ts */

/* IMPORT EXTERNAL MODULES */
import { Request, Response } from "express"

const recipeController = {
    list: function (req: Request, res: Response) {
        res.status(501).send("Route Not Available");
    },
    detail: function (req: Request, res: Response) {
        res.status(501).send("Route Not Available");
    },
    create: function (req: Request, res: Response) {
        res.status(501).send("Route Not Available");
    },
    update: function (req: Request, res: Response) {
        res.status(501).send("Route Not Available");
    },
    delete: function (req: Request, res: Response) {
        res.status(501).send("Route Not Available");
    }
}

export default recipeController;