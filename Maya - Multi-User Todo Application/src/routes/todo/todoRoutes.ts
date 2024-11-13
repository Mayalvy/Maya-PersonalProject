import express from "express";
import {addTodo} from "../../controllers/todo/addTodo";

const router = express.Router();

router.post("/addTodo", addTodo)
export default router;