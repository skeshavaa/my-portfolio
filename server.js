const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const projects = require('./routes/api/items');

app.use(bodyParser.json());

const db = require("./keys.js/keys").mongoURI;

mongoose
    .connect(db, { useUnifiedTopology: true })
    .then(() => console.log('Connected!'))
    .catch(err => console.log(err));

    app.use('/api/items',projects);

    if (process.env.NODE_ENV === 'production'){
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    } 

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server stared on ${port}`))

