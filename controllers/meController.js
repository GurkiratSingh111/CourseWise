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
        const { name, email, role } = admin;
        return res.json({ name, email, role });
    }
    const { name, email, role } = user;
    console.log(user);
    return res.json({ name, email, role });
}

module.exports = {
    meRoute
}