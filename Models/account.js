const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accSchema = new Schema({
    username: {
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
    level: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Account = mongoose.model('Account', accSchema);
module.exports = Account;