const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create User Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cv: [
        {
            
                     
        }
    ],
    coverLetters: [
        {
            
                    
        }
    ]

    
})
module.exports = User = mongoose.model("users", UserSchema);