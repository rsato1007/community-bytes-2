// server.js
/* IMPORT EXTERNAL MODULES */
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const express = require('express');

require('./models');

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