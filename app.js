var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var indexRouter = require("./routes/index");

var db = require("./db");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/dashboard/new", indexRouter);
app.use("/dashboard/updateStudentData", indexRouter);

const port = 2000;

app.listen(port, "0.0.0.0", () =>
  console.log(`This app is listening on port ${port}`)
);
module.exports = app;