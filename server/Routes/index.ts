/* ROUTES: index.ts */

/*
    Additional Documentation:
    - Express Router: https://expressjs.com/en/4x/api.html#router 
*/

/* IMPORT EXTERNAL MODULES */
import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

/* IMPORT INTERNAL MODULES */
import recipeRouter from "./recipes";

router.use("/recipes", recipeRouter);

export default router;