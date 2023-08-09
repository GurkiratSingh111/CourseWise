const Admin = require('../models/AdminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');


const meRoute = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
        const admin = await Admin.findOne({ _id: req.user.userId });
        if (!admin) {
            res.json("No user/admin exist");
        }
        const { name, email } = admin;
        res.json({ name, email });
    }
    const { name, email } = user;
    res.json({ name, email });
}

module.exports = {
    meRoute
}