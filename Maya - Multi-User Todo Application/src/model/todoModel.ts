import mongoose from "mongoose";

export const TodoSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    dueDate: {
        type: Date,
        required: [true, 'Due date is required'],
    },
    status: {
        type: String,
        enum: ['complete', 'incomplete'],
        default: 'incomplete',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model for private todos
        required: [true, 'User ID is required'],
    },
}, {
    timestamps: true,
})

export const Todo = mongoose.model('Todo',TodoSchema);