const mongoose = require('mongoose');
const valid = require('validator');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate:{
            validator: (v) => {
                return valid.isEmail(v);
            },
            message: `{VALUE} is not an email!`
        }
    },
    password:{
        type: String,
        trim: true,
        required: true,
        validate:{
            validator: (v) =>{
                return valid.isStrongPassword(v);
            },
            message: `{VALUE} is not a Strong Password!`
        }
    }
})

const User = mongoose.model('user', UserSchema)
module.exports = User;