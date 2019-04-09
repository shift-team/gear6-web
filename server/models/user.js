const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = Schema({
    username: {
        type: String,
        index: true
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
});

module.exports = mongoose.model('User', User);
