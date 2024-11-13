"use strict";
exports.__esModule = true;
exports.Todo = exports.TodoSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TodoSchema = new mongoose_1["default"].Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot exceed 500 characters']
    },
    dueDate: {
        type: Date,
        required: [true, 'Due date is required']
    },
    status: {
        type: String,
        "enum": ['complete', 'incomplete'],
        "default": 'incomplete'
    },
    userId: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    }
}, {
    timestamps: true
});
exports.Todo = mongoose_1["default"].model('Todo', exports.TodoSchema);
