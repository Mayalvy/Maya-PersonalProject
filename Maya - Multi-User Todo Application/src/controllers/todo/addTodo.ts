import express, { Request, Response } from 'express';
import { User } from '../../model/userModel';
import { Todo } from '../../model/todoModel';

export async function addTodo(req: any, res: any) {
    try {
        const { title, description  } = req.body;
        const userId = req.cookies.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).send({ error: 'User not authenticated' });
       }

       const newTodo = new Todo({
        title, description,
        user: userId,
        createdAt: new Date(),
    });
    await newTodo.save();
        res.status(200).send({ ok: true });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send({ error: 'Failed to create post' });
    }
};

