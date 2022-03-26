//Get the environement variables
require("dotenv").config();

const express = require("express");
const res = require("express/lib/response");
const { send } = require("express/lib/response");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("*", (req, res) => {
    res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
