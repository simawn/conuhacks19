const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: Number
    },
    history:{
        type: Number
    }
});

module.exports = mongoose.model('Users', UsersSchema);
