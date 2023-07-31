const UserModel = require('../models/UserModel');

const userSignup = (req, res) => {
    res.send("User Signup")
}
const userLogin = (req, res) => {
    res.send("User Login ")
}

module.exports = {
    userLogin, userSignup
}