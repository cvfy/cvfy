// IMPORTED PACKAGES
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE DYNAMIC USER SCHEMA (BECAUSE OF THE CV AND COVER LETTER FLEXIBILITY WE DID NOT MADE THE SCHEMA TO STRICT)

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
// EXPORT USER SCHEMA
module.exports = User = mongoose.model("users", UserSchema);