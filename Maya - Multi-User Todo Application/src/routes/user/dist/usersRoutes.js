"use strict";
exports.__esModule = true;
var express_1 = require("express");
var setUser_1 = require("../../controllers/user/setUser");
var getUser_1 = require("../../controllers/user/getUser");
var loginMid_1 = require("../../controllers/middlwares/loginMid");
var router = express_1["default"].Router();
router.post("/login", setUser_1.login).post("/register", setUser_1.register).get("/getUser", loginMid_1.checkUser, getUser_1.getUser);
exports["default"] = router;
