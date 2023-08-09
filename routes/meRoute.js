const express = require('express');
const router = express.Router();
const { authUser } = require('../middleware/authmiddleware');
const { meRoute } = require('../controllers/meController');

router.route('/me').get(authUser, meRoute);

module.exports = router;