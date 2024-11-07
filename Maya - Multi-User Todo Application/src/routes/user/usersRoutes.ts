import express from "express";
import { login, register } from "../../controllers/user/setUser";
import { getUser } from "../../controllers/user/getUser";
import { checkUser } from "../../controllers/middlwares/loginMid";

const router = express.Router();

router.use(checkUser);
router.post("/login", login).post("/register", register).get("/getUser", getUser);

export default router;