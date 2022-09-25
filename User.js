// import mongoose, { Schema } from 'mongoose';
// import mongoose from 'mongoose'
const mongoose = require("mongoose")
const { Schema } = mongoose;

//it is just a schema of user

const UserSchema = new Schema({
    name :{
        type: String,
        required: true   
    },
    email:{
        type : String, 
        required: true,
        unique : true
    } ,
    password:{
        type : String , 
        required: true,
        unique : true
    } ,
    date:{
        type : Date, 
        default : Date.now
    }
 
});

const User = mongoose.model("User" , UserSchema);
const ind = User.createIndexes(); //use to create a index for all the user o avoid the repetition of the same entery int the database
console.log(ind)

module.exports =  User

// export.module = 