// server.js

/* IMPORT EXTERNAL MODULES */
const express = require('express');

/* IMPORT INTERNAL MODULES */
const app = express();

/* INSTANCED MODULES */
const PORT = 8000;

/* MIDDLEWARE */
require('./middleware/index')(express, app);

/* ROUTES */
app.use('/api', require('./routes/index'));

/* REACT.JS CONNECTION */

/* SERVER LISTENER */
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});