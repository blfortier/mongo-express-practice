const mongoose = require('mongoose');
// bring in the Schema class
const Schema = mongoose.Schema;

// create a new item of the class Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);

// times searched for stock  5 min shoot for 10