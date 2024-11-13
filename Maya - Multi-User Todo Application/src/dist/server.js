"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
var cookie_parser_1 = require("cookie-parser");
var usersRoutes_1 = require("./routes/user/usersRoutes");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.use('/user', usersRoutes_1["default"]);
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
//middlewares
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//connection to db
var DB_URL = process.env.DB_URL;
var mongoose = require('mongoose');
mongoose.connect(DB_URL).then(function () {
    console.log('connected to db');
})["catch"](function (err) {
    console.log(err);
});
