// Modules and Globals
require("dotenv").config();
const express = require("express");
const res = require("express/lib/response");
const { send } = require("express/lib/response");
const app = express();
const methodOverride = require("method-override");

//Express sttings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use("/places", require("./controllers/places"));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//Controllers routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("*", (req, res) => {
    res.render("error404");
});

app.listen(process.env.PORT);
