const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userSignup = async (req, res) => {
    const { email, name, password } = req.body;
    if (!email || !password || !name) {
        res.json("Missing credentials")
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        res.status(404).json({ msg: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await UserModel.create({ email, name, password: hashPassword });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
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
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        res.json("Invalid Credentials");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
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