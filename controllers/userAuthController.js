const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const userSignup = async (req, res) => {
    const { email, name, password } = req.body;
    if (!email || !password || !name) {
        res.json("Missing credentials")
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        res.status(404).json({ msg: "User already exists" });
    }
    const user = await UserModel.create({ email, name, password });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_USER_SECRET, {
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
const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.json("Missing credentials")
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
        res.status(404).json({ msg: "User not found" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_USER_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    })
    res.status(201).json({
        user: {
            email: user.email,
            name: user.name,
            token
        }
    })
}

module.exports = {
    userSignup, userLogin
}