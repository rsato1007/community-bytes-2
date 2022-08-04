// Routes index.js
const router = require('express').Router();

/*
    Much like the middleware index.js file, this acts as a "hub" for all route code.
    Each route will have it's own seperate file that will then be imported here.
*/
router.use("/", (req, res, next) => {
    res.send("Hello World");
});

// EXAMPLE CODE FOR FUTURE REFERENCE
// router.use("/posts", require("./posts"));

// Routes we'll need:
// -----------------------
// Authentication Routes
// Users Routes
// Recipes Routes
// Ingredients Routes
// Reviews Routes

module.exports = router;