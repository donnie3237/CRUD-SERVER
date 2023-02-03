import mongoose from "mongoose";
const users = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        height:{
            type: Number,
            required: true
        },
        weight:{
            type: Number,
            required: true
        },
        desc:{
            type: String,
            required: true
        }
    }, 
    {   
        collection: 'users'
    }
)

module.exports = mongoose.model("users", users);