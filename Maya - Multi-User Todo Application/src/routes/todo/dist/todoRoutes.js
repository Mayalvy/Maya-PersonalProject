"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addTodo_1 = require("../../controllers/todo/addTodo");
var router = express_1["default"].Router();
router.post("/addTodo", addTodo_1.addTodo);
exports["default"] = router;
