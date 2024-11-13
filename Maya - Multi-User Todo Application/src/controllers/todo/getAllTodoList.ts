import { Request, Response } from 'express';
import { Todo } from '../../model/todoModel'; 

export async function getAllTodoList(req: Request, res: Response) {
    try {
        const todo = await Todo.find().populate("user", "title");
        res.status(200).json(todo);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send({ error: "Failed to fetch posts" });
    }
}
