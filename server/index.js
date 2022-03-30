const express = require("express");
const bodyParse = require("body-parser");
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:8001'
};

app.use(cors(corsOptions));

//const db = require("./app/models");

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: "Welcome" }))

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server is running on " + PORT))