//Get the environement variables
require("dotenv").config();

const express = require("express");
const res = require("express/lib/response");
const { send } = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("*", (req, res) => {
    res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
