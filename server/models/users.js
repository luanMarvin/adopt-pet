const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userName: String,
    userPass: String,
    userPetsToAdopt: Object,
    userPetsAdopted: Object
});

const UserModel = mongoose.model('users', schema);

module.exports = UserModel;