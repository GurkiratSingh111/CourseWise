const AdminModel = require('../models/AdminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');


const meRoute = (req, res) => {
    res.send("This is me controller");
}

module.exports = {
    meRoute
}