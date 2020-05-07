const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const projects = require('./routes/api/items');

app.use(bodyParser.json());

const db = require("./keys.js/keys").mongoURI;

mongoose
    .connect(db, { useUnifiedTopology: true })
    .then(() => console.log('Connected!'))
    .catch(err => console.log(err));

    app.use('/api/items',projects);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server stared on ${port}`))

