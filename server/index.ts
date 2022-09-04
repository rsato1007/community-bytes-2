/* SERVER: index.ts */

/* IMPORT EXTERNAL MODULES */
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config({path: path.resolve(__dirname, '../.env')});

/* IMPORT INTERNAL MODULES */
import "./Configs/db.config";

/* CONFIGURATION */
const PORT = 3000;

/* INSTANCED MODULES */
const app = express();

/* MIDDLEWARE */


/* ROUTES */

/* REACT.JS CONNECTION */
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.send("index.html");
    } catch (error) {
      next(error);
    }
});

/* SERVER LISTENER */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});