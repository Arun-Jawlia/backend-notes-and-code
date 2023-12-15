const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema({
    email: {
        type :String,
        unique :true,
    }, 
    password: {
        type:String,
        required:true
    },
    name: {
        type: String
    }
})

const UserModel = new mongoose.model('users', UserSchema)
module.exports = UserModel