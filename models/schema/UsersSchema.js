const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    appointments:{
        type: Object,
        default: []
    },
    history:{
        type: Object,
        default: []
    }
});

module.exports = mongoose.model('Users', UsersSchema);
