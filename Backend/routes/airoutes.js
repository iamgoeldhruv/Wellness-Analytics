const express = require('express');
const aiController = require('../controllers/aicontrollers');
const router = express.Router();
router.get('/', aiController.generateAIResponse);

module.exports = router;