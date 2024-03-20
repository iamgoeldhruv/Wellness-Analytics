const express = require('express');
const loginUser = require('../controllers/authcontroller');
const router = express.Router();
router.post('/login',loginUser);
module.exports = router;