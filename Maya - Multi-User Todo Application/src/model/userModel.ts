import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
})

export const User = mongoose.model('User',UserSchema);