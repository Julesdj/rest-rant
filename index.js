// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const { res } = require("express/lib/response");
const { send } = require("express/lib/response");

//Express settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
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
