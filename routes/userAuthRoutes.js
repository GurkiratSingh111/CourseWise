const express = require('express');
const router = express.Router();
const { userLogin, userSignup } = require('../controllers/userAuthController')

router.route('/userlogin').post(userLogin);
router.route('/usersignup').post(userSignup);

module.exports = router;