// Middleware index.js

/* IMPORT EXTERNAL MODULES */
const path = require('path');

// This file acts as a main "hub" for all middleware.
module.exports = function(express, app) {
    app.use(express.static(path.join(__dirname, "../..", "build")));
    app.use(express.static("public"));

    // Documentation on res.sendFile: https://www.geeksforgeeks.org/express-js-res-sendfile-function/
    app.use((req, res, next) => {
        // You can read more about path.join here: https://nodejs.org/api/path.html
        // path ../../build/index.html
        // NOTE: code is expecting a React build.
        res.sendFile(path.join(__dirname, "../..", "build", "index.html"));
    });
}