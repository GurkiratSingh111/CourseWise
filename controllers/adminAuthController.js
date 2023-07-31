const AdminModel = require('../models/AdminModel');
const jwt = require('jsonwebtoken');
const adminSignup = async (req, res) => {
    const { email, name, password } = req.body;
    if (!email || !password || !name) {
        res.json("Missing credentials")
    }
    const admin = await AdminModel.create({ email, name, password });
    console.log(admin._id)
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    })
    res.status(201).json({ admin, token })
}
const adminLogin = (req, res) => {



}

module.exports = {
    adminLogin, adminSignup
}