const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const services = require("./data/services.json");
const projects = require("./data/projects.json");
//set view engine to ejs and views folder
app.set("view engine", "ejs");
app.set("views", "views");

//static folder
app.use(express.static(path.join(__dirname, "public")));

//routing
app.use("/home", (req, res, next) => {
  res.render("index", {
    selected: "home",
  });
});
app.use("/aboutme", (req, res, next) => {
  res.render("aboutme", {
    selected: "aboutme",
  });
});
app.use("/contactme", (req, res, next) => {
  res.render("contactme", {
    selected: "contactme",
  });
});
app.use("/services", (req, res, next) => {
  res.render("services", {
    selected: "services",
    services: services,
  });
});
app.use("/projects", (req, res, next) => {
  res.render("projects", {
    selected: "projects",
    projects: projects,
  });
});

app.use("/", (req, res, next) => {
  res.render("index", {
    selected: "home",
  });
});

app.listen(8080);
