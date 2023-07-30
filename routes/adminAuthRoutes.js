const express = require('express');
const router = express.Router();
const { adminLogin, adminSignup } = require('../controllers/adminAuthController')

router.route('/adminlogin').post(adminLogin);
router.route('/adminsignup').post(adminSignup);

