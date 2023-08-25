const mongoose = require('mongoose');
const Auth = require('../schema/auth');

const AuthModel = mongoose.model("USER",Auth);

module.exports = AuthModel