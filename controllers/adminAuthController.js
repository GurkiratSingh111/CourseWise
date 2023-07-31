const AdminModel = require('../models/AdminModel');
const jwt = require('jsonwebtoken');
const adminSignup = async (req, res) => {
    const { email, name, password } = req.body;
    if (!email || !password || !name) {
        res.json("Missing credentials")
    }
    const admin = await AdminModel.create({ email, name, password });
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_ADMIN_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    })
    res.status(201).json({
        user: {
            email: email,
            name: name,
            token
        }
    })
}
const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.json("Missing credentials")
    }
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
        res.status(404).json({ msg: "Admin not found" });
    }
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_ADMIN_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    })
    res.status(201).json({
        user: {
            email: email,
            token
        }
    })
}

module.exports = {
    adminLogin, adminSignup
}